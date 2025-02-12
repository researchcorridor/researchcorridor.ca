'use client';

import { cn } from '@heroui/react';
import React, { Fragment } from 'react';

type SectionProps = {
  show?: boolean;
  bgWhite?: boolean;
  as?: React.ElementType;
  after?: React.ReactNode;
  before?: React.ReactNode;
  title?: string;
  titleClassName?: string;
  description?: string;
  descriptionClassName?: string;
  innerClassName?: string;
  sectionClassName?: string;
  className?: string;
  children?: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement | null>;
  props?: React.HTMLAttributes<HTMLElement>;
};

export default function Section({
  show = true,
  bgWhite = false,
  as: Component = 'section',
  after,
  before,
  title,
  titleClassName,
  description,
  descriptionClassName,
  sectionClassName,
  innerClassName,
  className,
  children,
  ref,
  ...props
}: SectionProps) {
  if (!show) return null;
  return (
    <Fragment>
      {before}
      <Component
        {...props}
        ref={ref}
        className={cn(
          'relative py-32 max-md:py-20',
          sectionClassName,
          bgWhite && 'bg-white',
        )}
      >
        <div className={cn('mx-auto max-w-7xl', innerClassName)}>
          {title && (
            <h2
              className={cn(
                'text-foreground-800 px-6 text-center text-3xl max-md:text-2xl',
                titleClassName,
              )}
            >
              {title}
            </h2>
          )}
          {description && (
            <p
              className={cn(
                'text- mx-auto mt-4 max-w-3xl px-6 text-center text-xl max-md:text-lg max-sm:text-base',
                descriptionClassName,
              )}
            >
              {description}
            </p>
          )}
          <div className={cn('mt-12', className)}>{children}</div>
        </div>
      </Component>
      {after}
    </Fragment>
  );
}
