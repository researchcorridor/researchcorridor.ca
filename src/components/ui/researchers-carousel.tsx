'use client';

import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react';
import Image from 'next/image';
import * as React from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';

import { cn } from '@/lib/utils';
import ResearchersCardType from '@/types/researchers-card.type';

const ResearchersCarousel = ({ data }: { data: ResearchersCardType[] }) => {
  return (
    <Carousel
      className="mt-20"
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {data.map(({ researcher, comment }, index) => (
          <CarouselItem key={index}>
            <Card className="p-5" shadow="sm">
              <CardBody>
                <p className="text-foreground-500">&quot;{comment}&quot;</p>
              </CardBody>
              <CardHeader className="flex gap-5">
                <Image
                  src={researcher.avatar}
                  alt={researcher.name}
                  height={60}
                  width={60}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-md">{researcher.name}</p>
                  <p className="text-small text-default-500">
                    {researcher.position}
                  </p>
                  <p className="text-small text-primary">{researcher.from}</p>
                </div>
              </CardHeader>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselButton type="next" />
      <CarouselButton type="Previous" />
    </Carousel>
  );
};

export default ResearchersCarousel;

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(({ opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: 'x',
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        ref={ref}
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = 'Carousel';

const CarouselContent = ({ ...props }) => {
  const { carouselRef } = useCarousel();
  return (
    <div ref={carouselRef} className="m-12 overflow-hidden max-[500px]:mx-2">
      <div className="-ml-4 flex" {...props} />
    </div>
  );
};

const CarouselItem = ({ ...props }) => {
  return (
    <div
      role="group"
      aria-roledescription="slide"
      className="flex min-w-0 shrink-0 grow-0 basis-1/2 justify-center p-5 max-[980px]:basis-full"
      {...props}
    />
  );
};

const CarouselButton = ({ type = 'next' }: { type: 'next' | 'Previous' }) => {
  const { scrollNext, scrollPrev } = useCarousel();
  const next = type === 'next';
  return (
    <Button
      variant="light"
      isIconOnly
      onPress={next ? scrollNext : scrollPrev}
      className={cn(
        'absolute top-[calc(50%-20px)] max-[500px]:hidden',
        next ? 'right-1' : 'left-1',
      )}
    >
      {next ? <GrNext /> : <GrPrevious />}
    </Button>
  );
};
