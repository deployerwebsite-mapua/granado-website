
//JESSE, WE NEED A REACTIVE NAVIGATION BAR AT THE LEFT SIDE OF THE SCREEN!
//Marcel
//12:10AM 3/2/2026

"use client";

import { useState, useEffect } from "react";

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            // If pointer is within 20px of the left edge, show sidebar
            if (e.clientX <= 20) {
                setShowSidebar(true);
            }
            // If pointer moves away beyond 200px, hide sidebar
            else if (e.clientX > 200) {
                setShowSidebar(false);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <aside
            className={`fixed top-0 left-0 h-screen w-[200px] bg-gray-800 text-white transition-transform duration-300 ${
                showSidebar ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="p-4">
                <p>Sidebar content</p>
            </div>
        </aside>
    );
}