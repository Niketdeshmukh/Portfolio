import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";
import Project from "./component/Project";
export default function Home() {
  return (
    <main className="main_component no-underline scroll-smooth p-0 m-0" >
      <Header/>
      <HeroSection/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </main>
  );
}
