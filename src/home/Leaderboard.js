import React, { useRef, useState } from 'react'
import Header from '../component/Header'
import { Link, useNavigate } from 'react-router-dom'
import audioFile from '../assets/images/Game-Checkpoint-Sound.mp3';
import ReactAudioPlayer from 'react-audio-player';

export default function Leaderboard() {

    const audioRef = useRef(null);

    const navigate = useNavigate()

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
                            <h6>Hello !</h6>
                            <h5>Akash Bhardwaj</h5>
                        </div>
                        <div className='user_profile_box' onClick={()=>navigate('/profile-theme')}>
                            <img src={require('../assets/images/avatars/2.png')} />
                            <label><img src={require('../assets/images/pencil.png')} /></label>
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
                    </div>
                    <div className='cat_slide_box'>
                        <div className='cat_box_'>
                            <Link to='/leaderboard'>
                                <div className='card_box'>

                                    <img src={require('../assets/images/cat/games.png')} alt='quiz' />
                                    <div className='question_count'>
                                        <h4>Sports</h4>
                                        <span>200 Quiz</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='cat_box_'>
                            <Link to='/dashboard'>
                                <div className='card_box'>

                                    <img src={require('../assets/images/cat/edu.png')} alt='quiz' />
                                    <div className='question_count'>
                                        <h4>Educational</h4>
                                        <span>800 Quiz</span>
                                    </div>

                                </div>
                            </Link>
                        </div>
                        <div className='cat_box_'>
                            <a href='#'>
                                <div className='card_box'>

                                    <img src={require('../assets/images/cat/ent.png')} alt='quiz' />
                                    <div className='question_count'>
                                        <h4>Entertainment</h4>
                                        <span>900 Quiz</span>
                                    </div>

                                </div>
                            </a>
                        </div>
                        <div className='cat_box_'>
                            <a href='#'>
                                <div className='card_box'>

                                    <img src={require('../assets/images/cat/tech.png')} alt='quiz' />
                                    <div className='question_count'>
                                        <h4>Technology</h4>
                                        <span>1200 Quiz</span>
                                    </div>

                                </div>
                            </a>
                        </div>
                        <div className='cat_box_'>
                            <a href='#'>
                                <div className='card_box'>

                                    <img src={require('../assets/images/cat/lit.png')} alt='quiz' />
                                    <div className='question_count'>
                                        <h4>Literature</h4>
                                        <span>1100 Quiz</span>
                                    </div>

                                </div>
                            </a>
                        </div>
                        <div className='cat_box_'>
                            <a href='#'>
                                <div className='card_box'>

                                    <img src={require('../assets/images/cat/braingame.png')} alt='quiz' />
                                    <div className='question_count'>
                                        <h4>GK</h4>
                                        <span>500 Quiz</span>
                                    </div>

                                </div>
                            </a>
                        </div>
                        <div className='cat_box_'>
                            <a href='#'>
                                <div className='card_box'>

                                    <img src={require('../assets/images/cat/science.png')} alt='quiz' />
                                    <div className='question_count'>
                                        <h4>Science</h4>
                                        <span>1500 Quiz</span>
                                    </div>

                                </div>
                            </a>
                        </div>
                        <div className='cat_box_'>
                            <a href='#'>
                                <div className='card_box'>

                                    <img src={require('../assets/images/cat/news.png')} alt='quiz' />
                                    <div className='question_count'>
                                        <h4>News</h4>
                                        <span>1345 Quiz</span>
                                    </div>

                                </div>
                            </a>
                        </div>
                    </div>

                    <div className='category-section category_section_1'>
                        <div className='play_now'>
                            <Link to="/quiz" className='shine' >Play Now</Link>

                            {/* <ReactAudioPlayer
                                src={audioFile}
                                ref={audioRef}
                                controls
                            /> */}
                        </div>

                        <div className='container-fluid'>
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

                        </div>
                    </div>
                    <div className='inner_banner_section'>
                        <img src={require('../assets/images/facts.jpg')} alt='banner' />
                    </div>
                </div>
            </div>
        </div>
    )
}
