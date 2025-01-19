import homeText from '@/constant/homePage';
import { ResearcherCardType } from '@/types/researcher.type';

import ResearchersCarousel from './carousel';

export default function ResearchersRootSection({
  data,
}: {
  data: ResearcherCardType[];
}) {
  return (
    <section id="researchers" className="py-20 max-sm:py-12">
      <div className="mx-auto max-w-7xl">
        <h2 className="px-6 text-center text-3xl max-md:text-2xl">
          {homeText.researchers.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl px-6 text-center text-xl max-md:text-lg max-sm:text-base">
          {homeText.researchers.description}
        </p>
        <ResearchersCarousel data={data} />
      </div>
    </section>
  );
}
