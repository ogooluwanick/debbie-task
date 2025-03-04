import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useOnclickOutside from 'react-cool-onclickoutside';
import { motion } from 'framer-motion';
import Link from "next/link";
import { LuMenu } from "react-icons/lu";



const CalenderWidget = () => {
        const [selectedButton, setSelectedButton] = useState<number | null>(0);
        const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

        const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
        const containerRef = useRef<HTMLDivElement | null>(null);

        const buttons = ["Create webhook", "Connect repositories", "Create API key", "Share Workspace"];

        const updateSliderPosition = () => {
                if (selectedButton !== null && btnRefs.current[selectedButton] && containerRef.current) {
                        const button = btnRefs.current[selectedButton];
                        const container = containerRef.current;
                        if (button) {
                                const { left, width } = button.getBoundingClientRect();
                                const containerLeft = container.getBoundingClientRect().left;
                                const scrollLeft = container.scrollLeft; // Get current scroll position

                                setSliderStyle({ left: left - containerLeft + scrollLeft, width });
                        }
                }
        };

        useEffect(() => {
                updateSliderPosition();
        }, [selectedButton]);

        // useEffect(() => {
        //         const handleScroll = () => updateSliderPosition();

        //         const container = containerRef.current;
        //         if (container) {
        //                 container.addEventListener("scroll", handleScroll);
        //         }

        //         return () => {
        //                 if (container) {
        //                         container.removeEventListener("scroll", handleScroll);
        //                 }
        //         };
        // }, []);




        return (
                <main className={`min-h-screen p-4 sm:p-[46px]  w-full flex   items-stretch`} >
                        <section className="relative flex  justify-center flex-col rounded-[32px] px-4 sm:px-[113px]  py-4 sm:py-[94px] w-full" style={{ boxShadow: "0px 1px 2px 0px #09090B0D ,0px 0px 0px 1px #09090B0D" }}>

                                <div className="app__flex flex-wrap !items-start sm:!items-center flex-col sm:flex-row gap-8 w-full">
                                        <div className="flex-1">
                                                <div className="max-w-[320px] w-full">
                                                        <h1 className="font-medium mb-3 tracking-[0%]">Contextual toolbar</h1>
                                                        <p className="text-fg-supporting text-sm mb-4 max-w-[265px]">
                                                                A toolbar that suggests and enables actions based on users&apos; navigation.
                                                                <br />
                                                                <br />
                                                                Suggestions are related to the current page and users can perform actions inside the component, without changing to another page or context.
                                                        </p>

                                                        <div className="flex items-center gap-2 flex-wrap">
                                                                <span className="py-1 px-2 text-fg-supporting bg-subtle rounded-md text-[13px] leading-[19.5px] tracking-[0%]  cursor-pointer transition hover:bg-off-black hover:text-white">React</span>
                                                                <span className="py-1 px-2 text-fg-supporting bg-subtle rounded-md text-[13px] leading-[19.5px] tracking-[0%]  cursor-pointer transition hover:bg-off-black hover:text-white whitespace-nowrap">Tailwind css</span>
                                                                <span className="py-1 px-2 text-fg-supporting bg-subtle rounded-md text-[13px] leading-[19.5px] tracking-[0%]  cursor-pointer transition hover:bg-off-black hover:text-white whitespace-nowrap">Motion (Framer motion)</span>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="flex-1 w-full">

                                                <motion.div
                                                        className={`p-4 rounded-[18px] w-full h-full cursor-pointer overflow-hidden max-w-[482px]`}
                                                        // ref={cardRef}
                                                        // onClick={() => setToggleCard(val => !val)}
                                                        style={{ boxShadow: "0px 8px 16px 0px #0000000A, 0px 4px 8px 0px #0000000A, 0px 0px 0px 1px #09090B0D" }}
                                                // animate={{
                                                //         width: (toggleCard ? windowWidth < 569 ? '100%' : 482 : 200),
                                                //         maxHeight: (toggleCard ? 482 : 116),
                                                // }}
                                                // transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}

                                                >
                                                        <b className="font-medium text-sm block mb-2.5">Create webhook</b>

                                                        <section className="w-full p-3 rounded-[10px] bg-mild" style={{ boxShadow: "0px 1px 2px 0px #09090B0D, 0px 0px 0px 1px #09090B0D" }}>
                                                                <b className="font-medium text-sm block mb-2.5">Create webhook</b>
                                                        </section>


                                                        <div className="flex items-center mt-2.5 w-full">
                                                                <div className="no-scrollbar flex gap-2 overflow-scroll flex-1 relative" ref={containerRef}>
                                                                        {buttons.map((label, i) => (
                                                                                <button
                                                                                        className={` z-[2] px-3 py-2 rounded-[10px]  bg-transparent block  font-medium text-sm  border border-solid border-transparent whitespace-nowrap transition hover:text-base-alt ${i == selectedButton ? "text-base-alt" : "text-fg-supporting"}`}
                                                                                        ref={(el) => (btnRefs.current[i] = el)}
                                                                                        key={i}
                                                                                        onClick={() => { setSelectedButton(i); }}
                                                                                >
                                                                                        {console.log(i == selectedButton)}
                                                                                        {label}
                                                                                </button>
                                                                        ))}

                                                                        <motion.div
                                                                                className="absolute bottom-0 px-3 py-2 rounded-[10px]  bg-subtle block text-base-alt font-medium text-sm  border border-solid border-[#ECECEC] h-[38px]"
                                                                                animate={sliderStyle}
                                                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                                        />
                                                                </div>

                                                                <hr className="border-none w-[1px] h-[20px] bg-[#E5E5E5]  -mx-4 my-4 rounded-full ml-2 mr-1" />

                                                                <button className="px-2 py-2 rounded-[10px]  text-fg-supporting transition border border-solid  border-transparent hover:bg-subtle hover:border-[#ECECEC]"><LuMenu size={20} /></button>
                                                        </div>
                                                </motion.div>
                                        </div>
                                </div>

                                <Link href={`/`} className="absolute left-6 bottom-6 md:left-[113px] md:bottom-[94px] py-1.5 px-2.5 text-fg-base rounded-lg text-sm font-medium w-fit transition  hover:bg-off-black hover:text-white" style={{ boxShadow: "0px 0px 0px 1px #00000014, 0px 1px 2px 0px #0000001F" }}>Previous task</Link>

                        </section>
                </main>
        )
}

export default CalenderWidget