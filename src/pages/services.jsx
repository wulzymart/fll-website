import Header1 from "@/components/Header1";
import AppCTA from "../Components/AppCTA";
import EcommerceCta from "../Components/EcommerceCta";
import { default as ServeList } from "../Components/Services";
import Steps from "../Components/Steps";

const Services = () => {
  return (
    <main>
      <Header1 title="Our Services" />
      <ServeList />
      <EcommerceCta />
      <Steps />
      <AppCTA />
    </main>
  );
};

export default Services;
