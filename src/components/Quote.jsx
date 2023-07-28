import React from 'react'
import { motion } from 'framer-motion'

const Quote = (props) => {
    const varLeft = {
        onscreen: {opacity: 1, x: 0, transition: { duration: 1, ease: [.35,.02,.27,.96] }},
        offscreen: {opacity: 0, x: -50}
    };
    const varRight = {
        onscreen: {opacity: 1, x: 0, transition: { duration: 1, ease: [.35,.02,.27,.96] }},
        offscreen: {opacity: 0, x: 50}
    };
    return (
        <div className='pb-[25px] pt-[10px] w-screen'>
            <motion.div className='w-screen max-w-[700px]'
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:true, amount:0.3}}
            transition={{staggerChildren:0.5}}
            >
                <motion.h1 className='text-[65px] text-gray-400 text-center mb-[-35px]' 
                variants={varLeft}
                >
                    &ldquo;
                </motion.h1>
                <motion.h1 className='text-[24px] text-center' 
                variants={varLeft}
                >
                    {props.text}
                </motion.h1>
                <motion.h1 className='serif text-[24px] text-red-400 text-center mt-[1rem]' 
                variants={varRight}
                >
                    - {props.person}
                </motion.h1>
            </motion.div>
        </div>
    )
}

export default Quote