import '@/styles/globals.css';

import { TooltipProvider } from '@/components/ui/Tooltip';
import SessionProvider from '@/lib/client/SessionProvider';
import ThemeProvider from '@/lib/client/ThemeProvider';
import { FC, PropsWithChildren } from 'react';

export const metadata = {
  title: 'Next app',
  description: 'Next app description',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true}>
        <SessionProvider>
          <ThemeProvider>
              <TooltipProvider delayDuration={200}>{children}</TooltipProvider>
          </ThemeProvider>
        </SessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
