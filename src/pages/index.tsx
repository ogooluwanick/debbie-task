import { useState } from "react";
import { PiVideoFill } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";

export default function Home() {
        const [toggleCard, setToggleCard] = useState(false);

        return (
                <main className={`min-h-screen p-[46px]  w-full flex   items-stretch`} >
                        <section className="relative flex  justify-center flex-col rounded-[32px] px-[113px]  py-[94px] w-full" style={{ boxShadow: "0px 1px 2px 0px #09090B0D ,0px 0px 0px 1px #09090B0D" }}>

                                <div className="app__flex gap-8 w-full">
                                        <div className="flex-1">
                                                <div className="max-w-[351px] w-full">
                                                        <h1 className="font-medium mb-3 tracking-[0%]">Calendar widget</h1>
                                                        <p className="text-fg-supporting text-sm mb-4">Calendar widget with clear timezone differences information. Click on the widget to interact with it.</p>

                                                        <div className="flex items-center gap-2">
                                                                <span className="py-1 px-2 text-fg-supporting bg-subtle rounded-md text-[13px] leading-[19.5px] tracking-[0%]  cursor-pointer transition hover:bg-off-black hover:text-white">React</span>
                                                                <span className="py-1 px-2 text-fg-supporting bg-subtle rounded-md text-[13px] leading-[19.5px] tracking-[0%]  cursor-pointer transition hover:bg-off-black hover:text-white">Tailwind css</span>
                                                                <span className="py-1 px-2 text-fg-supporting bg-subtle rounded-md text-[13px] leading-[19.5px] tracking-[0%]  cursor-pointer transition hover:bg-off-black hover:text-white">Motion (prev. framer motion)</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="flex-1">
                                                <div className={`p-4 rounded-[18px] max-w-[200px] w-full cursor-pointer`} style={{ boxShadow: "0px 8px 16px 0px #0000000A, 0px 4px 8px 0px #0000000A, 0px 0px 0px 1px #09090B0D" }}>
                                                        <div className="mb-4 flex justify-between items-center">
                                                                <span className="bg-[#ECE9FECC] text-brand-subtle rounded-md font-medium text-xs py-1 px-1.5 transition hover:text-white hover:bg-brand-subtle block cursor-pointer w-fit ">In 15 mins</span>

                                                                <span className="app__flex bg-[#ECE9FECC] text-brand-subtle rounded-md font-medium text-xs py-1 px-1.5 transition hover:text-white hover:bg-brand-subtle block cursor-pointer w-fit ">
                                                                        <PiVideoFill size={16} />
                                                                </span>
                                                        </div>

                                                        <b className="font-medium text-sm block mb-1">Engineering sync</b>
                                                        <span className="text-[13px] leading-[19.5px] tracking-[0%]  text-fg-supporting text-sm ">1:30 PM → 2:30 PM</span>

                                                        <hr className="border-[#E5E5E5B2] -mx-4 my-4" />

                                                        <div className="flex justify-between items-stretch gap-2">
                                                                <div className="">
                                                                <div className="app__flex gap-2 mb-2">
                                                                        <b className="font-medium text-sm block">Guests</b>
                                                                        <span className="app__flex gap-1 5">
                                                                                <FaGlobe className="text-fg-mild" size={16}/>
                                                                                <span className="text-fg-subtle text-sm">3</span>
                                                                        </span>
                                                                </div>
                                                                <div className="">
                                                                        
                                                                </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <button className="absolute left-[113px] bottom-[94px] py-1.5 px-2.5 text-fg-base rounded-lg text-sm font-medium w-fit transition  hover:bg-off-black hover:text-white" style={{ boxShadow: "0px 0px 0px 1px #00000014, 0px 1px 2px 0px #0000001F" }}>Next task</button>

                        </section>
                </main>
        );
}
