import Image from 'next/image';
import VideoBanner from '../public/assets/images/video-banner.jpg';
import VideoShape1 from '../public/assets/images/video-shape-1.png';
import VideoShape2 from '../public/assets/images/video-shape-2.png';

export default function VideoDemo () {
    return (
        <section className="video has-bg-image" aria-label="video"
            style={{ backgroundImage: "url('./assets/images/video-bg.png')" }}>
            <div className="container">

                <div className="video-card">

                    <div className="video-banner img-holder has-after">
                        <Image src={VideoBanner} width="970" height="550" loading="lazy" alt="video banner"
                            className="img-cover" />

                        <button className="play-btn" aria-label="play video">
                            <ion-icon name="play" aria-hidden="true"></ion-icon>
                        </button>
                    </div>

                    <Image src={VideoShape1} width="1089" height="605" loading="lazy" alt=""
                        className="shape video-shape-1" />

                    <Image src={VideoShape2} width="158" height="174" loading="lazy" alt=""
                        className="shape video-shape-2" />

                </div>

            </div>
        </section>
    )
}