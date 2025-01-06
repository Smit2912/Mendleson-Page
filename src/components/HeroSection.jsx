import React, { useState } from "react";
import heroImage from "../assets/Vector.png";
import logo from "../assets/logo.png";
import asset2 from "../assets/Asset2.png";
import asset1 from "../assets/Asset1.png";
import graphic from "../assets/Graphic.png";
import asset3 from "../assets/Assets3.png";
import asset4 from "../assets/Assets4.png";
import vector from "../assets/Vector.png";
import NavLinks from "./NavLinks";

const HeroSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <nav className="flex justify-between items-center p-6 md:mb-28 relative">
                <img src={asset1} className="absolute left-0 top-0 -z-10" />
                <img src={logo} height="85px" className="w-52 md:w-auto md:ml-[130px] -z-10" />
                <ul className="hidden md:flex gap-6 text-gray-600 mr-[130px] relative z-10">
                    <NavLinks />
                </ul>
                <img src={asset2} className="absolute top-0 right-0 -z-10" />
                <button
                    className="md:hidden text-gray-600"
                    onClick={toggleMenu}
                >
                    Menu
                </button>
            </nav>

            {isMenuOpen && (
                <div className="fixed inset-0 bg-white bg-opacity-95 z-20 flex justify-center items-center">
                    <div className="bg-white p-8 rounded-lg relative">
                        <button
                            className="absolute top-2 right-2 text-gray-600"
                            onClick={closeMenu}
                        >
                            Close
                        </button>
                        <ul className="flex flex-col gap-6 text-gray-600">
                            <NavLinks />
                        </ul>
                    </div>
                </div>
            )}

            <div className="flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
                <img
                    src={asset3}
                    className="absolute -z-10 h-full md:h-auto w-full md:w-auto -bottom-40 md:bottom-0"
                />
                <img
                    src={graphic}
                    height="200px"
                    className="absolute -z-10 h-auto w-full md:-bottom-16 bottom-0"
                />
                <img
                    src={vector}
                    className="absolute -z-10 ml-[140px] bottom-0"
                />

                <div className="w-full md:w-[500px] h-[60vh] md:h-[70vh] ml-auto mt-20 md:mt-0 flex flex-col gap-5 px-6 md:mr-32 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-medium">
                        Mendleson Communication and Engagement
                    </h1>
                    <p className="text-base md:text-lg font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Malesuada sed ipsum, ut quam volutpat, tortor.
                    </p>
                </div>

                <img src={asset4} className="absolute -z-20 bottom-0 right-0" />
            </div>
        </>
    );
};

export default HeroSection;
