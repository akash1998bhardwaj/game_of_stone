import React from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'

export default function Leaderboard() {
    return (
        <div className='dashboard_screen'>
            <Header />
            <div className='dashboard_section'>

                <div className='leader_board'>
                    <div className='user_login_detail'>
                        <h6>Hello !</h6>
                        <h5>Akash Bhardwaj</h5>
                    </div>
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
                    <div className='category-section'>
                        <div className='container-fluid'>
                            <div className='row'>

                                <div className='col-lg-3 col-md-6 col-4'>
                                    <Link to='/leaderboard'>
                                        <div className='card_box'>

                                            <img src={require('../assets/images/prize.png')} alt='quiz' />
                                            <h4>Prizes</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-lg-3 col-md-6 col-4'>
                                    <Link to='/how-to-play'>
                                        <div className='card_box'>

                                            <img src={require('../assets/images/game.png')} alt='quiz' />
                                            <h4>How to Play</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-lg-3 col-md-6 col-4'>
                                    <Link to='/winner'>
                                        <div className='card_box'>

                                            <img src={require('../assets/images/winner.png')} alt='quiz' />
                                            <h4>Winner</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-lg-3 col-md-6 col-4'>
                                    <Link to='/help'>
                                        <div className='card_box'>

                                            <img src={require('../assets/images/help.png')} alt='quiz' />
                                            <h4>Help</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-lg-3 col-md-6 col-4'>
                                    <a href='#'>
                                        <div className='card_box'>

                                            <img src={require('../assets/images/terms.png')} alt='quiz' />
                                            <h4>Terms</h4>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-lg-3 col-md-6 col-4'>
                                    <Link to='/cat'>
                                        <div className='card_box'>

                                            <img src={require('../assets/images/cat.png')} alt='quiz' />
                                            <h4>Category</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className='play_now'>
                                <Link to={"/quiz"} className='shine' >Play Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className='inner_banner_section'>
                        <img src={require('../assets/images/banner.jpg')} alt='banner' />
                    </div>
                </div>
            </div>
        </div>
    )
}
