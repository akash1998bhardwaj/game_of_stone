import React from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'

export default function Result() {
    return (
        <div className='result_page'>
            <Header />
            <div className='winning_page'>
                <img src={require('../assets/images/victory.png')} />
                <h2>Winner!</h2>
                <h5>Akash Bhardwaj</h5>
                <div className='leader_board_header'>
                    <ul>
                        <li>
                            <p>Rank</p>
                            <span>20</span>
                        </li>
                        <li>
                            <p>Coins</p>
                            <span>1200</span>
                        </li>
                        <li>
                            <p>Score</p>
                            <span>300</span>
                        </li>
                    </ul>
                </div>
                <div className='play_now'>
                    <Link to={"/quiz"} className='shine' >Play Now</Link>
                </div>
            </div>
        </div>
    )
}
