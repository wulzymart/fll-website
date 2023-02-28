import Header1 from "@/components/Header1";
import AppCTA from "@/components/AppCTA";
import EcommerceCta from "@/components/EcommerceCta";
import { default as ServeList } from "@/components/Services";
import Steps from "@/components/Steps";
import { NextSeo } from "next-seo";

const Services = () => {
  return (
    <>
      <NextSeo
        title=" First Line Logistics || Trusted Haulage Company in Nigeria"
        description="Trust First line logistics NG LTD for all your haulage needs in Nigeria. Our reliable and efficient services are designed to meet the needs of businesses of all sizes. With a fleet of modern vehicles and a team of experienced drivers, we offer a range of haulage"
        openGraph={{
          url: "https://firstlinelogistics.ng",
          title: "First Line Logistics Nigeria LTD",
          description:
            "Trust First line logistics NG LTD for all your haulage needs in Nigeria. Our reliable and efficient services are designed to meet the needs of businesses of all sizes. With a fleet of modern vehicles and a team of experienced drivers, we offer a range of haulage",
          images: [
            {
              url: "https://www.firstlinelogistics.ng/logo.png",
              width: 800,
              height: 600,
              alt: "First Line Logistics",
              type: "image/png",
            },
          ],
          siteName: "First Line Logistics",
        }}
      />
      <main>
        <Header1 title="Our Services" />
        <ServeList />
        <EcommerceCta />
        <Steps />
        <AppCTA />
      </main>
    </>
  );
};

export default Services;
