import React, { useEffect, useState, useRef } from 'react'
import Header from '../component/Header'
import Splash from '../component/Splash'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import audioFile from '../assets/images/audio/Game-Level-Start.mp3';
import ReactAudioPlayer from 'react-audio-player';
import confetti from 'canvas-confetti';
import Footer from '../component/Footer';

export default function Cat() {

    const [cat, setCat] = useState(false)
    const [selectCat, setSelectCat] = useState(undefined)

    const navigator = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])


    const playBtn = () => {
        if (cat) {
            navigator('/quiz')
        } else {
            toast.error('Please select a category')
        }
    }


    const audioRef = useRef(null);

    const fire = (particleRatio, opts) => {
        confetti({
            ...opts,
            particleCount: Math.floor(200 * particleRatio),
        });
    };

    const confettiExplosion = (origin) => {
        fire(0.25, { spread: 26, startVelocity: 55, origin });
        fire(0.2, { spread: 60, origin });
        fire(0.35, { spread: 100, decay: 0.91, origin });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, origin });
        fire(0.1, { spread: 120, startVelocity: 45, origin });
    };

    const togglePlay = (event, item) => {
        setCat(true)
        setSelectCat(item)
        localStorage.setItem('imageClicked', 'true');

        const rect = event.target.getBoundingClientRect();

        console.log('rect', rect)
        const center = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        };
        const origin = {
            x: center.x / window.innerWidth,
            y: center.y / window.innerHeight,
        };

        if (audioRef.current) {
            if (audioRef.current.audioEl.current.paused) {
                audioRef.current.audioEl.current.play();

            } else {
                audioRef.current.audioEl.current.pause();
            }
        }
        confettiExplosion(origin);


    };


    return (
        <>
            <div className='audio_box'>
                <ReactAudioPlayer
                    src={audioFile}
                    ref={audioRef}
                    controls
                />
            </div>
            <div className='home_page_section'>
                <Header />
                <div className='home-page' style={{ alignItems: 'center' }}>
                    <div className='cat_header_1' >
                        <Link className='cat_title_new' to={"/leaderboard"}>
                            <img src={require('../assets/images/left-chevron1.png')} />
                            Category
                        </Link>
                    </div>
                    <div className='leader_board_header _leader_board_header'>

                        <div className='row m-0'>
                            <div className='col-4'><div className='lead_card'><h5>Leaderboard</h5></div></div>
                            <div className='col-4'><div className='lead_card'><h5>My Scores</h5></div></div>
                            <div className='col-4' onClick={() => navigator('/coins')}><div className='lead_card p-0'><h5><span className='shine_1'>Buy Coins</span></h5></div></div>
                        </div>
                    </div>
                    <div className='category-section category_section category_section_inner' >
                        <div className='container-fluid'>
                            <div className='row'>

                                <div className='col-6 p_r'>
                                    <div className={selectCat == 1 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className=' cat_card_box ' onClick={(e) => togglePlay(e, 1)}>

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

                                </div>
                                <div className='col-6 p_l'>
                                    <div className={selectCat == 2 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className='cat_card_box' onClick={(e) => togglePlay(e, 2)}>

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

                                </div>
                                <div className='col-6 p_r'>
                                    <div className={selectCat == 3 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className='cat_card_box' onClick={(e) => togglePlay(e, 3)}>
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

                                </div>
                                <div className='col-6 p_l'>
                                    <div className={selectCat == 4 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className='cat_card_box' onClick={(e) => togglePlay(e, 4)}>

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

                                </div>
                                <div className='col-6 p_r'>
                                    <div className={selectCat == 5 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className='cat_card_box' onClick={(e) => togglePlay(e, 5)}>

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
                                </div>
                                <div className='col-6 p_l'>
                                    <div className={selectCat == 6 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className='cat_card_box' onClick={(e) => togglePlay(e, 6)}>

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

                                </div>
                                <div className='col-6 p_r'>
                                    <div className={selectCat == 7 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className='cat_card_box' onClick={(e) => togglePlay(e, 7)}>

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

                                </div>
                                <div className='col-6 p_l'>
                                    <div className={selectCat == 8 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className='cat_card_box' onClick={(e) => togglePlay(e, 8)}>

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

                                </div>
                            </div>
                            <div className='play_now'>
                                <a href='javascript:void(0);' onClick={playBtn} className='btn-hover color-1' >Play Now</a>
                            </div>
                            <div className='inner_banner_section mt-3'>
                                <img src={require('../assets/images/facts.jpg')} alt='banner' />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>


        </>
    )
}
