import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Splash from '../component/Splash'
import { Link } from 'react-router-dom';

export default function Home() {

    const [slide, setSlide] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setSlide(true)
        }, 4000)
    }, [])

    return (
        <>

            <div className='home_page_section'>
                <Header />
                <div className='home-page'>
                    <div className='category-section'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-lg-3 col-md-6 col-6'>
                                    <a href='#'>
                                        <div className='card_box'>
                                            <h4>Prizes</h4>
                                            <img src={require('../assets/images/quiz.png')} alt='quiz' />
                                        </div>
                                    </a>
                                </div>
                                <div className='col-lg-3 col-md-6 col-6'>
                                    <a href='#'>
                                        <div className='card_box'>
                                            <h4>Dashboard</h4>
                                            <img src={require('../assets/images/quiz.png')} alt='quiz' />
                                        </div>
                                    </a>
                                </div>
                                <div className='col-lg-3 col-md-6 col-6'>
                                    <a href='#'>
                                        <div className='card_box'>
                                            <h4>Winners</h4>
                                            <img src={require('../assets/images/quiz.png')} alt='quiz' />
                                        </div>
                                    </a>
                                </div>
                                <div className='col-lg-3 col-md-6 col-6'>
                                    <a href='#'>
                                        <div className='card_box'>
                                            <h4>Quiz</h4>
                                            <img src={require('../assets/images/quiz.png')} alt='quiz' />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='play_now'>
                                <Link to={"/quiz"} >Play Now</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
