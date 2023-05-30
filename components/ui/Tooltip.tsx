'use client';
import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
      className,
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

interface TooltipsProps
  extends React.PropsWithChildren,
    React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> {
  text: string;
}
export const Tooltip: React.FC<TooltipsProps> = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Root>,
  TooltipsProps
>(({ text, children, ...props }, ref) => (
  <TooltipPrimitive.Root {...props}>
    <TooltipTrigger asChild ref={ref}>
      {children}
    </TooltipTrigger>
    <TooltipContent>
      <p>{text}</p>
    </TooltipContent>
  </TooltipPrimitive.Root>
));

Tooltip.displayName = TooltipPrimitive.Root.displayName;

export { TooltipTrigger, TooltipContent, TooltipProvider };

export default Tooltip;
