import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Splash from '../component/Splash'
import { Link } from 'react-router-dom';

export default function Cat() {



    return (
        <>

            <div className='home_page_section'>
                <Header />
                <div className='home-page'>
                    <div className='cat_header'>
                        <h3 className='cat_title'>Choose Category</h3>
                    </div>
                    <div className='category-section'>
                        <div className='container-fluid'>
                            <div className='row'>

                                <div className='col-lg-3 col-md-6 col-6'>
                                    <Link to='/leaderboard'>
                                        <div className='card_box'>

                                            <img src={require('../assets/images/sports.jpg')} alt='quiz' />
                                            <h4>Sports</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-lg-3 col-md-6 col-6'>
                                    <Link to='/dashboard'>
                                        <div className='card_box'>

                                            <img src={require('../assets/images/education.jpg')} alt='quiz' />
                                            <h4>Educational</h4>
                                        </div>
                                    </Link>
                                </div>
                                <div className='col-lg-3 col-md-6 col-6'>
                                    <a href='#'>
                                        <div className='card_box'>

                                            <img src={require('../assets/images/entertainment.jpg')} alt='quiz' />
                                            <h4>Entertainment</h4>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-lg-3 col-md-6 col-6'>
                                    <a href='#'>
                                        <div className='card_box'>

                                            <img src={require('../assets/images/science.jpg')} alt='quiz' />
                                            <h4>Technology</h4>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-lg-3 col-md-6 col-6'>
                                    <a href='#'>
                                        <div className='card_box'>

                                            <img src={require('../assets/images/history.jpg')} alt='quiz' />
                                            <h4>Literature</h4>
                                        </div>
                                    </a>
                                </div>
                                <div className='col-lg-3 col-md-6 col-6'>
                                    <a href='#'>
                                        <div className='card_box'>

                                            <img src={require('../assets/images/gk.jpg')} alt='quiz' />
                                            <h4>General Knowledge</h4>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='play_now'>
                                <Link to={"/quiz"} className='shine' >Play Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
