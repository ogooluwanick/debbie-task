import { useEffect, useState } from "react";
import { PiVideoFill } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";
import Image from "next/image";
import useOnclickOutside from 'react-cool-onclickoutside';
import { motion } from 'framer-motion';
import Link from "next/link";
import { MotionWrap } from '../components';

const users: User[] = [
        { img: "https://i.pinimg.com/736x/38/9e/fe/389efe6dda946ba7e63a2f9d69549ce3.jpg", name: "jerry", timeZone: "-5 hrs / GMT+8", status: true, },
        { img: "https://i.pinimg.com/474x/a2/5c/16/a25c16d8b4d6e828f768bff5f9db2b3d.jpg", name: "sarah", timeZone: "", status: false, },
        { img: "https://i.pinimg.com/474x/9f/72/09/9f7209995fc7c598ae25c6ace377ad11.jpg", name: "debbie", timeZone: "-2 hrs / GMT-5", status: true, },
        { img: "https://i.pinimg.com/474x/7a/3d/8b/7a3d8b4564f8cfc3a98736e9b6767b0f.jpg", name: "mike", timeZone: "", status: false, },
        { img: "https://i.pinimg.com/474x/7a/3d/8b/7a3d8b4564f8cfc3a98736e9b6767b0f.jpg", name: "mike", timeZone: "", status: false, },
        { img: "https://i.pinimg.com/474x/7a/3d/8b/7a3d8b4564f8cfc3a98736e9b6767b0f.jpg", name: "mike", timeZone: "", status: false, },
        { img: "https://i.pinimg.com/474x/15/fa/7a/15fa7a14550b9eecaed3f9b641dc95af.jpg", name: "", timeZone: "your time / GMT-3", status: true, },
];

type User = {
        img: string;
        name: string;
        timeZone: string;
        status: boolean;
};


