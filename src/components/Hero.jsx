import { useState,useEffect } from "react";
import Typewritter from "./Typewritter";
function Hero()
{
    return (
        <>
        {/* The BIG HERO DIV */}
        <div className="Full_size_hero bg-[var(--bg)] flex justify-center h-min px-20 py-16">
            {/*LEFT SIDE ELEMENSTS */}
            <div className="left_side_hero w-1/2 flex flex-col gap-6 justify-center" >
                <p className="flex flex-col text-3xl text-[var(--text)] gap-4">Hello,  I Am</p>
                {/* USING TYPEWRITTER EFFECT TO REWRITE THE NAME EVERY TIME */}
                    <Typewritter />
                <p> Dedicated to continuous learning and building real-world projects to create efficient and impactful solutions.</p>
                <div className="flex flex-row gap-4 ">
                    <a className="bg-[var(--primary-color)]  w-fit text-3xl rounded-xl p-3">Hire me</a>
                    <a href="#projects"className="underline  mt-4 text-2xl text-[var(--fourth-color)]">See My Work</a>
                </div>
                
            </div>


            {/*RIGHT SIDE ELEMENSTS */}

            <div className="right_side_hero  hidden md:block w-1/2 relative flex justify-center "style={{backgroundColor: 'var(--bg)'}}>
                <div className="profile flex  behind " >
                    <img className="float-lr bg-[var(--secondary-color)]  "src="src\Images\Gemini_Generated_Image_h6anynh6anynh6an.png"alt="Profile_Image"></img>
                    <img className="float-ud  absolute w-8 md:w-12 lg:w-16 top-0 right-0 "src="src\Images\download (1).png"alt="Random Struture 1"></img>
                    <img className="float-ud  absolute w-8 md:w-12 lg:w-16 left-0 bottom-0 "src="src\Images\download.png"alt="Random Struture 2"></img>
                </div>

            </div>



        </div>
        </>
    );
}

export default Hero