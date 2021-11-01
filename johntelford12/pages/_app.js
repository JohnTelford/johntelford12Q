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

          <div>
          <article className="
            prose prose-lg
            box-border h w-52
            border-none
            py-3
            
            bg-yellow-200
            text-center
            text-black
            font-bold
            leading-tight
            rounded-lg
            ">

          Work in Progress<br/>
          V 0.1.2

    </article>
    </div>

        <Component {...pageProps} />

    </article>
      
   </Layout>

   
  );
}

export default MyApp;
