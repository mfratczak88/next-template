import User from '@/types/user';
import { useSession, signOut } from 'next-auth/react';
import { useCallback } from 'react';

export const useUser = (): { user?: User; logout: () => void } => {
  const { data } = useSession();
  const logout = useCallback(() => {
    signOut();
  }, []);
  return { logout, user: data?.user };
};
export default useUser;
