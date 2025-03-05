import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useOnclickOutside from 'react-cool-onclickoutside';
import { AnimatePresence, motion } from 'framer-motion';
import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { MotionWrap } from "@/components";
import { FaCheck } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";
import toast from "react-hot-toast";


const CalenderWidget = () => {
        const [selectedButton, setSelectedButton] = useState<number | null>(0);
        const [isSharing, setIsSharing] = useState<boolean | null>(false);
        const [copyLink, setCopyLink] = useState<string | null>("/mylink.com");
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
                                const scrollLeft = container.scrollLeft; 

                                setSliderStyle({ left: left - containerLeft + scrollLeft, width });
                        }
                }
        };

        const handleCopyClick = (textToCopy: string) => {

                const textArea = document.createElement("textarea");
                textArea.value = textToCopy;
                document.body.appendChild(textArea);

                textArea.select();
                textArea.setSelectionRange(0, 99999); 

                document.execCommand("copy");

                document.body.removeChild(textArea);

                toast.success("Link to secret key copied!", { position: "bottom-right" });
        };

        useEffect(() => {
                updateSliderPosition();
                // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [selectedButton]);

        return (
                <MotionWrap>

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
                                                        <AnimatePresence>
                                                                <motion.div
                                                                        className={`p-4 rounded-[18px] w-full h-full cursor-pointer overflow-hidden max-w-[482px]`}
                                                                        style={{ transformOrigin: 'top', boxShadow: "0px 8px 16px 0px #0000000A, 0px 4px 8px 0px #0000000A, 0px 0px 0px 1px #09090B0D" }}
                                                                        key={selectedButton} 
                                                                        initial={{ opacity: 0, height: 0 }}  
                                                                        animate={{ opacity: 1, height: 'auto' }}  
                                                                        exit={{ opacity: 0, height: 0 }}     
                                                                        transition={{ duration: 0.5, ease: 'easeInOut', scaleY: { type: 'spring', stiffness: 300, damping: 25 } }}
                                                                >
                                                                        {
                                                                                selectedButton == 0 ?
                                                                                        <div className="overflow-hidden">
                                                                                                <b className="font-medium text-sm block mb-2.5">Create webhook</b>

                                                                                                <section className="w-full p-3 rounded-[10px] bg-mild pb-[48px]" style={{ boxShadow: "0px 1px 2px 0px #09090B0D, 0px 0px 0px 1px #09090B0D" }}>
                                                                                                        <form>
                                                                                                                <div className="w-full mb-[20px]">
                                                                                                                        <label className="font-medium text-sm block mb-2">Endpoint</label>
                                                                                                                        <input type="text" className="transition placeholder:text-fg-mild text-sm px-3 py-2.5 w-full rounded-[10px] bg-white shadow-[0px_1px_2px_0px_#1212170D,inset_0px_0px_0px_1px_#D6D6D6B2]  hover:shadow-[0px_0px_0px_3px_#ECE9FE,0px_1px_2px_0px_#1212170D,inset_0px_0px_0px_1px_#A48AFB]" placeholder="https://myapp.com/webhooks" />
                                                                                                                </div>
                                                                                                                <div className="w-full mb-[20px]">
                                                                                                                        <h6 className="font-medium text-sm block mb-2">Projects</h6>

                                                                                                                        <div className="flex items-center gap-[20px] select-none">

                                                                                                                                <div className="flex items-center  cursor-pointer">
                                                                                                                                        <input checked id="default-radio-1" type="radio" value="" name="default-radio" className="peer hidden" />
                                                                                                                                        <span className={`w-3.5 h-3.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] rounded-full app__flex peer-checked:bg-brand-subtle peer-checked:shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]  peer-hover:rounded-[4px] peer-hover:bg-disabled peer-checked:!bg-[#7839EE]  peer-checked:!rounded-full `} />
                                                                                                                                        <span className="-ml-2.5 w-1.5 h-1.5 transition-all rounded-full peer-checked:bg-white bg-transparent peer-checked:shadow-[0px_1px_2px_0px_#491C9699]" />
                                                                                                                                        <label htmlFor="default-radio-1" className="ml-3 text-[13px] leading-[19.5px] text-fg-supporting app__flex gap-1 font-normal"><span className="cursor-pointer">All team projects in</span> <span className="bg-[#ECE9FECC] text-brand-subtle rounded-md font-medium text-xs py-0.5 px-1 transition hover:text-white hover:bg-brand-subtle block cursor-pointer w-fit ">acme</span></label>
                                                                                                                                </div>
                                                                                                                                <div className="flex items-center">
                                                                                                                                        <input id="default-radio-2" type="radio" value="" name="default-radio" className="peer hidden" />
                                                                                                                                        <span className={`w-3.5 h-3.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] rounded-full app__flex peer-checked:bg-brand-subtle peer-checked:shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]  peer-hover:rounded-[4px] peer-hover:bg-disabled peer-checked:!bg-[#7839EE]  peer-checked:!rounded-full `} />
                                                                                                                                        <span className="-ml-2.5 w-1.5 h-1.5 transition-all rounded-full peer-checked:bg-white bg-transparent peer-checked:shadow-[0px_1px_2px_0px_#491C9699]" />
                                                                                                                                        <label htmlFor="default-radio-2" className="ml-3 text-[13px] leading-[19.5px] text-fg-supporting">Tagged projects</label>
                                                                                                                                </div>
                                                                                                                        </div>
                                                                                                                </div>
                                                                                                                <div className="w-full mb-3">
                                                                                                                        <h6 className="font-medium text-sm block mb-2">Events</h6>

                                                                                                                        <div className="grid grid-cols-2 grid-rows-3 gap-4 w-full h-full p-3 bg-disabled rounded-[10px] select-none">
                                                                                                                                <div className="flex items-center  cursor-pointer">
                                                                                                                                        <input id="default-checkbox-1" type="checkbox" value="" name="default-checkbox" className="peer hidden" />
                                                                                                                                        <span className={`w-3.5 h-3.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] rounded-[4px] app__flex bg-white  peer-checked:bg-interactive peer-hoverchecked::!bg-interactive peer-checked:shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]  peer-hover:rounded-[4px] peer-hover:checked:!bg-[#7839EE]  peer-checked:!rounded-[4px] `} />
                                                                                                                                        <span className="-ml-3 w-fit h-fit transition-all   text-transparent  peer-checked:!text-white peer-checked:drop-shadow-[0px_1px_2px_0px_#491C9699]" ><FaCheck size={10} /></span>

                                                                                                                                        <label htmlFor="default-checkbox-1" className="ml-3 text-[13px] leading-[19.5px] text-fg-supporting app__flex gap-1 font-normal"><span className="cursor-pointer">Deployment created</span></label>
                                                                                                                                </div>
                                                                                                                                <div className="flex items-center  cursor-pointer">
                                                                                                                                        <input id="default-checkbox-2" type="checkbox" value="" name="default-checkbox" className="peer hidden" />
                                                                                                                                        <span className={`w-3.5 h-3.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] rounded-[4px] app__flex bg-white  peer-checked:bg-interactive peer-hoverchecked::!bg-interactive peer-checked:shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]  peer-hover:rounded-[4px] peer-hover:checked:!bg-[#7839EE]  peer-checked:!rounded-[4px] `} />
                                                                                                                                        <span className="-ml-3 w-fit h-fit transition-all   text-transparent  peer-checked:!text-white peer-checked:drop-shadow-[0px_1px_2px_0px_#491C9699]" ><FaCheck size={10} /></span>

                                                                                                                                        <label htmlFor="default-checkbox-2" className="ml-3 text-[13px] leading-[19.5px] text-fg-supporting  cursor-pointer">Project created</label>
                                                                                                                                </div>
                                                                                                                                <div className="flex items-center  cursor-pointer">
                                                                                                                                        <input id="default-checkbox-3" type="checkbox" value="" name="default-checkbox" className="peer hidden" />
                                                                                                                                        <span className={`w-3.5 h-3.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] rounded-[4px] app__flex bg-white  peer-checked:bg-interactive peer-hoverchecked::!bg-interactive peer-checked:shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]  peer-hover:rounded-[4px] peer-hover:checked:!bg-[#7839EE]  peer-checked:!rounded-[4px] `} />
                                                                                                                                        <span className="-ml-3 w-fit h-fit transition-all   text-transparent  peer-checked:!text-white peer-checked:drop-shadow-[0px_1px_2px_0px_#491C9699]" ><FaCheck size={10} /></span>
                                                                                                                                        <label htmlFor="default-checkbox-3" className="ml-3 text-[13px] leading-[19.5px] text-fg-supporting  cursor-pointer">Deployment error</label>
                                                                                                                                </div>
                                                                                                                                <div className="flex items-center  cursor-pointer">
                                                                                                                                        <input id="default-checkbox-4" type="checkbox" value="" name="default-checkbox" className="peer hidden" />
                                                                                                                                        <span className={`w-3.5 h-3.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] rounded-[4px] app__flex bg-white  peer-checked:bg-interactive peer-hoverchecked::!bg-interactive peer-checked:shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]  peer-hover:rounded-[4px] peer-hover:checked:!bg-[#7839EE]  peer-checked:!rounded-[4px] `} />
                                                                                                                                        <span className="-ml-3 w-fit h-fit transition-all   text-transparent  peer-checked:!text-white peer-checked:drop-shadow-[0px_1px_2px_0px_#491C9699]" ><FaCheck size={10} /></span>
                                                                                                                                        <label htmlFor="default-checkbox-4" className="ml-3 text-[13px] leading-[19.5px] text-fg-supporting  cursor-pointer">Project deleted</label>
                                                                                                                                </div>
                                                                                                                                <div className="flex items-center  cursor-pointer">
                                                                                                                                        <input id="default-checkbox-5" type="checkbox" value="" name="default-checkbox" className="peer hidden" />
                                                                                                                                        <span className={`w-3.5 h-3.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] rounded-[4px] app__flex bg-white  peer-checked:bg-interactive peer-hoverchecked::!bg-interactive peer-checked:shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]  peer-hover:rounded-[4px] peer-hover:checked:!bg-[#7839EE]  peer-checked:!rounded-[4px] `} />
                                                                                                                                        <span className="-ml-3 w-fit h-fit transition-all   text-transparent  peer-checked:!text-white peer-checked:drop-shadow-[0px_1px_2px_0px_#491C9699]" ><FaCheck size={10} /></span>
                                                                                                                                        <label htmlFor="default-checkbox-5" className="ml-3 text-[13px] leading-[19.5px] text-fg-supporting  cursor-pointer">Deployment cancelled</label>
                                                                                                                                </div>

                                                                                                                        </div>


                                                                                                                </div>

                                                                                                        </form>

                                                                                                </section>
                                                                                        </div>
                                                                                        : selectedButton == 1 ?
                                                                                                <div className="overflow-hidden">
                                                                                                        <section className="w-full p-3 rounded-[10px] bg-mild pb-[48px]" style={{ boxShadow: "0px 1px 2px 0px #09090B0D, 0px 0px 0px 1px #09090B0D" }}>

                                                                                                                <h6 className="font-medium text-sm mb-2 flex items-center gap-1"><span>Connect repositories to</span> <span className="bg-[#ECE9FECC] text-brand-subtle rounded-md font-medium text-xs py-0.5 px-1 transition hover:text-white hover:bg-brand-subtle block cursor-pointer w-fit ">acme</span></h6>

                                                                                                                <div className="flex flex-col gap-2 mb-3">

                                                                                                                        <div className="flex items-center  cursor-pointer">
                                                                                                                                <input id="default-checkbox-1" type="checkbox" value="" name="default-checkbox" className="peer hidden" />
                                                                                                                                <span className={`w-3.5 h-3.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] rounded-[4px] app__flex bg-white  peer-checked:bg-interactive peer-hoverchecked::!bg-interactive peer-checked:shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]  peer-hover:rounded-[4px] peer-hover:checked:!bg-[#7839EE]  peer-checked:!rounded-[4px] `} />
                                                                                                                                <span className="-ml-3 w-fit h-fit transition-all   text-transparent  peer-checked:!text-white peer-checked:drop-shadow-[0px_1px_2px_0px_#491C9699]" ><FaCheck size={10} /></span>

                                                                                                                                <label htmlFor="default-checkbox-1" className="ml-3 text-[13px] leading-[19.5px] text-fg-supporting app__flex gap-1 font-normal"><span className="cursor-pointer">Deployment created</span></label>
                                                                                                                        </div>
                                                                                                                        <div className="flex items-center  cursor-pointer">
                                                                                                                                <input id="default-checkbox-2" type="checkbox" value="" name="default-checkbox" className="peer hidden" />
                                                                                                                                <span className={`w-3.5 h-3.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] rounded-[4px] app__flex bg-white  peer-checked:bg-interactive peer-hoverchecked::!bg-interactive peer-checked:shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]  peer-hover:rounded-[4px] peer-hover:checked:!bg-[#7839EE]  peer-checked:!rounded-[4px] `} />
                                                                                                                                <span className="-ml-3 w-fit h-fit transition-all   text-transparent  peer-checked:!text-white peer-checked:drop-shadow-[0px_1px_2px_0px_#491C9699]" ><FaCheck size={10} /></span>

                                                                                                                                <label htmlFor="default-checkbox-2" className="ml-3 text-[13px] leading-[19.5px] text-fg-supporting app__flex gap-1 font-normal"><span className="cursor-pointer">Deployment error</span></label>
                                                                                                                        </div>
                                                                                                                        <div className="flex items-center  cursor-pointer">
                                                                                                                                <input id="default-checkbox-3" type="checkbox" value="" name="default-checkbox" className="peer hidden" />
                                                                                                                                <span className={`w-3.5 h-3.5 shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] rounded-[4px] app__flex bg-white  peer-checked:bg-interactive peer-hoverchecked::!bg-interactive peer-checked:shadow-[0px_0px_0px_1px_#7839EE,0px_1px_2px_0px_#491C9680]  peer-hover:rounded-[4px] peer-hover:checked:!bg-[#7839EE]  peer-checked:!rounded-[4px] `} />
                                                                                                                                <span className="-ml-3 w-fit h-fit transition-all   text-transparent  peer-checked:!text-white peer-checked:drop-shadow-[0px_1px_2px_0px_#491C9699]" ><FaCheck size={10} /></span>

                                                                                                                                <label htmlFor="default-checkbox-3" className="ml-3 text-[13px] leading-[19.5px] text-fg-supporting app__flex gap-1 font-normal"><span className="cursor-pointer">Deployment cancelled</span></label>
                                                                                                                        </div>
                                                                                                                </div>

                                                                                                        </section>
                                                                                                </div>
                                                                                                : selectedButton == 2 ?
                                                                                                        <div className="overflow-hidden">
                                                                                                                <section className="w-full p-3 rounded-[10px] bg-mild pb-[48px]" style={{ boxShadow: "0px 1px 2px 0px #09090B0D, 0px 0px 0px 1px #09090B0D" }}>

                                                                                                                        <h6 className="font-medium text-sm flex items-center gap-1"><span>Create new API key</span> </h6>
                                                                                                                        <p className="text-fg-supporting text-[13px] leading-[19.5px] mb-2">Your secret API Key will be shared with all users belonging to your organization.</p>

                                                                                                                        <div className="w-full mb-[20px]">
                                                                                                                                <input type="text" className="transition placeholder:text-fg-mild text-sm px-3 py-2.5 w-full rounded-[10px] bg-white shadow-[0px_1px_2px_0px_#1212170D,inset_0px_0px_0px_1px_#D6D6D6B2]  hover:shadow-[0px_0px_0px_3px_#ECE9FE,0px_1px_2px_0px_#1212170D,inset_0px_0px_0px_1px_#A48AFB]" placeholder="API key name" />
                                                                                                                        </div>
                                                                                                                </section>
                                                                                                        </div>
                                                                                                        : selectedButton == 3 ?
                                                                                                                <div className="overflow-hidden">
                                                                                                                        <section className="w-full p-3 rounded-[10px] bg-mild pb-[48px]" style={{ boxShadow: "0px 1px 2px 0px #09090B0D, 0px 0px 0px 1px #09090B0D" }}>
                                                                                                                                <div className={`flex items-center justify-between gap-2 ${isSharing ? "mb-2" : "mb-3"}`}>
                                                                                                                                        <div className="">
                                                                                                                                                <h6 className="font-medium text-sm flex items-center gap-1"><span>Sharing is {isSharing ? "on" : "off"}</span> </h6>
                                                                                                                                                {isSharing ? "" : <p className="text-fg-supporting text-[13px] leading-[19.5px] ">To share your workspace with other people you need to publish it first.</p>}
                                                                                                                                        </div>



                                                                                                                                        <label className="inline-flex items-center cursor-pointer">
                                                                                                                                                <input type="checkbox" checked={isSharing || false} onChange={(e) => setIsSharing((prev) => !prev)} value="" className="sr-only peer" />
                                                                                                                                                <div className="relative w-8 h-[18px] bg-[#E5E5E5] shadow-[0px_2px_4px_0px_#0000000A,0px_0px_8px_0px_#00000005_inset,0px_0px_0px_0.75px_#0000000F_inset,0px_2px_4px_0px_#0000000A_inset,0px_1px_1px_0px_#0000000A_inset] peer-focus:outline-none   rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[14px] after:w-[14px] after:transition-all after:shadow-[0px_0px_1px_0px_#00000014,0px_1px_2px_0px_#0000001F,0px_3px_3px_0px_#0000000A,0px_5px_4px_0px_#00000005,0px_0px_0px_0.5px_#00000005,0px_1px_0px_0px_#FFFFFF_inset,0px_0px_2px_1px_#FFFFFF_inset,]  peer-checked:bg-interactive "></div>
                                                                                                                                        </label>

                                                                                                                                </div>

                                                                                                                                {
                                                                                                                                        isSharing &&
                                                                                                                                        <div className="mb-3">
                                                                                                                                                <div className="w-full mb-3">
                                                                                                                                                        <input type="text" className="transition placeholder:text-fg-mild text-sm px-3 py-2.5 w-full rounded-[10px] bg-white shadow-[0px_1px_2px_0px_#1212170D,inset_0px_0px_0px_1px_#D6D6D6B2]  hover:shadow-[0px_0px_0px_3px_#ECE9FE,0px_1px_2px_0px_#1212170D,inset_0px_0px_0px_1px_#A48AFB]" value={copyLink || ""} onChange={(e) => setCopyLink(e.target.value)} placeholder="Share link" />
                                                                                                                                                </div>

                                                                                                                                                <button onClick={() => handleCopyClick(copyLink || "")} className="app__flex flex-row-reverse gap-1 py-1.5 px-2.5 text-fg-base rounded-lg text-sm font-medium w-fit transition  hover:bg-off-black hover:text-white  shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F] group" ><span className="">Copy</span><IoCopyOutline size={18} className="text-[#525252] group-hover:text-white transition" /></button>

                                                                                                                                        </div>
                                                                                                                                }

                                                                                                                        </section>
                                                                                                                </div>
                                                                                                                : ""
                                                                        }

                                                                        <div className="flex item-center justify-end gap-2 -mt-[48px] px-3">
                                                                                <button type="button" className="py-1.5 px-2.5 rounded-[10px]  hover:bg-subtle block text-base-alt font-medium text-sm  border border-solid hover:border-[#ECECEC] border-transparent h-[38px]" >Cancel</button>
                                                                                <button type="button" className="py-1.5 px-2.5 bg-[linear-gradient(0deg,_#7839EE,_#7839EE),_linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(255,_255,_255,_0)_100%)] rounded-lg text-sm font-medium w-fit transition  hover:bg-[linear-gradient(0deg,_#8e4be6,_#8e4be6),_linear-gradient(180deg,_rgba(255,_255,_255,_0.1)_0%,_rgba(255,_255,_255,_0)_100%)]  text-white shadow-[0px_0px_0px_1px#7839EE,0px_1px_2px_0px_#2E125E66,0px_0px_0px_1px_#FFFFFF33_inset]">{buttons[selectedButton || 0] === "Share Workspace" ? "Create secret key" : buttons[selectedButton || 0]}</button>
                                                                        </div>


                                                                        <div className="flex items-center mt-3.5 w-full">
                                                                                <div className="no-scrollbar flex gap-2 overflow-scroll flex-1 relative" ref={containerRef}>
                                                                                        {buttons.map((label, i) => (
                                                                                                <button
                                                                                                        className={` z-[2] px-3 py-2 rounded-[10px]  bg-transparent block  font-medium text-sm  border border-solid border-transparent whitespace-nowrap transition hover:text-base-alt ${i == selectedButton ? "text-base-alt" : "text-fg-supporting"}`}
                                                                                                        ref={(el) => {
                                                                                                                btnRefs.current[i] = el;
                                                                                                        }}

                                                                                                        key={i}
                                                                                                        onClick={() => { setSelectedButton(i); }}
                                                                                                >
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
                                                        </AnimatePresence>
                                                </div>
                                        </div>

                                        <Link href={`/`} className="absolute left-6 bottom-6 md:left-[113px] md:bottom-[94px] py-1.5 px-2.5 text-fg-base rounded-lg text-sm font-medium w-fit transition  hover:bg-off-black hover:text-white shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F]" >Previous task</Link>

                                </section>
                        </main>
                </MotionWrap >
        )
}

export default CalenderWidget