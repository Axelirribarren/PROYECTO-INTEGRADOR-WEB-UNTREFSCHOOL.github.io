import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Proposals from '../components/Proposals';
import News from '../components/News';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingButton from '../components/FloatingButton';

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <WhyChooseUs />
                <Proposals />
                <News />
                <FAQ />
                <Contact />
            </main>
            <Footer />
            <FloatingButton />
        </>
    );
};

export default Home;
