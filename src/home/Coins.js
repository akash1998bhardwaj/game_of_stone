import React, { useEffect, useRef, useState } from 'react'
import Header from '../component/Header'
import Splash from '../component/Splash'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import audioFile from '../assets/images/audio/Game-Level-Start.mp3';
import ReactAudioPlayer from 'react-audio-player';
import confetti from 'canvas-confetti';
import Footer from '../component/Footer';

export default function Coins() {

    const [cat, setCat] = useState(false)
    const [selectCat, setSelectCat] = useState(undefined)
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    const playBtn = () => {
        if (cat) {
            navigator('/quiz')
        } else {
            toast.error('Please buy coins')
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
                <div className='home-page'>
                    <div className='cat_header_1' >
                        <Link className='cat_title_new' to={"/leaderboard"}>
                            <img src={require('../assets/images/left-chevron1.png')} />
                            Buy Stons
                        </Link>
                    </div>
                    <div className='category-section category_section category_section_inner' >
                        <div className='container-fluid'>
                            <div className='row'>

                                <div className='col-6 p_r'>
                                    <div className={selectCat == 1 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className=' cat_card_box ' onClick={(e) => togglePlay(e, 1)}>

                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/stone.png')} />
                                            </div>
                                            <h5>100 Stons</h5>
                                            <p className='coins_text'><span>10$</span> <br />8$</p>

                                        </div>
                                    </div>

                                </div>
                                <div className='col-6 p_r'>
                                    <div className={selectCat == 2 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className=' cat_card_box ' onClick={(e) => togglePlay(e, 2)}>

                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/stone.png')} />
                                            </div>
                                            <h5>400 Stons</h5>
                                            <p className='coins_text'><span>80$</span> <br />50$</p>

                                        </div>
                                    </div>

                                </div>
                                <div className='col-6 p_r'>
                                    <div className={selectCat == 3 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className=' cat_card_box ' onClick={(e) => togglePlay(e, 3)}>

                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/stone.png')} />
                                            </div>
                                            <h5>100 Stons</h5>
                                            <p className='coins_text'><span>10$</span> <br />8$</p>

                                        </div>
                                    </div>

                                </div>
                                <div className='col-6 p_r'>
                                    <div className={selectCat == 4 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className=' cat_card_box ' onClick={(e) => togglePlay(e, 4)}>

                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/stone.png')} />
                                            </div>
                                            <h5>400 Stons</h5>
                                            <p className='coins_text'><span>100$</span> <br />40$</p>

                                        </div>
                                    </div>

                                </div>
                                <div className='col-6 p_r'>
                                    <div className={selectCat == 5 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className=' cat_card_box ' onClick={(e) => togglePlay(e, 5)}>

                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/stone.png')} />
                                            </div>
                                            <h5>600 Stons</h5>
                                            <p className='coins_text'><span>150$</span> <br />100$</p>

                                        </div>
                                    </div>

                                </div>
                                <div className='col-6 p_r'>
                                    <div className={selectCat == 6 ? 'darksoul-glowing-button1 active' : 'darksoul-glowing-button1'}>
                                        <div className=' cat_card_box ' onClick={(e) => togglePlay(e, 6)}>

                                            <div className='img_icon_with_cat'>
                                                <img src={require('../assets/images/stone.png')} />
                                            </div>
                                            <h5>350 Stons</h5>
                                            <p className='coins_text'><span>60$</span> <br />40$</p>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='play_now'>
                                <a href='javascript:void(0);' onClick={playBtn} className='btn-hover color-1' >Buy Now</a>
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
