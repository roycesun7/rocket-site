import React from 'react'
import introvideo from '../media/introvideo.mp4'
import {
    useViewportScroll,
    motion,
    useTransform, 
} from 'framer-motion';

const Landing = () => {
    const { scrollY } = useViewportScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 300]);
    return (
        <div className='relative bg-black overflow-hidden'>
            <motion.video autoPlay loop muted
            className='vvv h-[73vh] w-full object-cover'
            style={{ y: y1}}>
                <source src={introvideo} type="video/mp4"/>
            </motion.video> 
        </div>
    )
}

export default Landing