import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div className='footer-section'>
            <footer>
                <div className='footer-links'>
                    <ul>
                        <li><Link to={"/leaderboard"}>Home</Link></li>
                        <li><Link to={"/how-to-play"}>How to Play</Link></li>
                        <li><Link to={"/help"}>Help</Link></li>
                        <li><Link to={"#"}>Terms</Link></li>
                        <li><Link to={"/coins"}>Buy Coins</Link></li>
                        
                    </ul>
                </div>
            </footer>
        </div>
    )
}
