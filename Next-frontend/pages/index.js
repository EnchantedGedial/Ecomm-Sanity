import Head from "next/head";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Products from "../Components/Products";
// Importing Client form Library floder in sanity backend
import { client } from "../../Sanity-backend/Lib/client";

export default function Home({ products, bannerData }) {
  return (
    <>
      <Head>
        <title>BackCart.com</title>
        <meta
          name="description"
          content="This is the best Shopping best shoppping website in the milkey galexy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
       {/* <Hero  heroBanner={ bannerData[0]}/> */}
        <Hero heroBanner={bannerData.length && bannerData[0]} />
        <Products product={products}/>
      
       
      
       
      </main>
    </>
  );
}

// This is like standard code for every project
// this is for fetching data from sanity backend
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerquery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerquery);

  return {
    props: {
      products,
      bannerData,
    },
  };
};
