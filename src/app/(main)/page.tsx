import getHomePageData from '@/actions/home-page.action';
import {
  About,
  Collaboration,
  CTA,
  Email,
  Events,
  Header,
  Journals,
  Researchers,
  WhyChoose,
} from '@/components/main/home';
import { CollaborationCardType } from '@/types/collaboration.type';
import { JournalCardType } from '@/types/journal.type';
import { ResearcherCardType } from '@/types/researcher.type';

export type LandingPageType = {
  collaboration: CollaborationCardType[];
  journals: JournalCardType[];
  cta: { deadline: string };
  researchers: ResearcherCardType[];
};

const LandingPage = async () => {
  const data: LandingPageType = await getHomePageData();
  return (
    <>
      <Header />
      <About />
      <Events />
      <Collaboration data={data.collaboration} />
      <Journals data={data.journals} />
      <WhyChoose />
      <CTA data={data.cta} />
      <Researchers data={data.researchers} />
      <Email />
    </>
  );
};

export default LandingPage;
