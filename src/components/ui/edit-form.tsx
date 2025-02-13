'use client';

import { Button, cn, Form, Input, Switch, Textarea } from '@heroui/react';
import Link from 'next/link';
import { useRouter } from 'nextjs-toploader/app';
import { FormEvent, Fragment, useState } from 'react';
import toast from 'react-hot-toast';

type FormInputProps = {
  label: string;
  name: string;
  defaultValue?: string;
  type?: string;
  error?: string;
  required?: boolean;
  componentType?: 'input' | 'textarea' | 'switch';
  component?: (value: any, loading: boolean) => React.ReactNode;
  className?: string;
  color?:
    | 'primary'
    | 'default'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'danger';
};

type EditFormProps = {
  topChildren?: React.ReactNode;
  bottomChildren?: React.ReactNode;
  children?: React.ReactNode;
  title: string;
  Icon?: React.FC;
  inputs?: FormInputProps[];
  data?: any;
  cancelLink?: string;
  afterSave?: string;
  className?: string;
  isLoading?: boolean;
  onSubmit?: (data: FormData) => Promise<string>;
};

export default function EditForm({
  topChildren,
  bottomChildren,
  children,
  title,
  Icon,
  inputs,
  data,
  cancelLink,
  afterSave,
  className,
  onSubmit,
}: EditFormProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const formSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const target = event.target as HTMLFormElement;
    const formData = new FormData(target);
    if (onSubmit) {
      const SubmitError = await onSubmit(formData);
      if (SubmitError) {
        toast.error(SubmitError);
        setLoading(false);
        return;
      }
      toast.success(`${title} create successfully`);
    }
    if (afterSave) {
      router.push(afterSave);
    } else if (cancelLink) {
      router.push(cancelLink);
    } else {
      router.back();
    }
  };

  return (
    <div className="">
      <Form
        onSubmit={formSubmit}
        validationBehavior="native"
        className={cn(className)}
      >
        {topChildren}
        <div className="sticky top-0 z-[99] flex w-full items-center justify-between bg-white p-4 pt-3 drop-shadow-sm">
          <h3 className="text-primary flex flex-1 items-center gap-2 text-3xl">
            {Icon && <Icon />}
            {title}
          </h3>
          <div className="flex w-full justify-end gap-2">
            {cancelLink && (
              <Button
                isDisabled={loading}
                as={Link}
                href={cancelLink}
                color="danger"
                variant="bordered"
              >
                Cancel
              </Button>
            )}
            <Button
              isLoading={loading}
              type="submit"
              color="primary"
              variant="solid"
            >
              Save
            </Button>
          </div>
        </div>
        <div className="my-5 flex w-full flex-col gap-4 p-4">
          {children}
          {inputs &&
            inputs.map((input) => (
              <Fragment key={input.name}>
                {input.component ? (
                  input.component(data && data[input.name], loading)
                ) : input.componentType === 'textarea' ? (
                  <Textarea
                    className={input.className}
                    defaultValue={
                      input.defaultValue || (data && data[input.name]) || ''
                    }
                    label={input.label}
                    name={input.name}
                    variant="bordered"
                    color={input.color || 'primary'}
                    isRequired={input.required}
                    isDisabled={loading}
                    fullWidth
                  />
                ) : input.componentType === 'switch' ? (
                  <Switch
                    isDisabled={loading}
                    name={input.name}
                    color={input.color || 'primary'}
                    defaultSelected={data[input.name]}
                  >
                    {input.label}
                  </Switch>
                ) : (
                  <Input
                    className={cn('shadow-none', input.className)}
                    defaultValue={
                      input.defaultValue || (data && data[input.name]) || ''
                    }
                    label={input.label}
                    name={input.name}
                    variant="bordered"
                    color={input.color || 'primary'}
                    isRequired={input.required}
                    isDisabled={loading}
                    type={input.type || 'text'}
                    fullWidth
                  />
                )}
              </Fragment>
            ))}
          {bottomChildren}
        </div>
      </Form>
    </div>
  );
}
