import Image from 'next/image';
import BannerImg from '../public/assets/images/about-banner.jpg';
import Shape1 from '../public/assets/images/about-shape-1.svg';
import Shape2 from '../public/assets/images/about-shape-2.svg';
import Shape3 from '../public/assets/images/about-shape-3.png';
import Shape4 from '../public/assets/images/about-shape-4.svg';

export default function Reviews () {
    return (

        <section className="section about !mt-32" id="about" aria-label="about">
            <div className="container">

                <figure className="about-banner">

                    <div className="img-holder" style={{ width: 520, height: 370 }}>
                        <Image src={BannerImg} width="520" height="370" loading="lazy" alt="about banner"
                            className="img-cover" />
                    </div>

                    <Image src={Shape1} width="360" height="420" loading="lazy" alt=""
                        className="shape about-shape-1" />

                    <Image src={Shape2} width="371" height="220" loading="lazy" alt=""
                        className="shape about-shape-2" />

                    <Image src={Shape3} width="722" height="528" loading="lazy" alt=""
                        className="shape about-shape-3" />

                </figure>

                <div className="about-content">

                    <p className="section-subtitle">About Us</p>

                    <h2 className="h2 section-title">
                        Why Choose<span className="span">Tarteeb</span>
                    </h2>

                    <p className="section-text">
                        Our goal is to make education more accessible, efficient, and tailored to the needs of every student.
                    </p>

                    <ul className="about-list">

                        <li className="about-item">
                            <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                            <span className="span">Tarteeb is free for all educational institutions.</span>
                        </li>

                        <li className="about-item">
                            <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                            <span className="span">Get one free teacher account for every 100 students enrolled.</span>
                        </li>

                    </ul>

                    <Image src={Shape4} width="100" height="100" loading="lazy" alt=""
                        className="shape about-shape-4" />

                </div>

            </div>
        </section>
    )
}