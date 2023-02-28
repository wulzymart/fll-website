import TestimonialCarousel from "@/components/Testimonials";
import axios from "axios";
import About from "../Components/About";
import AppCTA from "../Components/AppCTA";
import EcommerceCta from "../Components/EcommerceCta";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import Steps from "../Components/Steps";

const Home = ({ reviewsList }) => {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Steps />
      <EcommerceCta />
      {reviewsList && <TestimonialCarousel testimonials={reviewsList} />}
      <AppCTA />
    </main>
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
