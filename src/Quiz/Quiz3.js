import React, { useEffect, useRef, useState } from 'react'
import Header from '../component/Header'
import Splash from '../component/Splash'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import audioFile from '../assets/images/Game-Checkpoint-Sound.mp3';
import audioFile1 from '../assets/images/audio/click.mp3';
import audioFile2 from '../assets/images/audio/Fail.mp3';
import audioFile3 from '../assets/images/audio/Win.mp3';
import ReactAudioPlayer from 'react-audio-player';
import Loader from '../component/Loader';


const QuizStepBox = ({ step, question, options, onSelect, imageList, answerCheck }) => {
    const [selectedOption, setSelectedOption] = useState();
    const [selectAudion, setSelectAudion] = useState(undefined);

    const audioRef = useRef(null)

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        if (audioRef.current) {
            if (audioRef.current.audioEl.current.paused) {
                audioRef.current.audioEl.current.play();

            } else {
                audioRef.current.audioEl.current.pause();
            }
        }

    };






    return (
        <div className='quize_main_box'>
            <div className='audio_box'>
                <ReactAudioPlayer
                    src={audioFile1}
                    ref={audioRef}
                    controls
                />

            </div>
            <div className='question_section'>
                <h3>Sports</h3>
                <h5>Stage 1 <span>(Beginner)</span></h5>
                <div className='question_progress'>
                    <div className='question_progress_'>
                        <div className='progress_line'></div>
                    </div>
                    <h5>23/100</h5>
                </div>
            </div>
            <div className='left_section'>
                <div className='question_box'>
                    <div className='question_img'>
                        {/* <img src='https://plus.unsplash.com/premium_photo-1671482215376-f5dc225287cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8' /> */}
                        <p className='question'>Which planet is known as the "Red Planet?</p>
                    </div>
                    <div className='question_'>

                    </div>
                </div>
                <div className='answer_list'>
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionSelect(option?.isTrue)}
                        // className={selectedOption === option ? 'selected' : ''}
                        >
                            {option?.name}
                            {
                                answerCheck ?
                                    <>
                                        {
                                            option?.isTrue ? <div className='answer_img'><img src={require('../assets/images/check-mark.png')} /></div> : <div className='answer_img'><img src={require('../assets/images/cross.png')} /></div>
                                        }

                                    </>
                                    :
                                    null
                            }


                        </button>

                    ))}

                </div>
            </div>
            <div className='right_section'>
                {
                    imageList ? <img src={imageList} /> : null
                }

            </div>
        </div>
    );
};

export default function Quiz3() {

    const navigate = useNavigate();

    const location = useLocation()

    const [currentStep, setCurrentStep] = useState(1);
    const [answers, setAnswers] = useState([]);
    const [index, setIndex] = useState(0)
    const [imageList, setImageList] = useState(undefined);
    const [selectedOption, setSelectedOption] = useState();
    const [answerCheck, setAnswerCheck] = useState(undefined)
    const [loading, setLoading] = useState(false);
    const audioRef = useRef(null);
    const audioRef1 = useRef(null)
    const audioRef2 = useRef(null)



    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])

    const handleOptionSelect = (option) => {
        setAnswers([...answers, option]);
        setSelectedOption(option)
    };



    const audioFun = async () => {
        if (audioRef.current) {
            if (audioRef.current.audioEl.current.paused) {
                try {
                    await audioRef.current.audioEl.current.play();
                } catch (error) {
                    console.error('Audio playback failed:', error);
                }
            } else {
                audioRef.current.audioEl.current.pause();
            }
        }
    }
    // useEffect(() => {
    //     if (audioRef.current) {
    //         audioRef.current.audioEl.current.play().catch((error) => {
    //             console.error('Audio playback failed on navigation:', error);
    //         });
    //     }
    // }, [location]);

    const steps = [
        {
            id: 1,
            question: 'Which planet is known as the "Red Planet?',
            options: [{ name: 'Venus', isTrue: false }, { name: 'Mars', isTrue: true }, { name: 'Jupiter', isTrue: false }, { name: 'Saturn', isTrue: false }],

        }
    ];



    useEffect(() => {
        if (currentStep < steps.length) {
            setIndex(currentStep)
            setImageList(steps[index]?.img)

        }
    }, [])



    const handleNextStep = () => {

        // if (answers.length === currentStep) {
        //     if (currentStep < steps.length) {
        //         setCurrentStep(currentStep + 1);
        //     }
        // } else {

        //     alert("Please choose an option before proceeding.");
        // }
        // if (currentStep < steps.length) {
        //     setCurrentStep(currentStep + 1);

        //     setIndex(steps[currentStep + 1]?.id)
        //     setImageList(steps[index])

        // }

        setAnswerCheck(selectedOption)
        if (!selectedOption) {
            
            if (audioRef1.current) {
                if (audioRef1.current.audioEl.current.paused) {
                    audioRef1.current.audioEl.current.play();

                } else {
                    audioRef1.current.audioEl.current.pause();
                }
            }
        } else {

            if (audioRef2.current) {
                if (audioRef2.current.audioEl.current.paused) {
                    audioRef2.current.audioEl.current.play();

                } else {
                    audioRef2.current.audioEl.current.pause();
                }
            }
        }

        setLoading(true)

        if(answerCheck){
            setTimeout(() => {
                navigate('/quiz4')
            }, [1000])
        }else{
            setTimeout(() => {
                navigate('/quiz4')
            }, [1000])
        }

    };




    return (
        <>
            {
                loading ? <Loader /> : null
            }
            <div className='audio_box'>
                <ReactAudioPlayer
                    src={audioFile}
                    ref={audioRef}
                    controls
                />
                <ReactAudioPlayer
                    src={audioFile2}
                    ref={audioRef1}
                    controls
                />
                <ReactAudioPlayer
                    src={audioFile3}
                    ref={audioRef2}
                    controls
                />
            </div>

            <div className='home_page_section quiz_home_page_section'>
                <Header />
                <div className='quiz-page'>
                    {/* <div className='total_question'>
                        <h5 className=''>1/5</h5>
                    </div> */}
                    <div className='Quiz_box'>

                        {currentStep <= steps.length ? (
                            <>
                                <QuizStepBox
                                    step={currentStep}
                                    question={steps[currentStep - 1].question}
                                    options={steps[currentStep - 1].options}
                                    onSelect={handleOptionSelect}
                                    answerCheck={answerCheck}
                                // imageList={imageList}

                                />
                                <div className='button_group'>
                                    <button onClick={() => handleNextStep()} className='btn-hover color-1'>Next</button>
                                </div>
                            </>
                        ) : (
                            <div>
                                <h2>Quiz completed!</h2>
                                <p>Your answers: {answers.join(', ')}</p>
                            </div>
                        )}

                    </div>

                </div>

            </div>


        </>
    )
}
