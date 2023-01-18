import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link
                    rel="shortcut icon"
                    href="amazon-icon.png"
                    type="image/x-icon"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
