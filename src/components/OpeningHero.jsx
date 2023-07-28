import React from 'react'
import { motion } from 'framer-motion'

const OpeningHero = () => {
    const varh2 = {
        onscreen: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [.35,.02,.27,.96] } },
        offscreen: { opacity: 0, y: 150 }
    };
    const varh1 = {
        onscreen: { opacity: 1, y: 0, color: 'hsl(207,100,50)', transition: { duration: 0.75, ease: [.35,.02,.27,.96], color: {delay: 1, duration: 3, ease: "linear"} } },
        offscreen: { opacity: 0, y: 50, color: 'hsl(207,100,100)' }
    };
    return (
        <motion.div className='pt-[50px] pb-[10px] flex flex-col items-center justify-center text-center'>
            <motion.h2 className='text-[22px] italic'
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:true, amount:0.1}}
            variants={varh2}>
                Pushing the limits of student aerospace exploration
            </motion.h2>
            <motion.h1 className='pt-[15px] text-[46px] font-bold tracking-wide landing-title'
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:true, amount:0.3}}
            transition={{delayChildren: 0.3, staggerChildren: 0.03}}>
                <motion.span variants={varh1}>T</motion.span>
                <motion.span variants={varh1}>h</motion.span>
                <motion.span variants={varh1}>e</motion.span>
                <motion.span variants={varh1}>&nbsp;</motion.span>
                <motion.span variants={varh1}>M</motion.span>
                <motion.span variants={varh1}>o</motion.span>
                <motion.span variants={varh1}>n</motion.span>
                <motion.span variants={varh1}>t</motion.span>
                <motion.span variants={varh1}>g</motion.span>
                <motion.span variants={varh1}>o</motion.span>
                <motion.span variants={varh1}>m</motion.span>
                <motion.span variants={varh1}>e</motion.span>
                <motion.span variants={varh1}>r</motion.span>
                <motion.span variants={varh1}>y</motion.span>
                <motion.span variants={varh1}>&nbsp;</motion.span>
                <span className='block md:inline-block'></span>
                <motion.span variants={varh1}>R</motion.span>
                <motion.span variants={varh1}>o</motion.span>
                <motion.span variants={varh1}>c</motion.span>
                <motion.span variants={varh1}>k</motion.span>
                <motion.span variants={varh1}>e</motion.span>
                <motion.span variants={varh1}>t</motion.span>
                <motion.span variants={varh1}>r</motion.span>
                <motion.span variants={varh1}>y</motion.span>
                <motion.span variants={varh1}>&nbsp;</motion.span>
                <motion.span variants={varh1}>T</motion.span>
                <motion.span variants={varh1}>e</motion.span>
                <motion.span variants={varh1}>a</motion.span>
                <motion.span variants={varh1}>m</motion.span>
            </motion.h1>
        </motion.div>
    )
}

export default OpeningHero 