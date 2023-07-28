import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

import MobileDropdown from "./MobileDropdown";

const MobileItem = ({ items, depthLevel, subitemState }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    const font = depthLevel > 0 ? "text-[0.8rem]" : "text-[0.9rem]";
    const textSize = depthLevel > 0 ? "" : "tracking-wider";
    const textCase = depthLevel > 0 ? "normal-case" : "uppercase";
    const padding = depthLevel > 0 ? "py-1 mr-7 w-[185px]" : "py-3 mr-6 w-[200px]";
    const border = depthLevel > 0 ? "" : "border-b-[1px]";

    useEffect(() => {
        const handler = (event) => {
        if (dropdown && ref.current && !ref.current.contains(event.target)) {
            setDropdown(false);
        }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", handler);
        document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);
    const onMouseEnter = () => {
        window.innerWidth > 960 && setDropdown(true);
    };
    const onMouseLeave = () => {
        window.innerWidth > 960 && setDropdown(false);
    };

    const subitemAnim = {
        not: {scale: 1, top: 0},
        enter: { scale: 1, top: 0, opacity: 1,
            transition:{
                type: "tween",
            }
        },
        exit: { scale: 0, top: -35 , opacity: 0,
            transition:{
                delay: 0.3,
                duration: 0
            }
        },
    }

    return (
        <motion.li
        className={`my-0 text-right ${border} relative z-20 text-[#eee] 
        menu-items ${font} ${padding} ${textCase} ${textSize}`}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        variants={depthLevel > 0 ? subitemAnim : ""}
        >
        {items.submenu ? (
            <ul className="flex flex-col justify-start align-start">
                <button
                    type="button"
                    className={`border-none text-right cursor-pointer bg-transparent ${textCase} ${textSize}`}
                    aria-haspopup="menu"
                    aria-expanded={dropdown ? "true" : "false"}
                    onClick={() => setDropdown((prev) => !prev)}
                >
                    <motion.div className="w-full h-full inline" whileHover={{scale: 1.07, originX: 1.5, originY: 1, color: "#aaa"}} 
                    transition={{type: "tween",}}>
                        {items.title}
                    </motion.div>
                    {depthLevel > 0 ? <span>&raquo;</span> : <span className=" after:content-[''] after:inline-block after:ml-[0.28rem] after:align-[0.09rem] after:border-solid after:border-t-[0.42rem] after:border-t-white after:border-x-[0.32rem] after:border-x-transparent" />}
                </button>
                <MobileDropdown
                    depthLevel={depthLevel}
                    submenus={items.submenu}
                    dropdown={dropdown}
                />
            </ul>
        ) : (
            <Link className={` block ${textCase}`}
            to={`${items.href}`}>
                <motion.div className="" whileHover={{scale: 1.07, originX: 1.5, originY: 1, color: "#aaa"}} 
                transition={{type: "tween",}}>
                    {items.title}
                </motion.div>
            </Link>
        )}
        </motion.li>
    );
};

export default MobileItem;