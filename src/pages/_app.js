import Layout from "@/components/Layout";
import { UserContextProvider } from "@/contexts/authContext";
import "@/styles/globals.css";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <NextSeo
        defaultTitle=" First Line Logistics || Reliable Logistics Provider in
          Nigeria"
        description="Need a reliable logistics provider in Nigeria? Look no further! Our team offers a wide range of logistics services to meet your needs. Contact us today to learn more and schedule your shipment."
        openGraph={{
          url: "https://firstlinelogistics.ng",
          title: "First Line Logistics Nigeria LTD",
          description:
            "Need a reliable logistics provider in Nigeria? Look no further! Our team offers a wide range of logistics services to meet your needs. Contact us today to learn more and schedule your shipment.",
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

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
}
