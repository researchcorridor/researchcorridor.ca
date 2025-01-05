import ResearchersCardType from './researchers-card.type';

type HomePageType = {
  cta: {
    deadline: string;
  };
  researchers: ResearchersCardType[];
};

export default HomePageType;
