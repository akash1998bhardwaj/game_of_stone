import React, { useEffect } from 'react'
import Header from '../component/Header'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function Winner() {



    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.from('.scroll_box_right', {
            opacity: 0,
            x: 100,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.scroll_box_right',
                start: 'top 90%', // Start the animation when the top of the element hits 80% of the viewport height
                toggleActions: 'play none none none',
            },
        });

    })

    return (
        <div className='dashboard_screen dashboard_screen_winner'>
            <Header />
            <div className='dashboard_section'>
                <div className='dash_board'>
                    {/* <ul className='list_item'>
                        <li><button className='active'>All Time</button></li>
                        <li><button>Weekly</button></li>
                        <li><button>24 Hours</button></li>
                    </ul> */}
                    <div className='heading-leader-page'>
                        <h4>Winner List <span>(6 Months Contest)</span></h4>
                        {/* <h5></h5> */}
                    </div>
                    <div className='winner-page-section'>
                        <div className='row winner_user_box'>
                            <div className='col-4 '>
                                <div className='winner-user-card'>
                                    <div className='winner-project'>
                                        <img src={require('../assets/images/avatars/1.png')} />
                                    </div>
                                    <p>Alice</p>
                                    <span>Rank (20)</span>
                                    <h5>2<sup>nd</sup></h5>
                                    <h6>Win - $3000</h6>
                                </div>
                            </div>
                            <div className='col-4 '>
                                <div className='winner-user-card'>
                                    <div className='winner-project'>
                                        <img src={require('../assets/images/avatars/1.png')} />
                                    </div>
                                    <p>Alice</p>
                                    <span>Rank (30)</span>
                                    <h5>1<sup>st</sup></h5>
                                    <h6>Win - $5000</h6>
                                </div>
                            </div>
                            <div className='col-4 '>
                                <div className='winner-user-card'>
                                    <div className='winner-project'>
                                        <img src={require('../assets/images/avatars/1.png')} />
                                    </div>
                                    <p>Alice</p>
                                    <span>Rank (50)</span>
                                    <h5>3<sup>rd</sup></h5>
                                    <h6>Win - $2000</h6>
                                </div>
                            </div>
                        </div>
                        <div className='winer_user_list_box'>
                            <div className='winer_user_list'>
                                <div className='w-profile_img'>
                                    <img src={require('../assets/images/avatars/19.png')} />
                                </div>
                                <div className='w-user-content'>
                                    <h5>Akash Bhardwaj</h5>
                                    <span>$1234</span>
                                </div>
                                <div className='winner_rank'>
                                    <img src={require('../assets/images/rank.png')} />
                                    <span>20</span>
                                </div>
                            </div>
                            <div className='winer_user_list'>
                                <div className='w-profile_img'>
                                    <img src={require('../assets/images/avatars/19.png')} />
                                </div>
                                <div className='w-user-content'>
                                    <h5>Akash Bhardwaj</h5>
                                    <span>$4234</span>
                                </div>
                                <div className='winner_rank'>
                                    <img src={require('../assets/images/rank.png')} />
                                    <span>20</span>
                                </div>
                            </div>
                            <div className='winer_user_list'>
                                <div className='w-profile_img'>
                                    <img src={require('../assets/images/avatars/19.png')} />
                                </div>
                                <div className='w-user-content'>
                                    <h5>Akash Bhardwaj</h5>
                                    <span>$1534</span>
                                </div>
                                <div className='winner_rank'>
                                    <img src={require('../assets/images/rank.png')} />
                                    <span>20</span>
                                </div>
                            </div>
                            <div className='winer_user_list'>
                                <div className='w-profile_img'>
                                    <img src={require('../assets/images/avatars/19.png')} />
                                </div>
                                <div className='w-user-content'>
                                    <h5>Akash Bhardwaj</h5>
                                    <span>$3000</span>
                                </div>
                                <div className='winner_rank'>
                                    <img src={require('../assets/images/rank.png')} />
                                    <span>20</span>
                                </div>
                            </div>
                            <div className='winer_user_list'>
                                <div className='w-profile_img'>
                                    <img src={require('../assets/images/avatars/19.png')} />
                                </div>
                                <div className='w-user-content'>
                                    <h5>Akash Bhardwaj</h5>
                                    <span>$8000</span>
                                </div>
                                <div className='winner_rank'>
                                    <img src={require('../assets/images/rank.png')} />
                                    <span>20</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
