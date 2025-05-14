import { useEffect, useState } from "react";

export default function ScrollToTopBtn() {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    const isBrowser = () => typeof window !== 'undefined';

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        if (!isBrowser()) return;

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Progress calculation
            const scroll = window.scrollY || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const newProgress = (scroll / height) * 150.72; 
            setProgress(newProgress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 cursor-pointer ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
        >
            <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                style={{ display: "block", transform: "rotate(-90deg)" }}
            >
                {/* Background Circle */}
                <circle
                    cx="26"
                    cy="26"
                    r="24"
                    fill="#F8FAFC"
                    stroke="#000"
                    strokeWidth="1"
                />

                {/* Neon Progress Circle */}
                <circle
                    cx="26"
                    cy="26"
                    r="24"
                    fill="none"
                    stroke="#C9F31D"
                    strokeWidth="4"
                    strokeDasharray="150.72" 
                    strokeDashoffset={150.72 - progress}
                    strokeLinecap="round"
                    style={{
                        transition: "stroke-dashoffset 10ms linear"
                    }}
                />

                {/* Arrow Up Icon */}
                <g transform="rotate(90 26 26)">
                    <path
                        d="M26 18 L26 34 M26 18 L22 22 M26 18 L30 22"
                        stroke="#000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                </g>
            </svg>
        </button>
    );
}