import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import QuickLinks from "./QuickLinks";

export default function LandingPage() {
  return (
    <div className="min-h-screen h-screen bg-center bg-cover bg-[url('/landing.jpg')]">
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
      <QuickLinks />
    </div>
  );
}
