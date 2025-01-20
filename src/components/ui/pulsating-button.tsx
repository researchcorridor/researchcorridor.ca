import { Button, ButtonProps } from '@nextui-org/react';
import { forwardRef } from 'react';

import tailwindConfig from '../../../tailwind.config';

interface PulsatingButtonProps extends ButtonProps {
  pulseColor?: string;
  duration?: string;
}

export const PulsatingButton = forwardRef<
  HTMLButtonElement,
  PulsatingButtonProps
>(({ children, duration = '1.5s', ...props }, ref) => {
  return (
    <div
      className="relative"
      style={
        {
          '--pulse-color': tailwindConfig.theme.extend.colors.primary.DEFAULT,
          '--duration': duration,
        } as React.CSSProperties
      }
    >
      <Button
        size="lg"
        color="primary"
        ref={ref}
        className="relative z-10"
        {...props}
      >
        {children}
      </Button>
      <div className="absolute left-1/2 top-1/2 z-0 size-full -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-2xl" />
    </div>
  );
});

PulsatingButton.displayName = 'PulsatingButton';
