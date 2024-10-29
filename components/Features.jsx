import Image from 'next/image';
import Category1 from '../public/assets/images/category-1.svg';

export default function Features () {
    return (
        <section className="section category" aria-label="category">
            <div className="container">
                <h2 className="h2 section-title">What we offer you</h2>
                <p className="section-text">we are transforming education through advanced AI support</p>
                <ul className="grid-list">
                    <li>
                        <div className="category-card" style={{ color: '170, 75%, 41%' }}>
                            <div className="card-icon">
                                <Image src={Category1} width="40" height="40" loading="lazy" alt="" className="img" />
                            </div>
                            <h3 className="h3">
                                <a href="#" className="card-title">AI-Powered Learning Assistance</a>
                            </h3>
                            <p className="card-text">
                                Voice Assistant: Practice English speaking with an AI-powered voice assistant, tailored to your learning pace and style.
                            </p>
                        </div>
                    </li>
                    {/* Additional category cards... */}
                </ul>
            </div>
        </section>
    )
}