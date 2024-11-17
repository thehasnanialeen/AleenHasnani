import './introduction.scss';
import { useState, useRef, useEffect } from 'react';
import { easeIn, easeInOut, motion } from 'framer-motion';
import AH_Photo from '../../assets/images/AH_Photo.jpg';
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
        }, 100); // Adjust speed here (150ms per letter)
    
        return () => clearInterval(typingInterval);
      }, [sentence1]);

  return (
    <div className='introduction'>
        <div className='name'>
            <div>
                <motion.p className='typing'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    {text1}<motion.span
                        animate={{ opacity: blinker ? [1, 0, 1] : 0
                         }}
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
            <div className="openBrac"><span>{"<"}</span></div>
            <motion.img src={AH_Photo} />
            <div className="closeBrac"><span>{">"}</span></div>
        </div>
    </div>
  )
}

export default Introduction;