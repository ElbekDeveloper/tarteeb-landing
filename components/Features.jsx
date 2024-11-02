import Image from 'next/image';
import Category1 from '../public/assets/images/category-1.svg';
import Category2 from '../public/assets/images/category-2.svg';
import Category3 from '../public/assets/images/category-3.svg';
import Performance from '../public/assets/images/performance.png';

const featuresList = [
    {
        color: '229, 75%, 58%',
        icon: Category3,
        title: 'Management System',
        description: 'Admins can manage students\' attendance, and invoice information'
    },
    {
        color: '42, 94%, 55%',
        icon: Performance,
        title: 'Performance & Financial Reporting',
        description: 'Data-Driven Insights: Access performance reporting for students and teachers, along with financial data, to make informed decisions.'
    },
    {
        color: '351, 83%, 61%',
        icon: Category2,
        title: 'Freuquent Contact',
        description: 'Parents receive frequent updates about their children\'s progress, performance, and attendance.'
    },
    {
        color: '170, 75%, 41%',
        icon: Category1,
        title: 'AI-Powered Learning Assistance',
        description: 'Voice Assistant: Practice English speaking with an AI-powered voice assistant, tailored to your learning pace and style.'
    },
];

export default function Features () {
    return (
        <section className="section category !pt-0 " aria-label="category">
            <div className="container !pt-0 pb-24">
                <h2 className="h2 section-title">What do we offer?</h2>
                <p className="section-text">We are transforming education through advanced CRM and AI support</p>
                <ul className="grid-list">
                    {featuresList.map((feature, index) => (
                        <li key={index} className="flip-card">
                            <div className="flip-card-inner shadow-lg bg-[#F4F2EB] rounded-lg">
                                <div className="flip-card-front p-4 rounded-lg">
                                    <div className="flex flex-col items-center justify-center gap-10 py-10" style={{ color: feature.color }}>
                                        <div className="card-icon h-20 w-20">
                                            <Image
                                                src={feature.icon}
                                                width="40"
                                                height="40"
                                                loading="lazy"
                                                alt=""
                                                className="img"
                                            />
                                        </div>
                                        <h3 className="h3">
                                            <a href="#" className="card-title">{feature.title}</a>
                                        </h3>
                                        <p className="card-text whitespace-pre-line">{feature.description}</p>
                                    </div>
                                </div>
                                <div className="flip-card-back p-4 rounded-lg">
                                    <Image
                                        src={feature.icon}
                                        width="200"
                                        height="200"
                                        loading="lazy"
                                        alt={feature.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}