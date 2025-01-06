import React from "react";
import project1 from "../assets/Our Project_ 1.png";
import project2 from "../assets/Our Project _ 2.png";
import project3 from "../assets/Our Project_ 3.png";

const Projects = () => {
    return (
        <div className="flex flex-col items-center gap-10 mt-28">
            <div className="flex flex-col gap-1">
                <h2 className="font-medium text-center text-3xl md:text-5xl">
                    OUR PROJECTS
                </h2>
                <div className="border-b-2 w-[360px]"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 items-center">
                <div className="w-full md:w-auto">
                    <img
                        src={project1}
                        className="w-full h-auto md:h-[600px] object-cover"
                    /> 
                </div> 
                <div className="flex flex-col justify-between w-full md:w-auto gap-5">
                    <img
                        src={project2}
                        className="w-full h-auto md:h-[290px] object-cover"
                    /> 
                    <img
                        src={project3}
                        className="w-full h-auto md:h-[290px] object-cover"
                    /> 
                </div> 
            </div>
        </div>
    );
};

export default Projects;
