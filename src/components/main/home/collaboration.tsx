'use client';
import { Button } from '@nextui-org/react';
import { FaArrowRightLong } from 'react-icons/fa6';

import CollaborationCarousel from '@/components/ui/collaboration-carousel';
import homeText from '@/constant/homePage';
import CollaborationCardType from '@/types/collaboration-card.type';

const Collaboration = ({ data }: { data: CollaborationCardType[] }) => {
  return (
    <section id="collaboration" className="py-32 max-md:py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="px-6 text-center text-3xl max-md:text-2xl">
          {homeText.collaboration.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl px-6 text-center text-xl max-md:text-lg max-sm:text-base">
          {homeText.collaboration.description}
        </p>
        <div className="m-5 flex justify-end">
          <Button variant="light" className="gap-2" color="primary">
            {homeText.collaboration.buttonText}
            <FaArrowRightLong />
          </Button>
        </div>
        <CollaborationCarousel data={data} />
      </div>
    </section>
  );
};

export default Collaboration;
