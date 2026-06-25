import Navbar from "../../components/Navbar";
import Header from "../../components/Header";
import About from "../../components/About";
import Skills from "../../components/Skills";
import Works from "../../components/Works";
import GithubProjects from "../../components/GithubProjects";
import Contact from "../../components/ContactForm";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Works />
      <GithubProjects />
      <Contact />
      <Footer />
    </>
  );
}
