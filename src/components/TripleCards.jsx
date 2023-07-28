import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const TripleCards = (props) => {
    const varMain = {
        onscreen: { opacity: 1, y: 0, transition: { duration: 1, ease: [.35,.02,.27,.96] } },
        offscreen: { opacity: 0, y: 100}
    };
    return (
        <div className='md:h-[70vh] h-[210vh] w-screen'>
            <div className='md:h-[70vh] h-[210vh] w-screen max-w-[1100px] flex md:flex-row flex-col justify-center items-center'>
                <motion.div className='h-[70vh] w-[100%] md:w-[33%] flex flex-col justify-start items-center bg-[rgb(20,20,20)]'
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:true, amount:0.3}}
                transition={{staggerChildren:0.15}}
                whileHover={{backgroundColor: "rgb(30,30,30)", transition: {duration: 0.5, ease: "linear"}}}
                >
                    <motion.img 
                    className="w-[90%] h-[60%] object-cover mx-[5%] my-[3vh]" 
                    src={props.imgA} alt="icon" 
                    variants={varMain}
                    />
                    <motion.h1 className='text-center text-blue-100 text-[28px] max-w-[75%] mb-[10px]'
                    variants={varMain}>
                        {props.titleA}
                    </motion.h1>
                    <motion.h2 className='text-center text-[16px] max-w-[75%] my-[5px]'
                    variants={varMain}>
                        {props.textA}
                    </motion.h2>
                    <motion.a className='text-center text-[20px] max-w-[75%] text-indigo-400 arrow-up'
                    variants={varMain}> 
                        <Link to={`${props.hrefA}`}>
                            {props.buttonA} <span>&uarr;</span>
                        </Link>
                    </motion.a>
                </motion.div>
                <motion.div className='h-[70vh] w-[100%] md:w-[33%] flex flex-col justify-start items-center bg-[rgb(20,20,20)]'
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:true, amount:0.3}}
                transition={{delayChildren:0.75, staggerChildren:0.15}}
                whileHover={{backgroundColor: "rgb(30,30,30)", transition: {duration: 0.5, ease: "linear"}}}
                >
                    <motion.img 
                    className="w-[90%] h-[60%] object-cover mx-[5%] my-[3vh]" 
                    src={props.imgB} alt="icon" 
                    variants={varMain}
                    />
                    <motion.h1 className='text-center text-blue-100 text-[28px] max-w-[75%] mb-[10px]'
                    variants={varMain}>
                        {props.titleB}
                    </motion.h1>
                    <motion.h2 className='text-center text-[16px] max-w-[75%] my-[5px]'
                    variants={varMain}>
                        {props.textB}
                    </motion.h2>
                    <motion.a className='text-center text-[20px] max-w-[75%] text-indigo-400 arrow-up'
                    variants={varMain}> 
                        <Link to={`${props.hrefB}`}>
                            {props.buttonB} <span>&uarr;</span>
                        </Link>
                    </motion.a>
                </motion.div>
                <motion.div className='h-[70vh] w-[100%] md:w-[33%] flex flex-col justify-start items-center bg-[rgb(20,20,20)]'
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:true, amount:0.3}}
                transition={{delayChildren:1.5, staggerChildren:0.15}}
                whileHover={{backgroundColor: "rgb(30,30,30)", transition: {duration: 0.5, ease: "linear"}}}
                >
                    <motion.img 
                    className="w-[90%] h-[60%] object-cover mx-[5%] my-[3vh]" 
                    src={props.imgC} alt="icon" 
                    variants={varMain}
                    />
                    <motion.h1 className='text-center text-blue-100 text-[28px] max-w-[75%] mb-[10px]'
                    variants={varMain}>
                        {props.titleC}
                    </motion.h1>
                    <motion.h2 className='text-center text-[16px] max-w-[75%] my-[5px]'
                    variants={varMain}>
                        {props.textC}
                    </motion.h2>
                    <motion.a className='text-center text-[20px] max-w-[75%] text-indigo-400 arrow-up'
                    variants={varMain}> 
                        <Link to={`${props.hrefC}`}>
                            {props.buttonC} <span>&uarr;</span>
                        </Link>
                    </motion.a>
                </motion.div>
            </div>
        </div>
    )
}

export default TripleCards