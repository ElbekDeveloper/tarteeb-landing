"use client"

import { useState } from "react";

export default function BannerNotice ({ isVisible, setIsVisible }) {

    if (!isVisible) return null;

    return (
        <div className="bg-gradient-to-r from-amber-500 to-cyan-600 text-white p-4">
            <div className="flex mx-auto px-4 flex items-center justify-center relative">
                <p className="text-center font-medium flex">
                    <span className="hidden sm:inline block mr-10"> ✨ Get Tarteeb for free now! Limited time offer</span>
                    <span className="sm:hidden block mr-2">✨ Get Tarteeb for free! </span>
                    <a href="#contact" className="underline ml-2 hover:text-blue-200">
                        <span className="hidden sm:inline">Sign up today</span>
                        <span className="sm:hidden"> Sign up</span>
                    </a>
                </p>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-4 hover:opacity-75"
                    aria-label="Close banner"
                >
                    <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}