export default function Home() {
        const cardRef = useOnclickOutside(() => setToggleCard(false));
        const [toggleCard, setToggleCard] = useState(false);
        const [hoverCard, setHoverCard] = useState<User | undefined>(undefined);
        const [windowWidth, setWindowWidth] = useState(1024);


        useEffect(() => {
                const handleResize = () => {
                        setWindowWidth(window.innerWidth);
                };

                window.addEventListener("resize", handleResize);
                return () => window.removeEventListener("resize", handleResize);
        }, []);

        return (
                <MotionWrap>


                        <main className={`min-h-screen p-4 sm:p-[46px]  w-full flex   items-stretch`} >
                                <section className="relative flex  justify-center flex-col rounded-[32px] px-4 sm:px-[113px]  py-4 sm:py-[94px] w-full" style={{ boxShadow: "0px 1px 2px 0px #09090B0D ,0px 0px 0px 1px #09090B0D" }}>

                                        <div className="app__flex flex-wrap !items-start sm:!items-center flex-col sm:flex-row gap-8 w-full">
                                                <div className="flex-1">
                                                        <div className="max-w-[351px] w-full">
                                                                <h1 className="font-medium mb-3 tracking-[0%]">Calendar widget</h1>
                                                                <p className="text-fg-supporting text-sm mb-4">Calendar widget with clear timezone differences information. Click on the widget to interact with it.</p>

                                                                <div className="flex items-center gap-2 flex-wrap">
                                                                        <span className="py-1 px-2 text-fg-supporting bg-subtle rounded-md text-[13px] leading-[19.5px] tracking-[0%]  cursor-pointer transition hover:bg-off-black hover:text-white">React</span>
                                                                        <span className="py-1 px-2 text-fg-supporting bg-subtle rounded-md text-[13px] leading-[19.5px] tracking-[0%]  cursor-pointer transition hover:bg-off-black hover:text-white whitespace-nowrap">Tailwind css</span>
                                                                        <span className="py-1 px-2 text-fg-supporting bg-subtle rounded-md text-[13px] leading-[19.5px] tracking-[0%]  cursor-pointer transition hover:bg-off-black hover:text-white whitespace-nowrap">Motion (prev. framer motion)</span>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="flex-1 w-full">

                                                        <motion.div
                                                                className={`p-4 rounded-[18px] w-full h-full cursor-pointer overflow-hidden`}
                                                                ref={cardRef}
                                                                onClick={() => setToggleCard(val => !val)}
                                                                style={{ boxShadow: "0px 8px 16px 0px #0000000A, 0px 4px 8px 0px #0000000A, 0px 0px 0px 1px #09090B0D" }}
                                                                animate={{
                                                                        width: (toggleCard ? windowWidth < 569 ? '100%' : 482 : 200),
                                                                        maxHeight: (toggleCard ? 482 : 116),
                                                                }}
                                                                transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}

                                                        >
                                                                <div className="mb-4 flex justify-between items-center">
                                                                        <span className="bg-[#ECE9FECC] text-brand-subtle rounded-md font-medium text-xs py-1 px-1.5 transition hover:text-white hover:bg-brand-subtle block cursor-pointer w-fit ">In 15 mins</span>

                                                                        <span className={`app__flex bg-[#ECE9FECC] text-brand-subtle rounded-md font-medium text-xs py-1 px-1.5 transition hover:text-white hover:bg-brand-subtle block cursor-pointer w-fit  ${toggleCard ? "opacity-100" : "opacity-0"}`}>
                                                                                <PiVideoFill size={16} />
                                                                        </span>
                                                                </div>

                                                                <b className="font-medium text-sm block mb-1">Engineering sync</b>
                                                                <span className="text-[13px] leading-[19.5px] tracking-[0%]  text-fg-supporting text-sm ">1:30 PM → 2:30 PM</span>

                                                                <div className={`${toggleCard ? "opacity-100" : "opacity-0  overflow-hidden"} transition `}>

                                                                        <hr className="border-[#E5E5E5B2] -mx-4 my-4" />

                                                                        <div className="flex justify-between items-stretch gap-2">
                                                                                <div className="">
                                                                                        <div className="flex items-center gap-2 mb-2">
                                                                                                <b className="font-medium text-sm block">Guests</b>
                                                                                                <span className="app__flex gap-1 5">
                                                                                                        <FaGlobe className="text-fg-mild" size={16} />
                                                                                                        <span className="text-fg-subtle text-sm">3</span>
                                                                                                </span>
                                                                                        </div>
                                                                                        <div className="">
                                                                                                <div className={`user-imgs-stack ${hoverCard && "active"}`}>
                                                                                                        {
                                                                                                                users.filter(x => x.status).map((item, i) => (
                                                                                                                        <div key={i} >
                                                                                                                                <Image className={`${hoverCard?.name === item?.name && "active"}`} src={item?.img || "https://i.pinimg.com/474x/61/f7/5e/61f75ea9a680def2ed1c6929fe75aeee.jpg"} alt={`user avater ${i}`} width={100} height={100} loading="eager" />
                                                                                                                        </div>
                                                                                                                ))
                                                                                                        }
                                                                                                </div>
                                                                                        </div>
                                                                                </div>

                                                                                <div >
                                                                                        <p className={`text-[13px] h-[19.5px] leading-[19.5px] tracking-[0%] text-fg-supporting text-sm whitespace-nowrap transition-opacity duration-[1200ms] font-sfmono ${hoverCard ? "opacity-100" : "opacity-0"}`} >
                                                                                                {`${hoverCard?.name || " "} ${hoverCard?.timeZone || ""}`}
                                                                                        </p>

                                                                                        <div className="flex  items-center justify-end gap-1.5 mt-2">
                                                                                                {
                                                                                                        users?.map((user, i) => (
                                                                                                                <button
                                                                                                                        key={i} className={`rounded-full w-2 h-7 ${user.status ? "bg-strong hover:bg-brand-subtle" : "bg-disabled"} transition`}
                                                                                                                        onMouseEnter={() => user.status && setHoverCard(user)} // hover button
                                                                                                                        onMouseLeave={() => setHoverCard(undefined)} // leave button 
                                                                                                                />
                                                                                                        ))
                                                                                                }
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </motion.div>
                                                </div>
                                        </div>

                                        <Link href={`/contextual-toolbar`} className="absolute left-6 bottom-6 md:left-[113px] md:bottom-[94px] py-1.5 px-2.5 text-fg-base rounded-lg text-sm font-medium w-fit transition  hover:bg-off-black hover:text-white  shadow-[0px_0px_0px_1px_#00000014,0px_1px_2px_0px_#0000001F]">Next task</Link>

                                </section>
                        </main>
                </MotionWrap>

        );
}
