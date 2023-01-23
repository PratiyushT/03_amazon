import Header from "@/components/Header/Header";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";

export default function Account() {
    const { data: session } = useSession();

    const head = (
        <Head>
            <title>Account - Amazon 2.0</title>
        </Head>
    );
    
    if (session) {
        return (
            <>
                {head}
                <Header />
                <div className="flex flex-col justify-center items-center h-screen text-lg">
                    Signed in as {session.user.email} <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            </>
        );
    }
    return (
        <>
            {head}
            <Header />
            <div className="flex flex-col justify-center items-center h-screen text-lg">
                Not signed in <br />
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        </>
    );
}
