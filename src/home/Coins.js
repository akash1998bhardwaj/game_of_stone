import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Splash from '../component/Splash'
import { Link, useNavigate, useNavigation } from 'react-router-dom';

export default function Coins() {

    useEffect(() => {
		window.scrollTo(0, 0);
		
	}, [])

    
    return (
        <>

            <div className='home_page_section'>
                <Header />
                <div className='home-page'>
                    <div className='cat_header_1' >
                        <Link className='cat_title_new' to={"/leaderboard"}>
                            <img src={require('../assets/images/left-chevron1.png')} />
                            Buy Stones
                        </Link>
                    </div>
                    <div className='category-section category_section' >
                        <div className='container-fluid'>
                            <div className='row'>

                                <div className='col-6'>
                                    <Link to='/leaderboard'>
                                        <div className='card_box coin_box'>

                                            <img src={require('../assets/images/stone.png')} alt='quiz' />
                                            <div className='question_count'>
                                                <h4>100 Stons</h4>
                                                <span>10$</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6'>
                                    <Link to='/winner'>
                                        <div className='card_box coin_box'>

                                            <img src={require('../assets/images/stone.png')} alt='quiz' />
                                            <div className='question_count'>
                                                <h4>200 Stons</h4>
                                                <span>20$</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-6'>
                                    <a href='#'>
                                        <div className='card_box coin_box'>

                                            <img src={require('../assets/images/stone.png')} alt='quiz' />
                                            <div className='question_count'>
                                                <h4>500 Stons</h4>
                                                <span>18$</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-6'>
                                    <a href='#'>
                                        <div className='card_box coin_box'>

                                            <img src={require('../assets/images/stone.png')} alt='quiz' />
                                            <div className='question_count'>
                                                <h4>1000 Stons</h4>
                                                <span>100$</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-6'>
                                    <a href='#'>
                                        <div className='card_box coin_box'>

                                            <img src={require('../assets/images/stone.png')} alt='quiz' />
                                            <div className='question_count'>
                                                <h4>1000 Stons</h4>
                                                <span>100$</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-6'>
                                    <a href='#'>
                                        <div className='card_box coin_box'>

                                            <img src={require('../assets/images/stone.png')} alt='quiz' />
                                            <div className='question_count'>
                                                <h4>1000 Stons</h4>
                                                <span>100$</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            <div className='play_now'>
                                <Link to={"#"} className='btn-hover color-2' >Buy Now</Link>
                            </div>
                        </div>
                        <div className='inner_banner_section mt-3'>
                            <img src={require('../assets/images/facts.jpg')} alt='banner' />
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
