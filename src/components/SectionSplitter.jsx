import React from 'react'
import { motion } from 'framer-motion'

const SectionSplitter = () => {
    return (
        <motion.div className='block h-[2px] w-[75vw] max-w-[900px] bg-white my-[30px]'
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.75, ease: "linear", delay: 0.5}}
        viewport={{once:true, amount:0.1}}
        >
        </motion.div>
    )
}

export default SectionSplitter