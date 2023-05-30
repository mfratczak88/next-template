import { LinkProps, default as RouterLink } from 'next/link';
import { FC, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

export default RouterLink;

const NavLink: FC<PropsWithChildren<LinkProps & { className?: string }>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <RouterLink
      className={cn(
        'block select-none space-y-1 py-2 rounded-md leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        className,
      )}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

export { NavLink };
