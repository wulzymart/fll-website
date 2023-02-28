import TestimonialCarousel from "@/components/Testimonials";
import axios from "axios";
import About from "@/components/About";
import AppCTA from "@/components/AppCTA";
import EcommerceCta from "@/components/EcommerceCta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Steps from "@/components/Steps";
import Head from "next/head";

const Home = ({ reviewsList }) => {
  return (
    <div>
      {/* <Head>
        <title>
          First Line Logistics Nigeria LTD || Reliable Logistics Provider in
          Nigeria
        </title>
        <meta
          name="description"
          content="Need a reliable logistics provider in Nigeria? Look no further! Our team offers a wide range of logistics services to meet your needs. Contact us today to learn more and schedule your shipment."
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      </Head> */}
      <main>
        <Hero />
        <Services />
        <About />
        <Steps />
        <EcommerceCta />
        {reviewsList && <TestimonialCarousel testimonials={reviewsList} />}
        <AppCTA />
      </main>
    </div>
  );
};

export default Home;
export async function getStaticProps() {
  let reviews;
  await axios.get(`https://ls.webcouture.com.ng/reviews`).then((data) => {
    reviews = data.data;
  });
  const reviewsList = [];
  Object.keys(reviews).map((review) => {
    reviewsList.push(reviews[review]);
  });

  return {
    props: {
      reviewsList,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every day
    revalidate: 86400, // In seconds
  };
}
