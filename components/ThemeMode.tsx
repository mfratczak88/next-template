'use client';

import { Moon, Sun } from 'lucide-react';
import Button from '@/components/ui/Button';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Tooltip from './ui/Tooltip';

const ThemeMode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Tooltip text="Theme">
      {theme === 'light' ? (
        <Button size="sm" variant="ghost" onClick={() => setTheme('dark')}>
          <Moon />
        </Button>
      ) : (
        <Button size="sm" variant="ghost" onClick={() => setTheme('light')}>
          <Sun />
        </Button>
      )}
    </Tooltip>
  );
};

export default ThemeMode;
