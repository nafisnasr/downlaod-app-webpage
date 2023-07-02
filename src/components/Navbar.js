import React from 'react'
import DownloadBtn from './DownloadBtn'
import { ImDatabase } from "react-icons/im"

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className="left-side">
                <a href="#" className='nav-icon'><ImDatabase /></a>
                <a href="" className='nav-brand'>Gadgets</a>
            </div>
            <div className="center-side">
                <li className="nav-items active">Home</li>
                <li className="nav-items">About Us</li>
                <li className="nav-items">Contact Us</li>
                <li className="nav-items">info</li>
            </div>
            <div className="right-side">
                <DownloadBtn/>
            </div>
        </nav>
    )
}
