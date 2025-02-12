'use client';

import { Button, Form, Input } from '@heroui/react';
import { useRouter } from 'nextjs-toploader/app';
import { FormEvent, useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { PiEyeDuotone, PiEyeSlashDuotone } from 'react-icons/pi';

import { userChangePassword, userLogout } from '@/actions/auth.action';

export default function ChangePassword() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });

  const handleSubmit: (event: FormEvent<HTMLFormElement>) => void = async (
    e,
  ) => {
    e.preventDefault();
    setLoading(true);
    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      setError('Password does not match');
      return;
    }
    await userChangePassword(formData.password);
    await userLogout();
    router.push('/login');
    setLoading(false);
  };
  return (
    <div className="p-4">
      <Form onSubmit={handleSubmit} validationBehavior="native">
        <h3 className="text-primary mb-5 flex items-center gap-2 text-3xl">
          Change Password
        </h3>
        {error && <p className="text-center text-red-500">{error}</p>}
        <Input
          fullWidth
          isRequired
          disabled={loading}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }}
          value={formData.password}
          variant="bordered"
          errorMessage="Password is required"
          name="password"
          label="New Password"
          endContent={
            <Button
              isIconOnly
              variant="light"
              color="primary"
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              size="sm"
              onPress={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <PiEyeSlashDuotone className="pointer-events-none text-2xl" />
              ) : (
                <PiEyeDuotone className="pointer-events-none text-2xl" />
              )}
            </Button>
          }
          type={isVisible ? 'text' : 'password'}
        />
        <Input
          fullWidth
          isRequired
          disabled={loading}
          onChange={(e) => {
            setFormData({ ...formData, confirmPassword: e.target.value });
          }}
          value={formData.confirmPassword}
          variant="bordered"
          errorMessage="Password is required"
          name="confirmPassword"
          label="Confirm Password"
          endContent={
            <Button
              isIconOnly
              variant="light"
              color="primary"
              aria-label="toggle password visibility"
              className="focus:outline-none"
              type="button"
              size="sm"
              onPress={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <PiEyeSlashDuotone className="pointer-events-none text-2xl" />
              ) : (
                <PiEyeDuotone className="pointer-events-none text-2xl" />
              )}
            </Button>
          }
          type={isVisible ? 'text' : 'password'}
        />

        <div className="mt-10 flex w-full justify-end gap-2">
          <Button
            type="submit"
            color="primary"
            variant="solid"
            isLoading={loading}
          >
            <FaSave />
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
