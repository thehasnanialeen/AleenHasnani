import React from 'react';
import './about_myself.scss';
import Section_Heading from '../Section_Heading/section_heading';
import { FaArrowDownLong } from "react-icons/fa6";
import Animated_Photo from '../../assets/images/Animated_Pic.png';
import Prize_In_Science from '../../assets/images/Price_In_Science.jpg';
import Science_Presidents_Medal from '../../assets/images/Science_Presidents_Medal.jpg';
import First_FarmForward from '../../assets/images/First_FarmForward.jpg';

const About_Myself = () => {

    const awardsList = [
        {
            title: "Faculty of Science Dean's Medal",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: Science_Presidents_Medal,
        },
        {
            title: "University Prize in Science",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: Prize_In_Science,
        },
        {
            title: "1st Place at 24 hour AgTech Startup Hackathon",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            image: First_FarmForward,
        },
    ]

    const openResume = () => {
        window.open('./Aleen_Hasnani_Resume.pdf', '_blank');
      };

    return (
        <div className="about-container">
            <Section_Heading title="About Me" />
            <div className="about-box">
                <div className="about-content">
                    <p>
                        Hey, my name is Aleen Hasnani! I’m a software developer with a passion for creating innovative solutions.
                        I specialize in full-stack development, but I’m always eager to explore new technologies and methodologies.
                        Outside of coding, I enjoy playing cricket and badminton, watching new movies or F1 races. 
                        I also love to travel and explore new places, and I’m always up for a new adventure! 
                        I enjoy diving into hackathons, experimenting with creative projects, and staying curious about the ever-evolving tech world.
                    </p>
                    <button className="resume" onClick={openResume}>Resume <FaArrowDownLong /></button>
                </div>
            </div>
            <div className="awards">
                <h3>Awards</h3>
                <div className="awards-list">
                    {awardsList.map((award, index) => {
                        return (
                            <div className="award" key={index}>
                                <div className="background-image" >
                                    <img src={award.image} alt="award" />
                                </div>
                                <div className="award-text">
                                    <h2>{award.title}</h2>
                                    <p>{award.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default About_Myself;