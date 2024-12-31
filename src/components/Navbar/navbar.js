//Navbar
import './navbar.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/AH_logo.png'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa6'
import {motion} from 'framer-motion'
import { i } from 'framer-motion/client'

const Navbar = () => {
    const sectionList=[
        {
            name: 'home',
            link: '/'
        },
        {
            name: 'about',
            link: '/about'
        },
        {
            name: 'projects',
            link: '/'
        },
        {
            name: 'contact',
            link: '/'
        }
    ];

    const socialList=[
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/aleen-hasnani/',
            icon: <FaLinkedin/>
        },
        {
            name: 'github',
            link: 'https://github.com/thehasnanialeen',
            icon: <FaGithub/>
        },
        {
            name: 'instagram',
            link: 'https://www.instagram.com/thehasnanialeen/',
            icon: <FaInstagram/>
        }
    ];
    return (
        <header className="navbar">
            <div className="nav-logo">
                <Link to="/">
                    <img src={Logo}></img>
                </Link>
            </div>
            <div className='nav-sections'>
                {sectionList.map((section, index) => (
                    <Link to={section.link}>
                        <motion.p
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                        >
                            {section.name}
                        </motion.p>
                    </Link>
                ))}
            </div>
            <div className="nav-social">
                {socialList.map((social, index) => (
                    <Link to={social.link} target="_blank">
                        <motion.div
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                        >
                            {social.icon}
                        </motion.div>
                    </Link>
                ))}
            </div>
        </header>
    )
};

export default Navbar;