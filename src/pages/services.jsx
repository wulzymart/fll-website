import Header1 from "@/components/Header1";
import AppCTA from "@/components/AppCTA";
import EcommerceCta from "@/components/EcommerceCta";
import { default as ServeList } from "@/components/Services";
import Steps from "@/components/Steps";

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
