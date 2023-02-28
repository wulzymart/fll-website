import Layout from "@/components/Layout";
import { UserContextProvider } from "@/contexts/authContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
}
