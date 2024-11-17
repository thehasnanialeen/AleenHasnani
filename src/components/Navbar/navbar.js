//Navbar
import './navbar.scss'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/AH_logo.png'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa6'
import {motion} from 'framer-motion'

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="nav-logo">
                <Link to="/">
                    <img src={Logo}></img>
                </Link>
            </div>
            <div className='nav-sections'>
                <Link to="/">
                    <motion.p
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                    >
                        home
                    </motion.p>
                </Link>
                <Link to="/">
                    <motion.p
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                    >
                        about
                    </motion.p>
                </Link>
                <Link to="/">
                    <motion.p
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                    >
                        projects
                    </motion.p>
                </Link>
                <Link to="/">
                    <motion.p
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                    >
                        contact
                    </motion.p>
                </Link>
            </div>
            <div className="nav-social">
                <Link to="https://www.linkedin.com/in/aleen-hasnani/" target="_blank">
                    <motion.div
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                    >
                        <FaLinkedin />
                    </motion.div>
                </Link>
                <Link to="https://github.com/thehasnanialeen" target="_blank">
                    <motion.div
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                    >
                        <FaGithub/>
                    </motion.div>
                </Link>
                <Link to="https://www.instagram.com/thehasnanialeen/" target="_blank">
                    <motion.div
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.9}}
                    >
                        <FaInstagram/>
                    </motion.div>
                </Link>
            </div>
        </header>
    )
};

export default Navbar;