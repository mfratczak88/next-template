'use client';
import Button from '@/components/ui/Button';
import FormField from '@/components/ui/Form/FormField';
import Input from '@/components/ui/Form/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { string, z } from 'zod';

interface FormData {
  email: string;
}

export interface Props {
  csrfToken?: string;
}

const EmailForm: FC<Props> = ({ csrfToken }) => {
  const {
    register,
    formState: { errors, isValid, isSubmitted },
    handleSubmit,
  } = useForm<FormData>({
    mode: 'onBlur',
    resolver: zodResolver(z.object({ email: string().email() })),
  });

  const onSubmit = ({ email }: FormData) => {
    signIn('email', { email, callbackUrl: '/' });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 max-w-lg my-8">
      <input type="hidden" defaultValue={csrfToken} name="csrfToken" />
      <FormField error={errors.email?.message} label="Email">
        <>
          <Input
            {...register('email', { required: true })}
            error={!isValid && !!errors.email?.message}
            type="email"
            name="email"
            placeholder="Your email address"
          />
        </>
      </FormField>
      <Button loading={isSubmitted} disabled={!isValid || isSubmitted} className="w-full">
        Log in
      </Button>
    </form>
  );
};

export default EmailForm;
