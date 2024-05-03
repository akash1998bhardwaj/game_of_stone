
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
            {/* <h2>Step {step}</h2> */}
            <div className='left_section'>
                <p className='question'>{question}</p>
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
                <img src={require('../assets/images/eema.jpg')} />
            </div>
        </div>
    );
};

export default function Quiz1() {

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
            id: 2,
            question: 'Identify the person in the picture',
            options: ['Jim Carrey', 'Emma Watson', 'Robert Downey', 'Chris Evans.'],
            
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
                        <h5 className=''>2/5</h5>
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
                                    <button onClick={()=>navigate('/quiz2')}>Next</button>
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
