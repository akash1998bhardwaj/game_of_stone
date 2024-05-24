import React, { useEffect, useRef, useState } from 'react'
import Header from '../component/Header'
import { Link, useNavigate } from 'react-router-dom'
import audioFile from '../assets/images/audio/click.mp3';
import ReactAudioPlayer from 'react-audio-player';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from '../component/Footer';

export default function Home() {

    const audioRef = useRef(null);

    const [profile, setProfile] = useState(undefined)

    const navigate = useNavigate()
    useEffect(() => {
        let img = localStorage.getItem('user');
        console.log('user img', img)
        setProfile(img)
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])


    const playSoundBtn = async (item) => {
        if (audioRef.current) {
            if (audioRef.current.audioEl.current.paused) {
                try {
                    await audioRef.current.audioEl.current.play();
                    navigate(`${item}`)
                } catch (error) {
                    console.error('Audio playback failed:', error);
                }
            } else {
                audioRef.current.audioEl.current.pause();
            }
        }
    };

    return (
        <div className='dashboard_screen'>
            <div className='audio_box'>
                <ReactAudioPlayer
                    src={audioFile}
                    ref={audioRef}
                    controls
                />
            </div>
            <Header />
            <div className='dashboard_section'>

                <div className='leader_board'>
                    <div className='user_login_detail'>
                        <div className='user_profile_text' onClick={() => playSoundBtn('/profile-theme')}>
                            <h6>Hello ! <img src={require('../assets/images/edit.png')} /></h6>
                            <h5>Akash Bhardwaj</h5>
                        </div>
                        <div className='total_earned_box'>
                            <h5><img src={require('../assets/images/ranking.png')} />
                                <span>20</span>
                            </h5>

                        </div>
                    </div>
                    <div className='leader_board_header _leader_board_header_new'>
                        <ul>
                            <li>
                                <div className='board_header_t'>
                                    <img src={require('../assets/images/stone.png')} />

                                </div>
                                <div className='board_content'>
                                    <h6>Stones</h6>
                                    <p>Earned - 100</p>
                                    <p>Total - 500</p>
                                </div>

                            </li>
                            <li>
                                <div className='board_header_t'>
                                    <img src={require('../assets/images/question.png')} />

                                </div>
                                <div className='board_content'>
                                    <h6>Questions</h6>
                                    <p>Played - 100</p>
                                    <p>Remaining - 500</p>
                                </div>

                            </li>

                        </ul>
                        <div className='divider_line' />
                        <div className='row m-0'>
                            <div className='col-6' onClick={() => playSoundBtn('/leaderboard')}><div className='lead_card lead_card_new'><h5><span>Leaderboard</span></h5></div></div>
                            {/* <div className='col-4'><div className='lead_card'><h5>My Scores</h5></div></div> */}
                            <div className='col-6' onClick={() => playSoundBtn('/coins')}><div className='lead_card'><h5><span className='shine_1'>Buy Questions</span></h5></div></div>
                        </div>
                    </div>
                    <div className='three-button-section'>
                        <a href='javascript:void(0)' onClick={() => playSoundBtn('/prize')}><img src={require('../assets/images/prize.gif')} alt='quiz' /> Prizes</a>
                        <a href='javascript:void(0)' onClick={() => playSoundBtn('/winner')}><img src={require('../assets/images/winner.gif')} alt='quiz' /> Winners</a>
                        {/* <Link to={"/cat"}><img src={require('../assets/images/cat.png')} alt='quiz' /> Category</Link> */}
                    </div>

                    <div className='category-section category_section_1'>
                        <div className='play_now'>
                            <Link to="/quiz" className='btn-hover color-1 shine_1' >Play Now</Link>

                            {/* <ReactAudioPlayer
                                src={audioFile}
                                ref={audioRef}
                                controls
                            /> */}
                        </div>
                    </div>

                    <div className='cat_slide_box d-none'>
                        <div className='header_box'>
                            <h4 className='heading-5'>Category</h4>
                            <Link to={"/cat"}>View All</Link>
                        </div>
                        <div className='category_section'>
                            <Swiper
                                slidesPerView={1.8}
                                spaceBetween={5}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 10,
                                    },
                                    1024: {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                }}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className='p-0'>
                                        <div className='cat_card_box'>
                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/sports.png')} />
                                            </div>
                                            <h5>Sports</h5>
                                            <p>7 Stages<br />
                                                689 Questions</p>
                                            <div className='progre_bar_cat'>
                                                <div className='progres_bar_inner' style={{ width: '45%' }}>

                                                </div>
                                                <span>45%</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='p-0'>
                                        <div className='cat_card_box'>
                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/education.png')} />
                                            </div>
                                            <h5>Educational</h5>
                                            <p>4 Stages<br />
                                                389 Questions</p>
                                            <div className='progre_bar_cat'>
                                                {/* <div className='progres_bar_inner'>
                                                       
                                                    </div>
                                                     <span>40%</span> */}
                                                <button>Let's Play</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='p-0'>
                                        <div className='cat_card_box'>
                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/gk.png')} />
                                            </div>
                                            <h5>GK</h5>
                                            <p>8 Stages<br />
                                                789 Questions</p>
                                            <div className='progre_bar_cat'>
                                                <div className='progres_bar_inner' style={{ width: '60%' }}>

                                                </div>
                                                <span>60%</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='p-0'>
                                        <div className='cat_card_box'>
                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/ent.png')} />
                                            </div>
                                            <h5>Entertainment</h5>
                                            <p>5 Stages<br />
                                                546 Questions</p>
                                            <div className='progre_bar_cat'>
                                                <button>Let's Play</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='p-0'>
                                        <div className='cat_card_box'>
                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/tech.png')} />
                                            </div>
                                            <h5>Technnology</h5>
                                            <p>3 Stages<br />
                                                345 Questions</p>
                                            <div className='progre_bar_cat'>
                                                <button>Let's Play</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='p-0'>
                                        <div className='cat_card_box'>
                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/science.png')} />
                                            </div>
                                            <h5>Science</h5>
                                            <p>9 Stages<br />
                                                990 Questions</p>
                                            <div className='progre_bar_cat'>
                                                <div className='progres_bar_inner' style={{ width: '70%' }}>

                                                </div>
                                                <span>70%</span>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='p-0'>
                                        <div className='cat_card_box'>
                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/news.png')} />
                                            </div>
                                            <h5>News</h5>
                                            <p>7 Stages<br />
                                                689 Questions</p>
                                            <div className='progre_bar_cat'>
                                                <div className='progres_bar_inner' style={{ width: '45%' }}>

                                                </div>
                                                <span>45%</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='p-0'>
                                        <div className='cat_card_box'>
                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/lit.png')} />
                                            </div>
                                            <h5>Literature</h5>
                                            <p>4 Stages<br />
                                                389 Questions</p>
                                            <div className='progre_bar_cat'>
                                                {/* <div className='progres_bar_inner'>
                                                       
                                                    </div>
                                                     <span>40%</span> */}
                                                <button>Let's Play</button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>


                            </Swiper>
                        </div>
                    </div>

                    <div className='category-section category_section_1'>


                        <div className='inner_banner_section'>
                            <img src={require('../assets/images/facts.jpg')} alt='banner' />
                        </div>

                        {/* <div className='container-fluid mt-3'>
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

                        </div> */}
                    </div>
                    <div className='quize_fomate_two d-none'>
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={10}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 5,
                                    spaceBetween: 50,
                                },
                            }}
                            className="mySwiper"
                        >
                            <SwiperSlide onClick={() => navigate('/quize-formats')}>
                                <div className='card_quiz_b card_quiz_b_one'>
                                    <h4>Quiz Formats</h4>
                                    {/* <p>Multiple-Choice Questions,
                                        Fill-In-The-Blanks, Open-Ended Questions,
                                        True or False Maze, Picture Quiz..</p> */}
                                </div>
                            </SwiperSlide>
                            <SwiperSlide onClick={() => navigate('/quiz-types')}>
                                <div className='card_quiz_b card_quiz_b_two'>
                                    <h4>Quiz Types</h4>
                                    {/* <p>20/20 Quiz, Oneday Quiz, Weekend Quiz,
                                        Game-Based Quizzes, 50/50 Quiz, One “O” One,
                                        Power Score...
                                    </p> */}
                                </div>
                            </SwiperSlide>
                        </Swiper>


                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
