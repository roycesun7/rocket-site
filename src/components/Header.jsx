import React from 'react'
import MobileNav from './MobileNav/MobileNav'
import Navbar from './Nav/Navbar'
import { motion } from 'framer-motion'

const Header = () => {
    const varHeader = {
        onscreen: { opacity: 1, transition: { duration: 1.5, ease: [.35,.02,.27,.96] } },
        offscreen: { opacity: 0}
    };
    const varLogo = {
        onscreen: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [.35,.02,.27,.96] } },
        offscreen: { opacity: 0, y: -150 }
    };
    return (
        <motion.header className='absolute w-full h-[100px] bg-[rgba(230,230,230,0.5)] z-10'
        initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:true, amount:0.3}}
        variants={varHeader}>
            <motion.div className="relative flex items-center justify-around max-w-[1240px] h-full"
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:true, amount:0.3}}
            transition={{staggerChildren:0.3}}>
                <motion.a href="/#" className="text-3xl text-black"
                variants={varLogo}>
                    Logo
                </motion.a>
                <Navbar/>
                <MobileNav />
            </motion.div>
        </motion.header>
    )
}

export default Header
