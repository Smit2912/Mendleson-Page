import React from "react";
import about from "../assets/aboutUs.jpg";
import engagement from "../assets/Enagagement-icon.png";
import communication from "../assets/coomunication-icon.png";

const About = () => {
    return (
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-center w-full md:w-[1200px] mx-auto mt-10 md:mt-20 px-4 md:px-0">
            <div className="mt-10 md:mt-32">
                <img src={about} className="w-full md:w-auto" />
            </div>

            <div className="w-full md:w-[650px] flex flex-col gap-5 text-center md:text-left">
                <div className="flex flex-col gap-1 items-center md:items-start">
                    <h2 className="font-medium text-3xl md:text-5xl">
                        ABOUT US
                    </h2>
                    <div className="border-b-2 w-[100px] md:w-[238px]"></div>
                </div>

                <p className="font-normal text-base md:text-lg">
                    We love what we do and are driven by achieving great results
                    for our clients. Our awards and impressive client list are
                    testament to our high quality approach. We deliver value,
                    creativity, results, and exceptional levels of customer
                    service and professionalism. We specialise in infrastructure
                    development, energy and natural resources.
                </p>

                <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center md:items-start">
                    <div className="flex flex-col gap-5 items-center md:items-start">
                        <img
                            src={engagement}
                            className="h-10 w-10 md:h-11 md:w-11"
                        />
                        <h3 className="text-xl md:text-2xl font-medium">
                            ENGAGEMENT
                        </h3>
                        <p className="text-base md:text-lg">
                            We are engagement specialists, who have led projects
                            at all levels of the IAP2 spectrum.{" "}
                            <span className="text-blue-500 cursor-pointer">
                                READ MORE
                            </span>
                        </p>
                    </div>

                    <div className="flex flex-col gap-5 items-center md:items-start">
                        <img
                            src={communication}
                            className="h-10 w-10 md:h-11 md:w-11"
                        />
                        <h3 className="text-xl md:text-2xl font-medium">
                            COMMUNICATIONS
                        </h3>
                        <p className="text-base md:text-lg">
                            We are award-winning leaders in communications and
                            campaign management.{" "}
                            <span className="text-blue-500 cursor-pointer">
                                READ MORE
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
