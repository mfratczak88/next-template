import { HTMLAttributes, forwardRef } from 'react';

export type Props = HTMLAttributes<HTMLImageElement>;

const Logo = forwardRef<HTMLImageElement, Props>((props, ref) => (
  <img ref={ref} {...props} src="/favicon.ico" alt="Logo" />
));

Logo.displayName = 'Logo';

export default Logo;
