import React from 'react'
import {motion} from 'framer-motion'
import MobileItem from "./MobileItem";

const MobileDropdown = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    const subMenuAnimate = {
        enter: {
            height: "auto",
            scaleY: 1,
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.05,
            },
            display: "block",
        },
        exit: {
            height: 0,
            scaleY: 0,
            opacity: 0,
            transition: {
                duration: 0.15,
            },
            transitionEnd: {
                display: "none"
            }
        }
    };
    return (
        <motion.ul className={`relative flex flex-col m-0 p-0 my-3 list-none text-white border-r-[1px]
        ${dropdownClass}`}
        initial="exit"
        animate={dropdown ? "enter" : "exit"}
        variants={subMenuAnimate}
        style={{ originY: 0 }}>
            {submenus.map((submenu, index) => (
                <MobileItem items={submenu} key={index} depthLevel={depthLevel} subitemState={dropdown}/>
            ))}
        </motion.ul>
    );
}

export default MobileDropdown