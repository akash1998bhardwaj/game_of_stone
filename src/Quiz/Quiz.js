import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Splash from '../component/Splash'
import { Link, useNavigate } from 'react-router-dom';

const QuizStepBox = ({ step, question, options, onSelect, imageList }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className='quize_main_box'>
            <div className='question_section'>
                <h3>Cat : Sports</h3>
                <div className='question_progress'>
                    <div className='question_progress_'>
                        <div className='progress_line'></div>
                    </div>
                    <h5>4/100</h5>
                </div>
            </div>
            <div className='left_section'>
                <div className='question_box'>
                    <div className='question_img'>
                        <img src='https://plus.unsplash.com/premium_photo-1671482215376-f5dc225287cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8' />
                    </div>
                    <div className='question_'>
                        <p className='question'>{question}</p>
                    </div>
                </div>
                <div className='answer_list'>
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => handleOptionSelect(option)}
                            className={selectedOption === option ? 'selected' : ''}
                        >
                            {option}
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

export default function Quiz() {

    const navigate = useNavigate();

    const [currentStep, setCurrentStep] = useState(1);
    const [answers, setAnswers] = useState([]);
    const [index, setIndex] = useState(0)
    const [imageList, setImageList] = useState(undefined);

    const handleOptionSelect = (option) => {
        setAnswers([...answers, option]);
    };

    const steps = [
        {
            id: 1,
            question: 'In what country was Elon Musk born?',
            options: ['South Africa', 'India', 'Singapore', 'UAE'],

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
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);

            setIndex(steps[currentStep + 1]?.id)
            setImageList(steps[index])

        }
    };

    console.log('imageList', imageList)


    return (
        <>

            <div className='home_page_section quiz_home_page_section'>
                <Header />
                <div className='quiz-page'>
                    <div className='total_question'>
                        <h5 className=''>1/5</h5>
                    </div>
                    <div className='Quiz_box'>

                        {currentStep <= steps.length ? (
                            <>
                                <QuizStepBox
                                    step={currentStep}
                                    question={steps[currentStep - 1].question}
                                    options={steps[currentStep - 1].options}
                                    onSelect={handleOptionSelect}
                                    imageList={imageList}

                                />
                                <div className='button_group'>
                                    <button onClick={() => navigate('/quiz1')}>Next</button>
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
