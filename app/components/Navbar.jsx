"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [mounted, setMounted] = useState(false);

    // Forces the component to wait until it is fully mounted on the client side
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <nav className="w-full bg-[#030308]/60 backdrop-blur-md border-b border-white/[0.04] fixed top-0 z-50">
            <div className="max-w-[2000px] mx-auto px-6 h-20 flex items-center justify-between">

                {/* Left Section: Logo */}
                <div className="flex items-center">
                    <Image
                        src="/brand/waveaid-logo.svg"
                        alt="WaveAid Logo"
                        width={80}
                        height={50}
                        priority                    
                    />

                    <div className="flex flex-col">
                        <span className="text-white font-brand text-lg tracking-[0.22em] uppercase">
                            WAVE<span className="text-purple-400">AID</span>
                        </span>
                        <span className="text-white/40 font-brand text-xs hidden sm:block tracking-[0.24em] uppercase mt-0.5">
                            WUTHERING WAVES AI ASSISTANT
                        </span>
                    </div>
                </div>

                {/* Middle Section: Navigation Links */}
                <div className="hidden md:flex items-center gap-12">
                    {/* Active "Home" Pill */}
                    <a href="#" className="font-sans text-[13px] font-medium text-purple-300 bg-[#161426]/70 border border-purple-500/30 px-5 py-1.5 rounded-full shadow-[0_0_20px_rgba(147,51,234,0.15)] transition-all">
                        Home
                    </a>
                    
                    {/* Inactive Links */}
                    <a href="#" className="font-sans text-[13px] font-medium text-[#9494a3] hover:text-white transition-colors">Features</a>
                    <a href="#" className="font-sans text-[13px] font-medium text-[#9494a3] hover:text-white transition-colors">Builds</a>
                    <a href="#" className="font-sans text-[13px] font-medium text-[#9494a3] hover:text-white transition-colors">Guides</a>
                    <a href="#" className="font-sans text-[13px] font-medium text-[#9494a3] hover:text-white transition-colors">About</a>
                </div>

                {/* Right Section: Actions */}
                <div className="flex items-center gap-5">
                    
                    {/* Search Icon */}
                    <button className="text-[#9494a3] hover:text-white p-2 rounded-full hover:bg-white/5 transition-all duration-200 cursor-pointer">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    {/* Theme Mode Selector Icon */}
                    <button 
                        onClick={() => setIsDarkMode(!isDarkMode)}
                        className="text-[#9494a3] hover:text-white p-2 rounded-full hover:bg-white/5 transition-all duration-200 cursor-pointer mr-1"
                        aria-label="Toggle Theme"
                    >
                        {/* If not mounted yet on client, show a default moon placeholder to prevent server crashes */}
                        {!mounted || isDarkMode ? (
                            /* Moon Icon */
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        ) : (
                            /* Sun Icon */
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        )}
                    </button>

                    {/* Premium Styled Sign In Button */}
                    <button className="font-sans text-[13px] font-medium text-white/90 bg-gradient-to-b from-[#1b1a2e]/60 to-[#121122]/80 hover:from-[#24223d]/70 hover:to-[#17162b]/90 border border-white/[0.06] hover:border-purple-500/30 px-6 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.5),_inset_0_1px_0_rgba(255,255,255,0.05)] transition-all duration-200 cursor-pointer">
                        Sign in
                    </button>
                </div>

            </div>
        </nav>
    );
}