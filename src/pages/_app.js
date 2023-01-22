import "@/styles/globals.css";
import Head from "next/head";

import { SessionProvider } from "next-auth/react";

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

            <SessionProvider session={pageProps.session}>
                <Component {...pageProps} />
            </SessionProvider>
        </>
    );
}
