import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

/* 
   Next auth doesnt support middleware for DB stored sessions
   In order to restrict access this can be used within a layout
**/
const WithAuth = async ({ children }: PropsWithChildren) => {
  const session = await getSession();
  if (!session) return redirect('/auth/login');
  return <>{children}</>;
};

export default WithAuth;
