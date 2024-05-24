import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer-section'>
            <footer>
                <div className='footer-links'>
                    <ul>
                        <li><Link to={"/home"}>Home</Link></li>
                        <li><Link to={"/leaderboard"}>Leaderboard</Link></li>
                        <li><Link to={"/coins"}>Buy Questions</Link></li>
                        
                    </ul>
                </div>
            </footer>
        </div>
    )
}
