import "react-multi-carousel/lib/styles.css";
import '../src/assets/css/styles.css';
import Script from "next/script";
import Head from "next/head";

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />

      <Script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
      <Script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></Script>
    </>
  );
}
