import React, { useEffect, useState, useRef } from 'react'
import Header from '../component/Header'
import Splash from '../component/Splash'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import audioFile from '../assets/images/audio/Game-Level-Start.mp3';
import ReactAudioPlayer from 'react-audio-player';
import confetti from 'canvas-confetti';
import Footer from '../component/Footer';

export default function QuizTypes() {





    return (
        <>

            <div className='home_page_section '>
                <Header />
                <div className='QuizeFormats_page'>
                    <div className='cat_header_1' >
                        <Link className='cat_title_new' to={"/leaderboard"}>
                            <img src={require('../assets/images/left-chevron1.png')} />
                            Quiz Types
                        </Link>
                    </div>
                    <div className='QuizeFormats_page_row'>
                        <div className='row'>
                            <div className='col-5 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>20/20</h5>
                                </div>
                            </div>
                            <div className='col-7 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Oneday </h5>
                                </div>
                            </div>
                            <div className='col-4 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Game-Based</h5>
                                </div>
                            </div>
                            <div className='col-8 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>One “O” One</h5>
                                </div>
                            </div>
                            <div className='col-7 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>50/50</h5>
                                </div>
                            </div>

                            <div className='col-5 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Power Score</h5>
                                </div>
                            </div>
                            <div className='col-6 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Monthly</h5>
                                </div>
                            </div>
                            <div className='col-6 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Daily</h5>
                                </div>
                            </div>

                            <div className='col-7 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Weekend</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>


        </>
    )
}
