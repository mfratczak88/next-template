'use client';
import { FC, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import InputError from './InputError';
import { cn } from '@/lib/utils';
import If from '@/components/If';

export interface Props extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  error?: ReactNode;
  label?: string;
}
const FormField: FC<Props> = ({ children, error, className, label, ...props }) => {
  return (
    <div {...props} className={cn('flex flex-col gap-3', className)}>
      <If satisifed={!!label}>
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
      </If>
      {children}
      {error ? <InputError>{error}</InputError> : <></>}
    </div>
  );
};

export default FormField;
