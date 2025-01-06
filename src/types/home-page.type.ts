import JournalsCardType from './journals-card.type';
import ResearchersCardType from './researchers-card.type';

type HomePageType = {
  cta: {
    deadline: string;
  };
  researchers: ResearchersCardType[];
  journals: JournalsCardType[];
};

export default HomePageType;
