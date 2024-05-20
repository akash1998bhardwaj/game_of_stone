import React, { useEffect, useState, useRef } from 'react'
import Header from '../component/Header'
import Splash from '../component/Splash'
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';
import audioFile from '../assets/images/audio/Game-Level-Start.mp3';
import ReactAudioPlayer from 'react-audio-player';
import confetti from 'canvas-confetti';

export default function Cat() {

    const [cat, setCat] = useState(false)

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

    const togglePlay = (event) => {
        setCat(true)
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
                            Select Category
                        </Link>
                    </div>
                    <div className='category-section category_section' >
                        <div className='container-fluid'>
                            <div className='row'>

                                <div className='col-6'>

                                    <div className='card_box' onClick={togglePlay}>

                                        <img src={require('../assets/images/cat/games.png')} alt='quiz' />
                                        <div className='question_count'>
                                            <h4>Sports</h4>
                                            <span>200 Quiz</span>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-6'>

                                    <div className='card_box' onClick={togglePlay}>

                                        <img src={require('../assets/images/cat/edu.png')} alt='quiz' />
                                        <div className='question_count'>
                                            <h4>Educational</h4>
                                            <span>800 Quiz</span>
                                        </div>

                                    </div>

                                </div>
                                <div className='col-6'>

                                    <div className='card_box' onClick={togglePlay}>

                                        <img src={require('../assets/images/cat/ent.png')} alt='quiz' />
                                        <div className='question_count'>
                                            <h4>Entertainment</h4>
                                            <span>900 Quiz</span>
                                        </div>

                                    </div>

                                </div>
                                <div className='col-6'>

                                    <div className='card_box' onClick={togglePlay}>

                                        <img src={require('../assets/images/cat/tech.png')} alt='quiz' />
                                        <div className='question_count'>
                                            <h4>Technology</h4>
                                            <span>1200 Quiz</span>
                                        </div>

                                    </div>

                                </div>
                                <div className='col-6'>

                                    <div className='card_box' onClick={togglePlay}>

                                        <img src={require('../assets/images/cat/lit.png')} alt='quiz' />
                                        <div className='question_count'>
                                            <h4>Literature</h4>
                                            <span>1100 Quiz</span>
                                        </div>

                                    </div>

                                </div>
                                <div className='col-6'>

                                    <div className='card_box' onClick={togglePlay}>

                                        <img src={require('../assets/images/cat/braingame.png')} alt='quiz' />
                                        <div className='question_count'>
                                            <h4>General Knowledge</h4>
                                            <span>500 Quiz</span>
                                        </div>

                                    </div>

                                </div>
                                <div className='col-6'>

                                    <div className='card_box' onClick={togglePlay}>

                                        <img src={require('../assets/images/cat/science.png')} alt='quiz' />
                                        <div className='question_count'>
                                            <h4>Science</h4>
                                            <span>1500 Quiz</span>
                                        </div>

                                    </div>

                                </div>
                                <div className='col-6'>

                                    <div className='card_box' onClick={togglePlay}>

                                        <img src={require('../assets/images/cat/news.png')} alt='quiz' />
                                        <div className='question_count'>
                                            <h4>News</h4>
                                            <span>1345 Quiz</span>
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

            </div>


        </>
    )
}
