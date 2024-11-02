"use client";

import { Phone, Menu, X } from "lucide-react";
import AnimatedPhone from "../AnimatedPhone";
import { useState } from 'react';
import BannerNotice from "../BannerNotice";

const links = [
    { href: "#features", label: "Product" },
    { href: "#demo", label: "Demo" },
    { href: "#reviews", label: "Reviews" },
    { href: "#contact", label: "Contact" },
];

export default function Header () {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isNoticeVisible, setIsNoticeVisible] = useState(true);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            <header className="header relative text-sm" data-header>
                <BannerNotice isVisible={isNoticeVisible} setIsVisible={setIsNoticeVisible} />
                <div className="container p-2">
                    <a href="#" className="logo md:w-1/4 w-auto">
                        <h1 className="text-lg">Tarteeb</h1>
                    </a>

                    <nav className={`fixed md:static top-0 left-0 h-screen md:h-auto w-full md:w-1/2
                    bg-white md:bg-transparent ${isNavOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 transition-transform duration-300
                    z-[60] p-4 md:p-0 shadow-lg md:shadow-none`} data-navbar>
                        <div className="wrapper flex justify-between items-center md:hidden mb-4">
                            <a href="#" className="logo">
                                <h1 className="text-lg">Tarteeb</h1>
                            </a>

                            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler onClick={handleNavToggle}>
                                <X className="w-4 h-4" aria-hidden="true" />
                            </button>
                        </div>

                        <ul className="navbar-list flex md:flex-row flex-col md:items-center md:gap-8 gap-6 md:justify-center">
                            {links.map((link) => (
                                <li key={link.label} className="navbar-item">
                                    <a href={link.href} className="navbar-link hover:text-primary"
                                        data-nav-link onClick={handleNavToggle}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="md:w-1/4 flex justify-end gap-4">
                        <span className="hidden md:block">
                            <AnimatedPhone />
                        </span>

                        <a href="https://tarteeb.uz/" className="btn has-before text-sm">
                            <span className="span">Login</span>
                        </a>

                        <button className="header-action-btn" aria-label="open menu" data-nav-toggler onClick={handleNavToggle}>
                            <Menu className="w-4 h-4" aria-hidden="true" />
                        </button>
                    </div>

                    <div className={`overlay fixed inset-0 bg-black/50 transition-opacity duration-300 z-50
                    ${isNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                        onClick={handleNavToggle}></div>
                </div>
            </header>
        </>

    )
}