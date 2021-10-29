import "../css/index.css";
import Head from "next/head";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    
      <article className="prose prose-xl   max-w-none  text-gray-600">

        <Head>
          <title>JohnTelford.com</title>
          <meta
            name="Description"
            content="A Next.js starter styled using Tailwind CSS."
          />
        </Head>

        <Component {...pageProps} />

      </article>
   </Layout>
  );
}

export default MyApp;
