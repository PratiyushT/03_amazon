import Header from "../components/Header";
import Banner from "../components/Banner";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Amazon 2.0</title>
            </Head>

            {/* HEADER   */}
            <Header />

            <main>
                {/* BANNER  */}
                <Banner />
    
                {/* PRODUCT FEED  */}
            </main>
            
        </>
    );
}
