import "../styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import Head from "next/head";
import Footer from "../components/Footer";
import Navbar1 from "../components/homePage/Navbar1";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <SSRProvider>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
            crossOrigin="anonymous"
          />
          <title>Evest Academy</title>
          <meta name="description" content="" />
          <link rel="icon" href="/evestLogo.png" />
        </Head>
        <Navbar1 />
        <Component {...pageProps} />
        <Footer />
      </SSRProvider>
    </>
  );
}
export default MyApp;
