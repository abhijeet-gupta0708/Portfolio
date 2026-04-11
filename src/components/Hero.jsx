import { useState,useEffect } from "react";
import Typewritter from "./Typewritter";
function Hero()
{
    return (
        <>
        {/* The BIG HERO DIV */}
        <div className="Full_size_hero bg-[var(--bg)] flex flex-col md:flex-row justify-center h-min px-4 py-4 md:px-20 md:py-16">
            {/*LEFT SIDE ELEMENSTS */}
            <div className="left_side_hero md:w-1/2 flex flex-col gap-6 justify-center" >
                <p className="flex flex-col text-3xl text-[var(--text)] gap-4">Hello,  I Am</p>
                {/* USING TYPEWRITTER EFFECT TO REWRITE THE NAME EVERY TIME */}
                    <Typewritter />
                <p> Dedicated to continuous learning and building real-world projects to create efficient and impactful solutions.</p>
                <div className="flex flex-row gap-4 ">
                    <a href="#contact"className=" button_click bg-[var(--primary-color)]  w-fit text-3xl rounded-3xl p-3 hover:translate-x-2 hover:scale-105 md:hover:translate-y-2">Hire me</a>
                    <a href="#projects"className="underline  mt-4 text-2xl text-[var(--fourth-color)] hover:translate-x-2 hover:scale-105 hover:translate-y-2">See My Work</a>
                </div>
                
            </div>


            {/*RIGHT SIDE ELEMENSTS */}

            <div className="right_side_hero  md:w-1/2 relative  md:justify-center "style={{backgroundColor: 'var(--bg)'}}>
                <div className="profile flex  behind " >
                    <img className="float-lr bg-[var(--bg)]  "src="/Abhi_pic_3circles_no_bg (1).png"alt="Profile_Image"></img>
                    <img className="float-ud  absolute w-8 md:w-12 lg:w-16 top-0 right-0 "src="/download (1).png"alt="Random Struture 1"></img>
                    <img className="float-ud  absolute w-8 md:w-12 lg:w-16 left-0 bottom-0 "src="/download.png"alt="Random Struture 2"></img>
                </div>

            </div>



        </div>
        </>
    );
}

export default Hero