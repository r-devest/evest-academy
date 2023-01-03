import "../styles/globals.css";
import { SSRProvider } from "@react-aria/ssr";
import Head from "next/head";
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
        </Head>
        <Component {...pageProps} />
      </SSRProvider>
    </>
  );
}
export default MyApp;
