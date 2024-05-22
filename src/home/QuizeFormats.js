
import React, { useEffect, useState, useRef } from 'react'
import Header from '../component/Header'
import Splash from '../component/Splash'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import audioFile from '../assets/images/audio/Game-Level-Start.mp3';
import ReactAudioPlayer from 'react-audio-player';
import confetti from 'canvas-confetti';
import Footer from '../component/Footer';

export default function QuizeFormats() {





    return (
        <>

            <div className='home_page_section '>
                <Header />
                <div className='QuizeFormats_page'>
                    <div className='cat_header_1' >
                        <Link className='cat_title_new' to={"/leaderboard"}>
                            <img src={require('../assets/images/left-chevron1.png')} />
                            Quize Formats
                        </Link>
                    </div>
                    <div className='QuizeFormats_page_row'>
                        <div className='row'>
                            <div className='col-5 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Geography</h5>
                                </div>
                            </div>
                            <div className='col-7 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>General Knowledge</h5>
                                </div>
                            </div>
                            <div className='col-4 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Fun</h5>
                                </div>
                            </div>
                            <div className='col-8 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Mathematics</h5>
                                </div>
                            </div>
                            <div className='col-7 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>History</h5>
                                </div>
                            </div>

                            <div className='col-5 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Science</h5>
                                </div>
                            </div>
                            <div className='col-6 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Miscellaneous</h5>
                                </div>
                            </div>
                            <div className='col-6 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Modern Technology</h5>
                                </div>
                            </div>

                            <div className='col-7 padding_box'>
                                <div className='cat_card_text'>
                                    <img src={require('../assets/images/gk.png')} />
                                    <h5>Film & Television</h5>
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
