import TestimonialCarousel from "@/components/Testimonials";
import axios from "axios";
import About from "@/components/About";
import AppCTA from "@/components/AppCTA";
import EcommerceCta from "@/components/EcommerceCta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Steps from "@/components/Steps";

const Home = ({ reviewsList }) => {
  return (
    <div>
      <main>
        <Hero />
        <Services />
        <About />
        <Steps />
        <EcommerceCta />
        {reviewsList.length ? (
          <TestimonialCarousel testimonials={reviewsList} />
        ) : (
          ""
        )}
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
