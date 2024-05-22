import React, { useEffect, useRef, useState } from 'react'
import Header from '../component/Header'
import Splash from '../component/Splash'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import audioFile from '../assets/images/Game-Checkpoint.mp3';
import audioFile1 from '../assets/images/audio/click.mp3';
import audioFile2 from '../assets/images/audio/Fail.mp3';
import audioFile3 from '../assets/images/audio/Win.mp3';
import ReactAudioPlayer from 'react-audio-player';
import Loader from '../component/Loader';
import Footer from '../component/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../store/counterSlice';


const Quiz = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [skipAns, setSkipAns] = useState({
        "title": "",
        "marks": 0,
        "skip": ""
    });
    const [imageList, setImageList] = useState(undefined);
    const [selectedOption, setSelectedOption] = useState();
    const [answerCheck, setAnswerCheck] = useState(undefined);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false);
    const audioRef = useRef(null);
    const audioRef1 = useRef(null);
    const audioRef2 = useRef(null);

    const [skipTiming, setSkipTiming] = useState(10);

    const steps = [
        {
            "_id": "0",
            "title": "What is the country where Elon Musk was born?",
            "image": "",
            "options": [
                { "_id": 0, "title": "USA", "marks": 10, "correct": true },
                { "_id": 1, "title": "Japan", "marks": 0, "correct": false },
                { "_id": 2, "title": "Paris", "marks": 0, "correct": false },
                { "_id": 3, "title": "UAE", "marks": 0, "correct": false }
            ]
        },
        {
            "_id": "1",
            "title": "Identify the person in the picture",
            "image": "https://praarthana.app/logo192.png",
            "options": [
                { "_id": 0, "title": "Jim Carrey", "marks": 10, "correct": false },
                { "_id": 1, "title": "Emma Watson", "marks": 0, "correct": true },
                { "_id": 2, "title": "Robert Downey", "marks": 0, "correct": false },
                { "_id": 3, "title": "Chris Evans", "marks": 0, "correct": false }
            ]
        },
        {
            "_id": "2",
            "title": "What is the capital city of Japan?",
            "image": "",
            "options": [
                { "_id": 0, "title": "Beijing", "marks": 10, "correct": false },
                { "_id": 1, "title": "Tokyo", "marks": 0, "correct": true },
                { "_id": 2, "title": "Seoul", "marks": 0, "correct": false },
                { "_id": 3, "title": "Bangkok", "marks": 0, "correct": false }
            ]
        },
        {
            "_id": "3",
            "title": "Which planet is known as the 'Red Planet?",
            "image": "",
            "options": [
                { "_id": 0, "title": "Venus", "marks": 10, "correct": false },
                { "_id": 1, "title": "Mars", "marks": 0, "correct": true },
                { "_id": 2, "title": "Jupiter", "marks": 0, "correct": false },
                { "_id": 3, "title": "Saturn", "marks": 0, "correct": false }
            ]
        },
        {
            "_id": "4",
            "title": "What is the value of sin^2(𝑥)+cos^2(𝑥), where x is any angle?",
            "image": "",
            "options": [
                { "_id": 0, "title": "1", "marks": 10, "correct": false },
                { "_id": 1, "title": "0", "marks": 0, "correct": true },
                { "_id": 2, "title": "2", "marks": 0, "correct": false },
                { "_id": 3, "title": "1/2", "marks": 0, "correct": false }
            ]
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);

    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setSkipTiming(prev => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);

    }, []);


    useEffect(() => {
        if (skipTiming === 0) {
            setCurrentStep(currentStep + 1);
            
            setSkipTiming(10)
            if ((currentStep + 1) == steps.length) {
                dispatch(setUser({ ...user, result: [...answers, skipAns] }));
                navigate('/result')
            }
            return;
        }
    }, [skipTiming])

    console.log('timer', skipTiming)

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.audioEl.current.play().catch((error) => {
                console.error('Audio playback failed on navigation:', error);
            });
        }
    }, [location]);

    const handleOptionSelect = async (option) => {
        setCurrentAnswer(option);
        setSelectedOption(option)
        setAnswers([...answers, option]);
        setSkipTiming(10);
        const audioPlayer = option.correct ? audioRef2.current : audioRef1.current;
        if (audioPlayer) {
            try {
                if (audioPlayer.audioEl.current.paused) {
                    await audioPlayer.audioEl.current.play();
                } else {
                    audioPlayer.audioEl.current.pause();
                }
            } catch (error) {
                console.error('Audio playback failed:', error);
            }
        }

        // setLoading(true)
        setTimeout(() => {
            setCurrentStep(currentStep + 1);
            setCurrentAnswer(null);
            setSelectedOption(null);
            if ((currentStep + 1) == steps.length) {
                dispatch(setUser({ ...user, result: [...answers, option] }));
                navigate('/result')
            }
            // setLoading(false)
        }, 1000)
    };



    return (
        <>
            {loading && <Loader />}
            <div className='audio_box'>
                <ReactAudioPlayer src={audioFile} ref={audioRef} controls />
                <ReactAudioPlayer src={audioFile2} ref={audioRef1} controls />
                <ReactAudioPlayer src={audioFile3} ref={audioRef2} controls />
            </div>

            <div className='home_page_section quiz_home_page_section'>
                <Header />
                <div className='quiz-page'>
                    <div className='Quiz_box'>
                        {currentStep < steps.length ? (
                            <>
                                <div className='quize_main_box'>
                                    <div className='audio_box'>
                                        <ReactAudioPlayer
                                            src={audioFile1}
                                            ref={audioRef}
                                            controls
                                        />
                                    </div>
                                    <div className='question_section'>
                                        <div className='skip_circle'>
                                            <svg viewBox="0 0 36 36" className="circular-chart">
                                                <path
                                                    className="circle-bg"
                                                    d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                                />
                                                <path
                                                    className="circle"
                                                    strokeDasharray={`${skipTiming * 10}, 100`}
                                                    d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                                />
                                            </svg>
                                            <span className='second_text'>{skipTiming}s</span>
                                        </div>
                                        <h3>Sports</h3>
                                        <h5>Stage 1 <span>(Beginner)</span></h5>
                                        <div className='question_progress'>
                                            <div className='question_progress_'>
                                                <div className='progress_line' style={{ width: `${((currentStep + 1) * 100) / steps?.length}%` }}></div>
                                            </div>
                                            <h5>{currentStep + 1}/{steps?.length}</h5>
                                        </div>
                                    </div>
                                    <div className='left_section'>
                                        <div className='question_box'>
                                            <div className='question_img'>
                                                {
                                                    steps[currentStep].image ? <img src={require('../assets/images/eema.jpg')} /> : <p className='question'>{steps[currentStep].title}</p>
                                                }

                                            </div>
                                            <div className='question_'>
                                                {
                                                    steps[currentStep].image !== "" ? <span>{steps[currentStep].title}</span> : null
                                                }
                                            </div>
                                        </div>
                                        <div className='answer_list'>
                                            {steps[currentStep].options.map((option, index) => (
                                                <>
                                                    {selectedOption ?
                                                        <>
                                                            {option?.correct ?
                                                                <button
                                                                    key={index}
                                                                    // onClick={() => handleOptionSelect(option)}
                                                                    className={option?.correct ? 'active' : ''}
                                                                >
                                                                    {option.title}
                                                                    <div className='answer_img'><img src={require('../assets/images/check-mark.png')} /></div>
                                                                </button>
                                                                :
                                                                <>
                                                                    {selectedOption?._id == option?._id ?
                                                                        <button
                                                                            key={index}
                                                                            // onClick={() => handleOptionSelect(option)}
                                                                            className={'incorrect'}
                                                                        >
                                                                            {option.title}
                                                                            <div className='answer_img'><img src={require('../assets/images/cross1.png')} /></div>
                                                                        </button>
                                                                        :
                                                                        <button
                                                                            key={index}
                                                                            // onClick={() => handleOptionSelect(option)}
                                                                            className={''}
                                                                        >
                                                                            {option.title}
                                                                        </button>
                                                                    }
                                                                </>
                                                            }
                                                        </>
                                                        :
                                                        <button
                                                            key={index}
                                                            onClick={() => handleOptionSelect(option)}
                                                        >
                                                            {option.title}
                                                        </button>
                                                    }
                                                </>
                                            ))}
                                        </div >
                                    </div>

                                </div>
                            </>
                        ) : null}
                    </div>
                </div>
            </div>
        </>
    );
};


export default Quiz;