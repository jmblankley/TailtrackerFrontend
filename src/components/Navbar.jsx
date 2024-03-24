import { useState } from 'react';
import logo from '../assets/logo.svg';
import calendarIcon from '../assets/calendar.svg'
import faqIcon from '../assets/question-circle.svg'
import infoIcon from '../assets/info-circle.svg'
import logoutIcon from '../assets/box-arrow-left.svg'
import accountIcon from '../assets/person.svg'
import '../styles/Navbar.css'
import whitelogo from '../assets/whitelogo.svg'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="Navbar container-fluid fixed-top shadow-sm">
            <div className="d-flex justify-content-between align-items-center p-4">
                <a href="/"><img src={logo} alt="logo" className='img-fluid'/></a>
                <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar1"></div>
                    <div className="bar3"></div>
                </div>
            </div>
            <div className={`menu-overlay shadow-lg ${isMenuOpen ? 'open' : ''}`}>
                <div className="menu-content">
                    <img src={whitelogo} alt="logo" className='p-3'/>
                    <ul className='align-items-center'>
                        <h2 className='d-flex align-items-center'><img src={calendarIcon} alt=""/><li><a href="/">Calendar</a></li></h2>
                        <h2 className='d-flex align-items-center'><img src={faqIcon} alt=""/><li><a href="/">FAQ</a></li></h2>
                        <h2 className='d-flex align-items-center'><img src={infoIcon} alt=""/><li><a href="/">Info</a></li></h2>                        
                        <h2 className='d-flex align-items-center'><img src={accountIcon} alt=""/><li><a href="/">Account</a></li></h2>
                        <h2 className='d-flex align-items-center'><img src={logoutIcon} alt=""/><li><a href="/">Logout</a></li></h2>
                        <h2><li><a href="/login">Login Page</a></li></h2>
                        <h2><li><a href="/event">Event Page</a></li></h2>
                        {/* Add more menu items as needed */}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
