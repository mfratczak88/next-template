'use client';
import { cn } from '@/lib/utils';
import { VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

export const inputVariant = cva(
  `
  flex h-10 w-full rounded-md border border-input
  bg-transparent px-3 py-2 text-sm ring-offset-background 
  file:border-0 file:bg-transparent file:text-sm file:font-medium 
  placeholder:text-muted-foreground focus-visible:outline-none 
  focus-visible:ring-2 focus-visible:ring-ring 
  focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50
  data-[invalid=true]:border-rose-500
`,
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariant> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        data-invalid={error}
        type={type}
        className={cn(inputVariant({ className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export default Input;
