// Import React
import React from 'react';

// Import any necessary styles or assets
import '../public/assets/css/style.css';
import Banner from './Banner';
import Features from './Features';
import Statistics from './Statistics';
import VideoDemo from './VideoDemo';
import Header from './common/Header';
import Footer from './common/Footer';
import AnimatedPhone from './AnimatedPhone';
import BannerNotice from './BannerNotice';
import ContactUs from './ConactUs';
import Reviews from './Reviews';
// import { IonIcon } from 'ionicons';

function Landing () {
    return (
        <div id="top">
            <BannerNotice />
            <Header />
            <main>
                <article>
                    <Banner />
                    <Statistics />
                    <Features />
                    <VideoDemo />
                    <Reviews />
                    <ContactUs />
                </article>
                <div className="fixed bottom-10 right-10 md:hidden">
                    <AnimatedPhone />
                </div>
            </main>
            <Footer />
            {/* BACK TO TOP BUTTON */}
            {/* <a href="#top" className="back-top-btn" aria-label="back top top" data-back-top-btn>
                <IonIcon name="chevron-up" aria-hidden="true" />
            </a> */}
        </div>
    );
}

export default Landing;
