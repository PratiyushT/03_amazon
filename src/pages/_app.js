import "@/styles/globals.css";
import Head from "next/head";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "@/store/store";

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
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </SessionProvider>
        </>
    );
}
