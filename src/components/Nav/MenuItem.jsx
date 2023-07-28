import React from "react";
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

import Dropdown from "./Dropdown"; 

const MenuItem = ({ items, depthLevel, subitemState }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef();

    const font = depthLevel > 0 ? "text-[0.95rem]" : "text-[0.85rem]";
    const textSize = depthLevel > 0 ? "" : "tracking-wider";
    const textColor = depthLevel > 0 ? "text-[#111]" : "text-[#eee]";
    const textCase = depthLevel > 0 ? "normal-case" : "uppercase";
    const textWeight = depthLevel > 0 ? "font-normal" : "font-normal";
    const forUnderlineAnim = depthLevel === 0 ? "anim" : "";

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
        className={`relative z-20 ${textColor} menu-items ${font} ${textWeight} ${textCase} ${textSize} ${forUnderlineAnim}`}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        variants={depthLevel > 0 ? subitemAnim : ""}
        >
        {items.submenu ? (
            <div>
                <button
                    type="button"
                    className={`px-[1.25rem] py-[1rem] border-none cursor-pointer w-full bg-transparent ${textWeight} ${textCase} ${textSize}`}
                    aria-haspopup="menu"
                    aria-expanded={dropdown ? "true" : "false"}
                    onClick={() => setDropdown((prev) => !prev)}
                >
                    <motion.div className="w-full h-full" whileHover={{scale: 1.07,}}>
                        {items.title}
                    </motion.div>
                </button>
                <Dropdown
                    depthLevel={depthLevel}
                    submenus={items.submenu}
                    dropdown={dropdown}
                />
            </div>
        ) : (
            <Link className={`px-[1.25rem] py-[0.7rem] block ${textCase}`}
            to={`${items.href}`}>
                <motion.div className="w-full h-full" whileHover={{scale: 1.07,}}>
                    {items.title}
                </motion.div>
            </Link>
        )}
        </motion.li>
    );
};

export default MenuItem;