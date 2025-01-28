'use client';
import { whyChoose } from '@/constant/home.text';

import Section from '../ui/Section';

export type WhyChooseType = {
  show: boolean;
};

const WhyChoose = ({ show = false }: WhyChooseType) => {
  return (
    <Section
      show={show}
      title={whyChoose.title}
      titleClassName="text-4xl max-md:text-3xl max-sm:text-2xl"
      className="mt-20 grid grid-cols-4 gap-5 max-md:grid-cols-2 max-sm:mt-10 max-[500px]:gap-y-10"
    >
      {whyChoose.cards.map((item, index) => (
        <div key={index} className="flex flex-col gap-3 max-[500px]:gap-2">
          <h3 className="flex justify-center text-center text-6xl max-[1000px]:text-5xl">
            <item.icon />
          </h3>
          <h4 className="text-center text-xl max-[1000px]:text-lg max-[400px]:text-base">
            {item.title}
          </h4>
          <p className="text-foreground-600 text-center text-base  max-[1000px]:text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </Section>
  );
};

export default WhyChoose;
