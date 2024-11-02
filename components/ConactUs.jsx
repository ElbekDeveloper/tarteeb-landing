import { ContactUsForm } from "./ContactUsForm";

export default function ContactUs () {
    return (
        <div className="container pt-10 pb-20" id="contact">
            <h2 className="h2 section-title !text-center">Get Personalized Demo</h2>
            <p className="section-text !text-center">Sign up for a personalized demo of our services.</p>
            <ContactUsForm />
        </div>
    )
}