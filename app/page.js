import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import StickyCta from "../components/StickyCta";
import {
  Problem,
  Pains,
  Solution,
  Program,
  WhyCheap,
  About,
  Videos,
  Testimonials,
  FinalCta,
  Footer,
} from "../components/Sections";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Pains />
        <Solution />
        <Program />
        <Pricing />
        <WhyCheap />
        <About />
        <Videos />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
