import React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="currentColor"
        strokeLinecap="round"
        {...props}
    />
);

const MenuButton = ({ onClick, isOpen }) => {
    const color = isOpen ? "text-white" : "text-black";
    return (
        <motion.button
        className="relative menu-button togglesvg w-[23px] h-[23px]"
        onClick={onClick}
        animate={isOpen ? "open" : "closed"}
        initial={false}
        >
            <svg
                width="23"
                height="23"
                style={{ margin: "4px 0 0 2px"}}
                viewBox="0 0 23 23"
                className={`${color} duration-700`}
            >
                <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
                />
                <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
                />
                <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
                />
            </svg>
        </motion.button>
    );
};

export default MenuButton