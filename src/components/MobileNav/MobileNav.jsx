import React from 'react';
import { menuItems } from "../NavData";
import MobileItem from "./MobileItem";
import MenuButton from './MenuButton';
import { motion, useCycle } from 'framer-motion';

const MobileNav = () => {
    const [isOpen, toggleDropdown] = useCycle(false, true);
    const sidebarAnim = {
        open: {
            x: -250,
            left: "100vw",
            transition: {
                duration: 0.3,
            },
        },
        close:{
            x: 0,
            left: "100vw",
            transitionEnd: {
                duration: 0.3,
            },
        },
    };
    return (
        <nav className='mobileNav'>
            <MenuButton onClick={toggleDropdown} isOpen={isOpen}/>
            <motion.ul className="mobile z-20 fixed left-[100vw] top-0 h-[100vh] w-[250px] bg-black pt-[60px]
            flex flex-col justify-start align-start"
            initial="close"
            animate={isOpen ? "open" : "close"}
            variants={sidebarAnim}
            >
                {menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return <MobileItem items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </motion.ul>
        </nav>
    )
}

export default MobileNav