'use client';

import { Button, cn, Input } from '@heroui/react';
import * as Dialog from '@radix-ui/react-dialog';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { IoSearchSharp } from 'react-icons/io5';

export default function SearchBox() {
  const [data, setData] = useState<string[]>([]);
  const [search, setSearch] = useState<string>('');
  const [searchBoxOpen, setSearchBoxOpen] = useState<boolean>(false);
  const searchTimeout = useRef<NodeJS.Timeout | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    setSearchBoxOpen(false);
  }, [searchParams]);

  const onSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setSearch(value);

    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    searchTimeout.current = setTimeout(() => {
      searching(value);
    }, 1500);
  };

  const onSubmit = (text: string) => {
    if (text) {
      setSearchBoxOpen(false);
      router.push(`/books?search=${encodeURIComponent(text)}`);
    }
  };

  const searching = async (value: string) => {
    if (!value) {
      setData([]);
      return;
    }
    setData([]);
  };
  return (
    <Dialog.Root open={searchBoxOpen} onOpenChange={setSearchBoxOpen}>
      <Dialog.Trigger asChild>
        <Button
          color="primary"
          variant="light"
          isIconOnly
          className="text-2xl max-sm:text-xl"
        >
          <IoSearchSharp />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={cn(
            animateIn,
            'bg-background/60 fixed inset-0 z-50 backdrop-blur-sm',
          )}
        />
        <Dialog.Content
          className={cn(
            animateIn,
            animateOut,
            'fixed left-1/2 top-11 z-50 w-full max-w-2xl -translate-x-1/2 focus:outline-none',
          )}
        >
          <div className="mx-2 bg-white p-6 shadow-xl duration-200 sm:rounded-lg">
            <Dialog.Title />
            <Input
              size="lg"
              isClearable
              placeholder="Search..."
              value={search}
              onChange={onSearch}
              onClear={() => onSearch({ target: { value: '' } } as any)}
              startContent={<IoSearchSharp className="text-primary text-2xl" />}
              classNames={{
                clearButton: 'text-primary text-xl',
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSubmit(search);
                }
              }}
            />
            <div className="mt-10 flex max-h-80 flex-col gap-1 overflow-y-auto">
              {data.map((item, index) => (
                <Button
                  variant="light"
                  className="shrink-0 justify-start"
                  key={index}
                  onPress={() => onSubmit(item)}
                >
                  {item}
                </Button>
              ))}
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
