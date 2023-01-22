import Header from "../components/Header/Header";
import Banner from "../components/Homepage/Banner";
import Head from "next/head";
import ProductFeed from "@/components/Header/ProductFeed";

export default function Home({ data }) {
    return (
        <div className="bg-gray-100">
            <Head>
                <title>Amazon 2.0</title>
            </Head>

            {/* HEADER   */}
            <Header />

            <main className="overflow-x-hidden">
                {/* BANNER  */}
                <Banner />

                {/* PRODUCT FEED  */}
                <ProductFeed products={data} />
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const resp = await fetch("https://fakestoreapi.com/products");
    const data = await resp.json();

    return {
        props: {
            data,
        },
    };
}
