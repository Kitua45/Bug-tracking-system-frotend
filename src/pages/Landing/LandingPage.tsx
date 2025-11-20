import Hero from "./Hero";
import Features from "./Features";
import Contact from "./Contact";

export default function LandingPage() {
  return (
    <div className="min-h-screen h-screen bg-center bg-cover bg-[url('/landing.jpg')]">
      <Hero />
      <Features />
      <Contact />
    </div>
  );
}
