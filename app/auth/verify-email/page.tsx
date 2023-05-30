import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Verify your email',
  description: 'Check your email in order to access the application',
};

const VerifyEmailPage = () => {
  return (
    <div className="py-28 w-[330px] mx-auto flex flex-col gap-4">
      <h2 className="text-4xl font-extrabold">Check your email</h2>
      <p className="text-xl">A sign in link has been sent your email address.</p>
    </div>
  );
};

export default VerifyEmailPage;
