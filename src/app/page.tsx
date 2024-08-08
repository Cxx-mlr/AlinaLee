
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Portfolio from "@/components/sections/Portfolio";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col gap-36">
      <Hero id="home" />
      <About id="about" />
      <Portfolio id="portfolio" />
      <Blog id="blog" />
      <Contact id="contact" />
    </main>
  );
}
