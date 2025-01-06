import React from "react";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import google from "../assets/Google.png";

const Footer = () => {
    return (
        <>
            <div className="bg-customBlue w-full max-w-screen-xl mx-auto flex flex-col md:flex-row justify-around p-10 mt-20 gap-10">
                <ul className="flex flex-col gap-3">
                    <li className="font-bold">Social</li>
                    <div className="flex items-center gap-3">
                        <img
                            src={facebook}
                            className="w-6 h-6 md:w-auto md:h-auto"
                            alt="Facebook"
                        />
                        <li>Facebook</li>
                    </div>
                    <div className="flex items-center gap-3">
                        <img
                            src={linkedin}
                            className="w-6 h-6 md:w-auto md:h-auto"
                            alt="Linkedin"
                        />
                        <li>Linkedin</li>
                    </div>
                    <div className="flex items-center gap-3">
                        <img
                            src={google}
                            className="w-6 h-6 md:w-auto md:h-auto"
                            alt="Google"
                        />
                        <li>Google +</li>
                    </div>
                </ul>

                <ul className="flex flex-col gap-3">
                    <li className="font-bold">Explore</li>
                    <li>Services</li>
                    <li>Team</li>
                    <li>Clients</li>
                </ul>

                <ul className="flex flex-col gap-3">
                    <li className="font-bold">Contact</li>
                    <li>Lorem Ipsum dummy address</li>
                    <li>used for display</li>
                    <li>1234567890</li>
                </ul>

                <ul className="flex flex-col gap-3">
                    <li className="font-bold">Email</li>
                    <li>mendlesoncommunication@email.com</li>
                </ul>
            </div>

            <footer className="text-center py-6">
                <p>&copy; Copyright 2018 Mendleson Communication Pty Ltd </p>
            </footer>
        </>
    );
};

export default Footer;
