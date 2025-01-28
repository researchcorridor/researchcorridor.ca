import { Fragment } from 'react';

import { getHomePageData } from '@/actions/home-page.action';
import AboutRootSection, {
  AboutRootType,
} from '@/components/about/root.section';
import CollaborationsRootSection, {
  CollaborationRootType,
} from '@/components/collaboration/root.section';
import EventsRootSection, {
  EventsRootType,
} from '@/components/event/root.section';
import CTAJournalSubmit, {
  CTAJournalSubmitType,
} from '@/components/journal/cta.submit';
import JournalsRootSection, {
  JournalsRootType,
} from '@/components/journal/root.section';
import ResearchersRootSection, {
  ResearchersRootType,
} from '@/components/researcher/root.section';
import RoodHeader, { RoodHeaderType } from '@/components/root/header';
import WhyChoose, { WhyChooseType } from '@/components/root/whyChoose';
import SubscriberCard, {
  SubscriberCardType,
} from '@/components/subscriber/card';

export type HomePageType = {
  headerSection: RoodHeaderType;
  eventsSection: EventsRootType;
  aboutSection: AboutRootType;
  collaborationSection: CollaborationRootType;
  whyChoose: WhyChooseType;
  ctaJournalSubmitSection: CTAJournalSubmitType;
  journalsSection: JournalsRootType;
  researchersSection: ResearchersRootType;
  subscriberSection: SubscriberCardType;
};

export default async function LandingPage() {
  const data: HomePageType = await getHomePageData();
  return (
    <Fragment>
      <RoodHeader {...data.headerSection} />
      <EventsRootSection {...data.eventsSection} />
      <AboutRootSection {...data.aboutSection} />
      <CollaborationsRootSection {...data.collaborationSection} />
      <WhyChoose {...data.whyChoose} />
      <CTAJournalSubmit {...data.ctaJournalSubmitSection} />
      <JournalsRootSection {...data.journalsSection} />
      <ResearchersRootSection {...data.researchersSection} />
      <SubscriberCard {...data.subscriberSection} />
    </Fragment>
  );
}
