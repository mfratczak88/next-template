import Logo from '@/components/Logo';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="p-8 flex flex-col gap-16">
      <div>
        <Link className="flex items-center" href="/">
          <Logo className="w-12 h-12" />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
