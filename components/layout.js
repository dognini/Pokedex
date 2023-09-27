import Footer from "./footer";
import NavBar from "./navbar";

import Head from "next/head";

export default function Layout({ children }) {
    return (
        <>
        <Head>
            <link rel="shortcut icon" href="/images/favicon.ico" />
            <title> Pokedex </title>
        </Head>
            <NavBar />
            <main className="main-container" > { children } </main>
            <Footer />
        </>
    )
}