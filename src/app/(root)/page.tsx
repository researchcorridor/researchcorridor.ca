import getHomePageData from '@/actions/home-page.action';
import AboutRootSection from '@/components/about/root.section';
import CollaborationsRootSection from '@/components/collaboration/root.section';
import EventsRootSection from '@/components/event/root.section';
import CTAJournalSubmit from '@/components/journal/cta.submit';
import JournalsRootSection from '@/components/journal/root.section';
import ResearchersRootSection from '@/components/researcher/root.section';
import RoodHeader from '@/components/root/header';
import WhyChoose from '@/components/root/whyChoose';
import SubscriberCard from '@/components/subscriber/card';
import { CollaborationCardType } from '@/types/collaboration.type';
import { EventCardType } from '@/types/event.type';
import { JournalCardType } from '@/types/journal.type';
import { ResearcherCardType } from '@/types/researcher.type';

export type LandingPageType = {
  about: {
    point: string[];
    img: string;
  };
  events: EventCardType[];
  collaboration: CollaborationCardType[];
  journals: JournalCardType[];
  cta: { deadline: string };
  researchers: ResearcherCardType[];
};

const LandingPage = async () => {
  const data: LandingPageType = await getHomePageData();
  return (
    <>
      <RoodHeader />
      <AboutRootSection {...data.about} />
      <EventsRootSection data={data.events} />
      <CollaborationsRootSection data={data.collaboration} />
      <JournalsRootSection data={data.journals} />
      <WhyChoose />
      <CTAJournalSubmit data={data.cta} />
      <ResearchersRootSection data={data.researchers} />
      <SubscriberCard />
    </>
  );
};

export default LandingPage;
