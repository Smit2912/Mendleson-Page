import React from "react";
import asset5 from "../assets/Asset5.png";
import asset8 from "../assets/Asset8.png";
import person1 from "../assets/Person-1.png";
import person2 from "../assets/Person-2.png";
import person3 from "../assets/Person-3.png";

const Team = () => {
    return (
        <div className="border border-white relative">
            <img src={asset5} className="absolute -z-10" />

            <div className="flex flex-col gap-10 items-center mt-20 md:mt-48">
                <div className="flex flex-col gap-1 items-center md:items-start">
                    <h2 className="font-medium text-3xl md:text-5xl">
                        OUR TEAM
                    </h2>
                    <div className="border-b-2 w-[100px] md:w-[238px]"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-between w-full md:w-[1100px] gap-10">
                    <div className="flex flex-col items-center gap-5 md:gap-14">
                        <img src={person1} className="h-auto w-40 md:w-auto" />
                        <p className="text-lg md:text-2xl">Jessica D’suza</p>
                    </div>

                    <div className="flex flex-col items-center gap-5 md:gap-14">
                        <img src={person2} className="h-auto w-40 md:w-auto" />
                        <p className="text-lg md:text-2xl">Johny Williams</p>
                    </div>

                    <div className="flex flex-col items-center gap-5 md:gap-14">
                        <img src={person3} className="h-auto w-40 md:w-auto" />
                        <p className="text-lg md:text-2xl">Sanya R,</p>
                    </div>
                </div>
            </div>

            <img
                src={asset8}
                className="absolute right-0 top-[420px] hidden md:block"
            />
        </div>
    );
};

export default Team;
