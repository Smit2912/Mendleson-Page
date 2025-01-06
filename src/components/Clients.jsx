import React from "react";
import asset9 from "../assets/Assets9.png";
import boroondara from "../assets/Boroondara.png";
import portPhillip from "../assets/PortPhillip.png";
import brigitte from "../assets/Brigitte.png";
import levelCross from "../assets/LevelCross.png";
import bhp from "../assets/BHP.png";
import victoria from "../assets/Victoria.png";
import pacificHydro from "../assets/PacificHydro.png";
import vcoos from "../assets/VCOSS.png";
import melbourneWater from "../assets/MelbourneWaterLogo.png";

const Clients = () => {
    return (
        <div className="relative">
            <img
                src={asset9}
                className="absolute -top-20 -z-10 h-full"
                alt="Asset 9"
            />

            <div className="flex flex-col items-center mt-40 gap-10">
                <div className="flex flex-col gap-1 items-center">
                    <h2 className="font-medium text-3xl md:text-5xl">OUR CLIENTS</h2>
                    <div className="border-b-2 w-[310px]"></div>
                </div>

                <div className="flex flex-col gap-16">
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16">
                        <img
                            src={boroondara}
                            className="w-24 md:w-auto"
                            alt="Boroondara"
                        />
                        <img
                            src={portPhillip}
                            className="w-24 md:w-auto"
                            alt="Port Phillip"
                        />
                        <img
                            src={brigitte}
                            className="w-24 md:w-auto"
                            alt="Brigitte"
                        />
                        <img
                            src={levelCross}
                            className="w-24 md:w-auto"
                            alt="Level Cross"
                        />
                        <img src={bhp} className="w-24 md:w-auto" alt="BHP" />
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16">
                        <img
                            src={victoria}
                            className="w-24 md:w-auto"
                            alt="Victoria"
                        />
                        <img
                            src={pacificHydro}
                            className="w-24 md:w-auto"
                            alt="Pacific Hydro"
                        />
                        <img
                            src={vcoos}
                            className="w-24 md:w-auto"
                            alt="VCOSS"
                        />
                        <img
                            src={melbourneWater}
                            className="w-24 md:w-auto"
                            alt="Melbourne Water"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;
