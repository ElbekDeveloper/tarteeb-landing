import Image from 'next/image';
import HeroBanner1 from '../public/assets/images/hero-banner-1.jpg';
import HeroBanner2 from '../public/assets/images/hero-banner-2.jpg';
import HeroShape1 from '../public/assets/images/hero-shape-1.svg';
import HeroShape2 from '../public/assets/images/hero-shape-2.png';

export default function Banner () {
    return (
        <section className="section hero has-bg-image" id="home" aria-label="home" style={{ backgroundImage: "url('./assets/images/hero-bg.svg')" }}>
            <div className="container">
                <div className="hero-content">
                    <h1 className="h1 section-title">
                        <span className="span">Tarteeb</span>
                    </h1>
                    <h6 className="hero-text">
                        Edu CRM - A comprehensive platform for educational centers. Featuring attendance tracking,
                        grading system, payment management, and SMS notifications.
                    </h6>
                    <div className='h-16'></div>
                    <a href="#demo" className="btn has-before">
                        <span className="span">How it works?</span>
                        {/* <IonIcon name="arrow-forward-outline" aria-hidden="true" /> */}
                    </a>
                </div>

                <figure className="hero-banner">
                    <div className="img-holder one hidden md:block" style={{ width: 270, height: 300 }}>
                        <Image src={HeroBanner1} width="270" height="300" alt="hero banner" className="img-cover" />
                    </div>
                    <div className="img-holder two  hidden md:block" style={{ width: 240, height: 370 }}>
                        <Image src={HeroBanner2} width="240" height="370" alt="hero banner" className="img-cover" />
                    </div>
                    <Image src={HeroShape1} width="380" height="190" alt="" className="shape hero-shape-1" />
                    <Image src={HeroShape2} width="622" height="551" alt="" className="shape hero-shape-2" />
                </figure>
            </div>
        </section>
    )
}