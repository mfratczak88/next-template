import Button from '@/components/ui/Button';

import { Github, Linkedin, Twitter } from 'lucide-react';
import { Metadata } from 'next';
import { getCsrfToken } from 'next-auth/react';
import EmailForm from './email-form';

export const metadata: Metadata = {
  title: 'Sign in to Todoist clone',
  description: 'Choose sign in method and sign in',
};

const SignIn = async () => {
  const csrfToken = await getCsrfToken();
  return (
    <div className="flex flex-col w-[320px] mx-auto gap-10">
      <p className="font-semibold text-4xl text-left">Log in</p>
      <div className="flex flex-col gap-3">
        <Button className="flex items-center gap-2" variant="outline">
          <Github />
          <span>Continue with Github</span>
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Twitter />
          <span>Continue with Twitter</span>
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Linkedin />
          <span>Continue with Linkedin</span>
        </Button>
        <EmailForm csrfToken={csrfToken} />
        <p className="text-xs">
          By continuing with Github, Twitter, or Apple, you agree to Todoist Clone{' '}
          <span className="underline">Terms of Service</span> and{' '}
          <span className="underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
