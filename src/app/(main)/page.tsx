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
import HomePageType from '@/types/home-page.type';

const LandingPage = async () => {
  const data: HomePageType = await getHomePageData();
  return (
    <>
      <Header />
      <About />
      <Events />
      <Collaboration />
      <Journals />
      <WhyChoose />
      <CTA data={data.cta} />
      <Researchers data={data.researchers} />
      <Email />
    </>
  );
};

export default LandingPage;
