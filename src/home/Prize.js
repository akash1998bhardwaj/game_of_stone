import React, { useEffect } from 'react'
import Header from '../component/Header'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

export default function Prize() {



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
                        <h4>Prize</h4>
                        {/* <h5></h5> */}
                    </div>
                    <div className='winner-page-section'>
                        <div className='row winner_user_box'>
                            <div className='col-6 '>
                                <div className='winner-user-card winner-user-card-prize'>
                                    <div className='winner-project prize-box_'>
                                        <h4>1</h4>
                                        <span>st</span>
                                    </div>
                                    <h4>Prize <img src={require('../assets/images/prize.gif')} /></h4>
                                    <h6>5000 USD $</h6>
                                </div>
                            </div>
                            <div className='col-6 '>
                                <div className='winner-user-card winner-user-card-prize'>
                                    <div className='winner-project prize-box_'>
                                        <h4>2</h4>
                                        <span>ed</span>
                                    </div>
                                    <h4>Prize <img src={require('../assets/images/prize.gif')} /></h4>
                                    <h6>3000 USD $</h6>
                                </div>
                            </div>
                            <div className='col-6 '>
                                <div className='winner-user-card winner-user-card-prize'>
                                    <div className='winner-project prize-box_'>
                                        <h4>3</h4>
                                        <span>rd</span>
                                    </div>
                                    <h4>Prize <img src={require('../assets/images/prize.gif')} /></h4>
                                    <h6>2000 USD $</h6>
                                </div>
                            </div>
                            <div className='col-6 '>
                                <div className='winner-user-card winner-user-card-prize'>
                                    <div className='winner-project prize-box_'>
                                        <h4>4</h4>
                                        <span>rd</span>
                                    </div>
                                    <h4>Prize <img src={require('../assets/images/prize.gif')} /></h4>
                                    <h6>500 USD $</h6>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
