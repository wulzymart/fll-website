import About from "../Components/About";
import AppCTA from "../Components/AppCTA";
import EcommerceCta from "../Components/EcommerceCta";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Steps from "../Components/Steps";

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Steps />
      <EcommerceCta />
      <AppCTA />
    </main>
  );
};

export default Home;
