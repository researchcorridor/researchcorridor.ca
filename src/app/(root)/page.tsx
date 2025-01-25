import { Fragment } from 'react';

import { getHomePageData } from '@/actions/home-page.action';
import AboutRootSection from '@/components/about/root.section';
import CollaborationsRootSection from '@/components/collaboration/root.section';
import EventsRootSection, {
  EventsRootType,
} from '@/components/event/root.section';
import CTAJournalSubmit from '@/components/journal/cta.submit';
import JournalsRootSection from '@/components/journal/root.section';
import ResearchersRootSection from '@/components/researcher/root.section';
import RoodHeader from '@/components/root/header';
import WhyChoose from '@/components/root/whyChoose';
import SubscriberCard from '@/components/subscriber/card';
import { CollaborationCardType } from '@/types/collaboration.type';
import { JournalCardType } from '@/types/journal.type';
import { ResearcherCardType } from '@/types/researcher.type';

export type HomePageType = {
  eventsSection: {
    show: boolean;
    data: EventsRootType;
  };
  aboutSection: {
    show: boolean;
    data: {
      point: string[];
      img: string;
    };
  };
  collaborationSection: {
    show: boolean;
    data: CollaborationCardType[];
  };
  wyChooseSection: {
    show: boolean;
  };
  ctaJournalSubmitSection: {
    show: boolean;
    deadline: string;
  };
  journalsSection: {
    show: boolean;
    data: JournalCardType[];
  };
  researchersSection: {
    show: boolean;
    data: ResearcherCardType[];
  };
  subscriberSection: {
    show: boolean;
  };
};

export default async function LandingPage() {
  const data: HomePageType = await getHomePageData();
  return (
    <Fragment>
      <RoodHeader />
      <EventsRootSection data={data.eventsSection} />
      <AboutRootSection data={data.aboutSection} />
      <CollaborationsRootSection data={data.collaborationSection} />
      <WhyChoose data={data.wyChooseSection} />
      <CTAJournalSubmit data={data.ctaJournalSubmitSection} />
      <JournalsRootSection data={data.journalsSection} />
      <ResearchersRootSection data={data.researchersSection} />
      <SubscriberCard data={data.subscriberSection} />
    </Fragment>
  );
}
