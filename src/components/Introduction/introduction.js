import './introduction.scss';
import { useState, useRef, useEffect } from 'react';
import { easeIn, easeInOut, motion } from 'framer-motion';
import Animated_Pic from '../../assets/images/Animated_Pic.png';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    const sentence1 = "  Hi, I'm Aleen";
    const [blinker, setBlinker] = useState(true);
    const [text1, setText1] = useState('');

    useEffect(() => {
        let index = 0;
        const typingInterval = setInterval(() => {
            setText1((prev) => prev + sentence1[index]);
          index++;
          if (index === sentence1.length-1) {
            setBlinker(false);
            clearInterval(typingInterval);
          }
        }, 100); // Adjust speed here (100ms per letter)
    
        return () => clearInterval(typingInterval);
      }, [sentence1]);

  return (
    <div>
        <div className='introduction'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
                <defs>
                    <linearGradient id="myGradient" gradientTransform="rotate(53)">
                        <stop offset="0%" stop-color="rgba(187,196,72,1)" />
                        <stop offset="100%" stop-color="rgba(0,0,0,1)" />
                    </linearGradient>
                </defs>
                <path d="M-5.047511,-5.888567q322.258824,0,250.00025,0l-50.00005,30.827463h-170.00017v169.172537l-30.00003,50c-.421281-193.771173.542388-253.282954,0-250Z" fill="url(#myGradient)" />
            </svg>
            <div className='name'>
                <div>
                    <motion.p className='typing'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                    >
                        {text1}<motion.span
                            animate={{ opacity: blinker ? [1, 0, 1] : 0 }}
                            transition={{
                                repeat: blinker ? Infinity : 0,
                                duration: 0.7, // Blinking speed
                                ease: 'easeInOut',
                            }}
                        >|</motion.span>
                    </motion.p>
                </div>
                <div>
                {!blinker ? <p className="typing">
                    <TypeAnimation 
                        sequence={[
                            " I Develop Websites", 
                            1000,
                            " I Develop Apps",
                            1000,
                            " I Develop Softwares",
                            1000
                        ]}
                        speed={30}
                        repeat={Infinity}
                    />
                </p> : <p></p>}
                </div>
            </div>
            <div className='photo'>
                {/* <div className="openBrac"><span>{"<"}</span></div> */}
                <motion.img src={Animated_Pic} />
                {/* <div className="closeBrac"><span>{">"}</span></div> */}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250">
                <defs>
                    <linearGradient id="myGradient" gradientTransform="rotate(53)">
                        <stop offset="0%" stop-color="rgba(187,196,72,1)" />
                        <stop offset="100%" stop-color="rgba(0,0,0,1)" />
                    </linearGradient>
                </defs>
                <path d="M-5.047511,-5.888567q322.258824,0,250.00025,0l-50.00005,30.827463h-170.00017v169.172537l-30.00003,50c-.421281-193.771173.542388-253.282954,0-250Z" fill="url(#myGradient)" />
            </svg>
        </div>
        <svg className="svg-curve" viewBox="0 0 1440 79" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 79C-100 79 218.416 23.165 693.5 23.165C1168.58 23.165 1487 79 1487 79V0H-100V79Z"></path>
        </svg>
    </div>
  )
}

export default Introduction;