'use client';

import { Button, cn } from '@heroui/react';
import * as Dialog from '@radix-ui/react-dialog';
import { useEffect, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';

interface DialogBoxProps {
  title?: string;
  children?: React.ReactNode;
  boxContent?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  className?: string;
}

export default function DialogBox({
  title,
  children,
  boxContent,
  onOpenChange,
  open,
  className,
}: DialogBoxProps) {
  const [boxOpen, setBoxOpen] = useState<boolean>(false);
  useEffect(() => {
    if (open !== undefined) setBoxOpen(open);
  }, [open]);
  return (
    <Dialog.Root
      open={open ?? boxOpen}
      onOpenChange={(open) => {
        setBoxOpen(open);
        onOpenChange?.(open);
      }}
    >
      <Dialog.Trigger asChild>
        {children || (
          <Button color="primary" variant="light" isIconOnly>
            Dialog Box Trigger
          </Button>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            animateIn,
            'fixed inset-0 z-[995] bg-black/10 backdrop-blur-sm',
          )}
        />
        <Dialog.Content
          className={cn(
            animateIn,
            animateOut,
            'fixed left-1/2 top-1/2 z-[999] m-2 w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 focus:outline-none',
          )}
        >
          <div className="bg-background shadow-xl duration-200 sm:rounded-lg">
            {title ? (
              <Dialog.Title>
                <div className="border-primary-200 flex items-center justify-between border-b p-4 py-2">
                  <h1 className="text-primary text-2xl">{title}</h1>
                  <Button
                    color="danger"
                    variant="light"
                    isIconOnly
                    onPress={() => {
                      setBoxOpen(false);
                      onOpenChange?.(false);
                    }}
                  >
                    <MdOutlineClose className="text-2xl" />
                  </Button>
                </div>
              </Dialog.Title>
            ) : (
              <Dialog.Title />
            )}
            <div
              className={cn(
                'max-h-[calc(100vh-80px)] overflow-y-auto p-4',
                className,
              )}
            >
              {boxContent}
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const animateIn =
  'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0';

const animateOut =
  'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]';
