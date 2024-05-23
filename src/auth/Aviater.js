import React, { useEffect, useRef } from 'react'
import Header from '../component/Header'
import { Link } from 'react-router-dom'

import audioFile from '../assets/images/whistle.mp3';
import ReactAudioPlayer from 'react-audio-player';

import confetti from 'canvas-confetti';

export default function Aviater() {
    const audioRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

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
        const buttonElement = event.target;
        const nextSibling = buttonElement;

        if (nextSibling && nextSibling.tagName === 'IMG') {
            const imgSrc = nextSibling.getAttribute('src');
            console.log('Image URL:', imgSrc);
            localStorage.setItem('user', imgSrc)
        }
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
        setTimeout(() => {
            window.location.reload()
        }, 1000)


    };

    return (
        <div className='home_page_section'>
            <div className='audio_box'>
                <ReactAudioPlayer
                    src={audioFile}
                    ref={audioRef}
                    controls
                />
            </div>
            <Header />

            <div className='profile_picture_setting'>
                <Link className='cat_title_new cat_title_new_1' to={"/home"}>
                    <img src={require('../assets/images/left-chevron1.png')} />
                    Select Profile Picture
                </Link>

                <div className='profile_picture'>

                    <div className='conatiner-fluid'>
                        <div className='row'>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/1.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/2.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/3.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/4.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/5.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/6.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/7.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/8.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/9.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/10.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/11.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/12.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/13.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/14.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/15.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/16.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/17.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/18.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/19.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/20.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/21.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/22.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/23.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/24.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/25.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/26.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/6.png')} />
                                </div>
                            </div>
                            <div className='col-lg-4 col-3'>
                                <div className='picture_card' onClick={togglePlay}>
                                    <img src={require('../assets/images/avatars/9.png')} />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
