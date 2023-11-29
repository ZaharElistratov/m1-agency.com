import {FC} from 'react';

import Head from "next/head";
import Header from "@/ui/Header/Header";
import Intro from "@/screens/Home/Intro/Intro";
import About from "@/screens/Home/About/About";
import Contacts from "@/screens/Home/Contacts/Contacts";
import Footer from "@/ui/Footer/Footer";
import Services from "@/screens/Home/Services/Services";

const Home: FC = () => {
    return (
        <>
            <Head>
                <title>M1 Agency</title>
                <link rel="icon" type="image/x-icon" href="/img/favicon.ico"/>
            </Head>
            <Header/>
            <main>
                <Intro/>
                <About/>
                <Services/>
                <Contacts/>
            </main>
            <Footer/>
        </>
    );
};

export default Home;