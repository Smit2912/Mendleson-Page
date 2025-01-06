import React from "react";
import asset5 from "../assets/Asset5.png";
import asset6 from "../assets/Asset6.png";
import asset7 from "../assets/Asset7.png";
import asset8 from "../assets/Asset8.png";
import engagement from "../assets/Engagementvector1.png";
import communication from "../assets/Coominucationvector1.png";
import facilation from "../assets/facilationvector1.png";
import consultation from "../assets/Consultationvector1.png";
import training from "../assets/Training-vector.png";

const Services = () => {
    return (
        <div className="border border-white relative">
            <img src={asset5} className="left-0 absolute" />

            <div className="flex flex-col gap-16 justify-center items-center mt-32 relative px-4 md:px-0">
                <div className="flex flex-col gap-1 items-center md:items-start">
                    <h2 className="font-medium text-3xl md:text-5xl">
                        SERVICES
                    </h2>
                    <div className="border-b-2 w-[100px] md:w-[238px]"></div>
                </div>

                {/* Service-1 */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[1100px]">
                    <div className="w-full md:w-[529px] flex flex-col items-center md:items-end gap-5 text-center md:text-end">
                        <h2 className="text-2xl md:text-4xl font-medium">
                            ENGAGEMENT
                        </h2>
                        <p className="text-sm md:text-base font-normal">
                            We love what we do and are driven by achieving great
                            results for our clients. Our awards and impressive
                            client list are testament to our high quality
                            approach. We deliver value, creaKvity, results and
                            excepKonal levels of customer service and
                            professionalism. We specialise in infrastructure
                            development, energy and natural resources.
                        </p>
                    </div>
                    <div>
                        <img
                            src={engagement}
                            className="h-auto w-full md:h-[375px] md:w-[450px]"
                        />
                    </div>
                </div>

                {/* Service-2 */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full md:w-[1100px]">
                    <div className="w-full md:w-[435px] flex flex-col items-center md:items-start gap-5 text-center md:text-start">
                        <h2 className="text-2xl md:text-4xl font-medium">
                            COMMUNICATIONS
                        </h2>
                        <p className="text-sm md:text-base font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Faucibus quam quis egestas orci. Scelerisque
                            eu, vitae sapien, pellentesque et. Sit ac fames
                            facilisis nibh faucibus.
                        </p>
                    </div>
                    <div>
                        <img
                            src={communication}
                            className="h-auto w-full md:h-[375px] md:w-[450px]"
                        />
                    </div>
                </div>

                <img
                    src={asset6}
                    className="absolute right-0 top-96 mt-32 hidden md:block"
                />

                {/* Service-3 */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[1100px]">
                    <div className="w-full md:w-[520px] flex flex-col items-center md:items-end gap-5 text-center md:text-end">
                        <h2 className="text-2xl md:text-4xl font-medium">
                            FACILITATION
                        </h2>
                        <p className="text-sm md:text-base font-normal">
                            We love what we do and are driven by achieving great
                            results for our clients. Our awards and impressive
                            client list are testament to our high quality
                            approach. We deliver value, creaKvity, results and
                            excepKonal levels of customer service and
                            professionalism. We specialise in infrastructure
                            development, energy and natural resources.
                        </p>
                    </div>
                    <div>
                        <img
                            src={facilation}
                            className="h-auto w-full md:h-[375px] md:w-[450px]"
                        />
                    </div>
                </div>

                <img
                    src={asset7}
                    className="absolute left-0 mt-96 hidden md:block"
                />

                {/* Service-4 */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-between w-full md:w-[1100px]">
                    <div className="w-full md:w-[400px] flex flex-col items-center md:items-start gap-5 text-center md:text-start">
                        <h2 className="text-2xl md:text-4xl font-medium">
                            CONSULTATION AND RESEARCH
                        </h2>
                        <p className="text-sm md:text-base font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Faucibus quam quis egestas orci. Scelerisque
                            eu, vitae sapien, pellentesque et. Sit ac fames
                            facilisis nibh faucibus.
                        </p>
                    </div>
                    <div>
                        <img
                            src={consultation}
                            className="h-auto w-full md:h-[375px] md:w-[450px]"
                        />
                    </div>
                </div>

                <img
                    src={asset8}
                    className="absolute right-0 bottom-24 hidden md:block"
                />

                {/* Service-5 */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[1100px]">
                    <div className="w-full md:w-[520px] flex flex-col items-center md:items-end gap-5 text-center md:text-end">
                        <h2 className="text-2xl md:text-4xl font-medium">
                            TRAINING AND MENTORING
                        </h2>
                        <p className="text-sm md:text-base font-normal">
                            We love what we do and are driven by achieving great
                            results for our clients. Our awards and impressive
                            client list are testament to our high quality
                            approach. We deliver value, creaKvity, results and
                            excepKonal levels of customer service and
                            professionalism. We specialise in infrastructure
                            development, energy and natural resources.
                        </p>
                    </div>
                    <div>
                        <img
                            src={training}
                            className="h-auto w-full md:h-[375px] md:w-[450px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
