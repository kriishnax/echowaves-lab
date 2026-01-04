import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Process from "../components/Process";
import About from "../components/About";
import Founders from "../components/Founders";
import Portfolio from "../components/Portfolio";
import FAQ from "../components/FAQ";
import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <About />
      <Founders />
      <Portfolio />
      <FAQ />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Home;
