import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };
    const varUp = {
        onscreen: { opacity: 1, y: 0 },
        offscreen: { opacity: 0, y: 50 }
    }
    const varMain = {
        onscreen: { opacity: 1 },
        offscreen: { opacity: 0 }
    }
    return (
        <div className='h-[40vh] w-screen flex flex-col justify-center items-center bg-[rgb(50,50,50)] mt-[50px]'>
            <div className='h-[10vh] w-screen flex justify-around items-center bg-[rgb(30,30,30)]'>
                <motion.a className='text-center cursor-pointer arrow-up'
                onClick={scrollToTop}
                whileHover={{scale: 1.1, color: "rgb(92,107,192)"}}
                initial={"offscreen"}
                whileInView={"onscreen"}
                viewport={{once:true, amount:0.1}}
                transition={{ duration: 0.5, ease: [.35,.02,.27,.96] }}
                variants={varUp}
                >
                    Back to top <span>&uarr;</span>
                </motion.a>
            </div>
            <motion.div className='h-[30vh] w-screen'
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:true, amount:0.3}}
            transition={{ duration: 1.5, ease: [.35,.02,.27,.96] }}
            variants={varMain}
            >
                <div className='h-[30vh] w-screen max-w-[1100px] flex justify-center items-center'>
                    <div className='h-[30vh] w-[33%] flex flex-col justify-center items-center'>
                        <h1 className='w-[75%] max-w-[200px] text-[48px] text-center'>
                            Logo
                        </h1>
                        <div className='w-[75%] max-w-[200px] flex justify-center items-center m-0 p-0 pt-[1rem]'>
                            <SocialIcon url="https://twitter.com" />
                            <SocialIcon url="https://instagram.com" />
                            <SocialIcon url="https://youtube.com" />
                        </div>
                    </div>
                    <div className='h-[30vh] w-[33%] flex flex-col justify-center items-center'>
                        <h1 className='w-[75%] max-w-[300px] text-[24px] text-center mb-[1rem] text-blue-100'>
                            Join Us!
                        </h1>
                        <h1 className='w-[75%] max-w-[300px] text-[11px]'>
                            <i className='text-blue-100'>For students:</i> We meet in room E-2316 each Thursday with the ThinSAT Club. Come and talk to one of us! <br /><br />
                            <i className='text-blue-100'>For sponsors:</i> Express your interests through our <Link to="/" className='text-indigo-400'>contact</Link> page, we'll be happy to work with your company!
                        </h1>
                    </div>
                    <div className='h-[30vh] w-[33%] flex flex-col justify-center items-center'>
                        <h1 className='w-[75%] max-w-[250px] text-[10px]'>
                            &copy; Montgomery Rocketry Team, 2022<br/> <br/>
                            <span className='text-[rgb(120,120,120)]'> The Montgomery Rocketry Team is a student group acting independently from Montgomery High School. 
                            We take full responsibility for our actions and this website. </span>
                        </h1>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Footer