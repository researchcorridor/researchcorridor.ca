'use client';

import { Button, cn, Form, Input } from '@nextui-org/react';
import Link from 'next/link';
import { useRouter } from 'nextjs-toploader/app';
import { useState } from 'react';
import { IoLogInOutline } from 'react-icons/io5';
import {
  PiEyeDuotone,
  PiEyeSlashDuotone,
  PiHouseLineDuotone,
} from 'react-icons/pi';

import { userLogin } from '@/actions/auth.action';
import { login as textData } from '@/constant/auth.text';

export default function LoginPage({ className }: { className: string }) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      setLoading(true);
      const redirectUrl = await userLogin(email, password);
      if (redirectUrl) {
        router.push(redirectUrl);
      }
    } catch {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form
      className={cn(
        'm-auto mt-10 flex w-full max-w-sm flex-col gap-4 rounded-xl p-5 shadow-2xl backdrop-blur-lg max-md:max-w-2xl',
        className,
      )}
      validationBehavior="native"
      onSubmit={handleLogin}
    >
      <div className="w-full py-4">
        <h1 className="text-center text-2xl max-md:text-center max-sm:text-xl">
          {textData.loginText}
        </h1>
        {error && (
          <p className="text-ls mt-5 text-center text-red-500">{error}</p>
        )}
      </div>
      <Input
        fullWidth
        isRequired
        disabled={loading}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        labelPlacement="outside"
        errorMessage="Please enter a valid email"
        placeholder="Enter your valid email"
        name="email"
        label="Email"
        type="email"
        size="lg"
        classNames={{
          label: 'text-foreground-900 ml-2',
        }}
      />
      <Input
        fullWidth
        isRequired
        disabled={loading}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        labelPlacement="outside"
        errorMessage="Please enter a your password"
        name="password"
        label="Password"
        placeholder="Enter your password"
        size="lg"
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
      <div className="flex w-full justify-end">
        <Button
          variant="light"
          color="primary"
          size="sm"
          as={Link}
          href="/forgot-password"
        >
          Forgot password?
        </Button>
      </div>
      <Button
        isLoading={loading}
        fullWidth
        color="primary"
        type="submit"
        size="lg"
      >
        Login
        <IoLogInOutline className="text-2xl" />
      </Button>
      <Button
        isLoading={loading}
        fullWidth
        color="primary"
        variant="bordered"
        size="lg"
        as={Link}
        href="/"
        className="md:hidden"
      >
        <PiHouseLineDuotone className="text-xl" />
        {textData.button}
      </Button>
    </Form>
  );
}
