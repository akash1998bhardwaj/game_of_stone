import React, { useEffect, useRef, useState } from 'react'
import Header from '../component/Header'
import { Link, useNavigate } from 'react-router-dom'
import audioFile from '../assets/images/Game-Checkpoint-Sound.mp3';
import ReactAudioPlayer from 'react-audio-player';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from '../component/Footer';

export default function Leaderboard() {

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


    const togglePlay = async () => {
        if (audioRef.current) {
            if (audioRef.current.audioEl.current.paused) {
                try {
                    await audioRef.current.audioEl.current.play();
                    navigate('/quiz'); // Navigate to the quiz page when the audio starts playing
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
            <Header />
            <div className='dashboard_section'>

                <div className='leader_board'>
                    <div className='user_login_detail'>
                        <div className='user_profile_text'>
                            <h6>Hello ! <img src={require('../assets/images/edit.png')} /></h6>
                            <h5>Akash Bhardwaj</h5>
                        </div>
                        <div className='total_earned_box'>
                            <h5>Total stone earned</h5>
                            <span>1900</span>
                        </div>
                    </div>
                    <div className='leader_board_header'>
                        <ul>
                            <li>
                                <img src={require('../assets/images/rank.png')} />
                                <p>Rank</p>
                                <span>20</span>
                            </li>
                            <li>
                                <img src={require('../assets/images/stones.png')} />
                                <p>Stone</p>
                                <span>1200</span>
                            </li>
                            <li>
                                <img src={require('../assets/images/world.png')} />
                                <p>Score</p>
                                <span>300</span>
                            </li>
                        </ul>
                        <div className='divider_line' />
                        <div className='row m-0'>
                            <div className='col-4'><div className='lead_card'><h5>Leaderboard</h5></div></div>
                            <div className='col-4'><div className='lead_card'><h5>My Scores</h5></div></div>
                            <div className='col-4' onClick={() => navigate('/coins')}><div className='lead_card'><h5><span className='shine_1'>Buy Coins</span></h5></div></div>
                        </div>
                    </div>
                    <div className='three-button-section'>
                        <Link to={"#"}><img src={require('../assets/images/prize.png')} alt='quiz' /> Prizes</Link>
                        <Link to={"/winner"}><img src={require('../assets/images/winner.png')} alt='quiz' /> Winner</Link>
                        <Link to={"/cat"}><img src={require('../assets/images/cat.png')} alt='quiz' /> Category</Link>
                    </div>
                    <div className='quize_fomate_two'>
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
                    <div className='cat_slide_box'>
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
                        <div className='play_now'>
                            <Link to="/quiz" className='btn-hover color-1' >Play Now</Link>

                            {/* <ReactAudioPlayer
                                src={audioFile}
                                ref={audioRef}
                                controls
                            /> */}
                        </div>

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

                </div>
            </div>
            <Footer />
        </div>
    )
}
