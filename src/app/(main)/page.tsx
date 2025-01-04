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

export default function LandingPage() {
  return (
    <>
      <Header />
      <About />
      <Events />
      <Collaboration />
      <Journals />
      <WhyChoose />
      <CTA />
      <Researchers />
      <Email />
    </>
  );
}
