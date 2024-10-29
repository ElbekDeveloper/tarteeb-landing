// Import React
import React from 'react';

// Import any necessary styles or assets
import '../public/assets/css/style.css';
import Banner from './Banner';
import Features from './Features';
import Statistics from './Statistics';
import VideoDemo from './VideoDemo';
import Header from './common/Header';
import About from './About';
// import { IonIcon } from 'ionicons';

function Landing () {
    return (
        <div id="top">
            <Header />
            <main>
                <article>
                    <Banner />
                    <Features />
                    <About />
                    <VideoDemo />
                    <Statistics />
                </article>
            </main>

            {/* BACK TO TOP BUTTON */}
            {/* <a href="#top" className="back-top-btn" aria-label="back top top" data-back-top-btn>
                <IonIcon name="chevron-up" aria-hidden="true" />
            </a> */}
        </div>
    );
}

export default Landing;
