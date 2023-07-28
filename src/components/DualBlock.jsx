import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const DualBlock = (props) => {
    const varTitle = {
        onscreen: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [.35,.02,.27,.96] } },
        offscreen: { opacity: 0, x: -50 }
    };
    const varText = {
        onscreen: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [.35,.02,.27,.96] } },
        offscreen: { opacity: 0, x: -25 }
    };
    const varTitleParity = {
        onscreen: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [.35,.02,.27,.96] } },
        offscreen: { opacity: 0, x: 50 }
    };
    const varTextParity = {
        onscreen: { opacity: 1, x: 0, transition: { duration: 0.75, ease: [.35,.02,.27,.96] } },
        offscreen: { opacity: 0, x: 25 }
    };
    const varImage = {
        onscreen: { opacity: 1, transition: { duration: 1, ease: [.35,.02,.27,.96] } },
        offscreen: { opacity: 0,}
    };
    if(props.parity == true){
        return(
            <div className='w-screen m-0 p-0'>
                <div className='m-auto p-0 w-full max-w-[1100px] flex md:flex-row flex-col-reverse items-center justify-center'>
                    <motion.div className='w-full md:w-[50%] md:h-[60vh] m-0'
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once:true, amount:0.3}}
                    transition={{delayChildren:0.75, staggerChildren:0.75}}
                    variants={varImage}>
                        <motion.img 
                        className="w-[90%] h-[90%] object-cover mx-[5%] my-[3vh]" 
                        src={props.img} alt="icon" 
                        initial={{ boxShadow: "0px 0px 2px rgba(255,255,255,0)" }}
                        whileInView={{boxShadow: "20px 12px 2px rgba(255,255,255,0.25)", transition: {delay: 0, duration: 0.75, ease: [.35,.02,.27,.96]}}}
                        viewport={{once:true, amount:0.3}}
                        whileHover={{boxShadow: "30px 18px 4px rgba(255,255,255,0.15)", transition: {delay: 0, duration: 0.5, ease: [.35,.02,.27,.96]}}}/>
                    </motion.div>
                    <motion.div className='w-full md:w-[50%] md:h-[60vh] m-0 py-[2rem] px-[4rem]'
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once:true, amount:0.3}}
                    transition={{staggerChildren:0.5}}>
                        <motion.h1 className='text-left text-[40px] font-medium mb-[2rem] text-blue-100'
                        variants={varTitleParity}>
                            {props.title}
                        </motion.h1>
                        <motion.h3 className='text-left text-[18px] mb-[1.5rem]'
                        variants={varTextParity}>
                            {props.text} 
                        </motion.h3>
                        <motion.a className='text-left text-[22px] block text-indigo-400 arrow-right'
                        variants={varTextParity}
                        whileHover={{scale: 1.07, originX: 0}}
                        >
                            <Link to={`${props.href}`} >{props.button} <motion.span>&larr;</motion.span></Link>
                        </motion.a>
                    </motion.div>
                </div>
            </div> 
        )
    }else{
        return(
            <div className='w-screen m-0 p-0'>
                <div className='m-auto p-0 w-full max-w-[1100px] flex md:flex-row flex-col items-center justify-center'>
                    <motion.div className='w-full md:w-[50%] md:h-[60vh] m-0 py-[2rem] px-[4rem]'
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once:true, amount:0.3}}
                    transition={{staggerChildren:0.5}}>
                        <motion.h1 className='text-right text-[40px] font-medium mb-[2rem] text-blue-100'
                        variants={varTitle}>
                            {props.title}
                        </motion.h1>
                        <motion.h3 className='text-right text-[18px] mb-[1.5rem]'
                        variants={varText}>
                            {props.text}
                        </motion.h3>
                        <motion.a className='text-right text-[22px] block text-indigo-400 arrow-left'
                        variants={varText}
                        whileHover={{scale: 1.07, originX: 1}}>
                            <Link to={`${props.href}`} ><motion.span>&rarr;</motion.span> {props.button}</Link>
                        </motion.a>
                    </motion.div>
                    <motion.div className='w-full md:w-[50%] md:h-[60vh] m-0'
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    viewport={{once:true, amount:0.3}}
                    transition={{delayChildren:0.75, staggerChildren:0.75}}
                    variants={varImage}>
                        <motion.img 
                        className="w-[90%] h-[90%] object-cover mx-[5%] my-[3vh]" 
                        src={props.img} alt="icon" 
                        initial={{ boxShadow: "0px 0px 2px rgba(255,255,255,0)" }}
                        whileInView={{boxShadow: "20px 12px 2px rgba(255,255,255,0.25)", transition: {delay: 0, duration: 0.75, ease: [.35,.02,.27,.96]}}}
                        viewport={{once:true, amount:0.3}}
                        whileHover={{boxShadow: "30px 18px 4px rgba(255,255,255,0.15)", transition: {delay: 0, duration: 0.5, ease: [.35,.02,.27,.96]}}}/>
                    </motion.div>
                </div>
            </div> 
        )
    }
}

export default DualBlock 