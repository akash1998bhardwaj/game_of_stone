import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import Splash from '../component/Splash'
import { Link } from 'react-router-dom';

const QuizStepBox = ({ step, question, options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className='Quiz_box'>
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
                            <span className={selectedOption === option ? 'active' : ''}></span> {option}
                        </button>
                    ))}
                </div>
            </div>
            <div className='right_section'>
                <img src='https://static.toiimg.com/thumb/imgsize-90062,msid-102317292,width-600,resizemode-4/100444019.jpg' />
            </div>
        </div>
    );
};

export default function Quiz() {

    const [currentStep, setCurrentStep] = useState(1);
    const [answers, setAnswers] = useState([]);

    const handleOptionSelect = (option) => {
        setAnswers([...answers, option]);
        setCurrentStep(currentStep + 1);
    };

    const steps = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'Berlin', 'London', 'Rome'],
        },
        {
            question: 'What size of shirts/tops/kurtas do you usually wear?',
            options: ['Small', 'Medium', 'Large', 'XL or More'],
        },
        {
            question: 'Can you tell us your level of job-related stress?',
            options: ['Minimal', 'Intermittent', 'Stressful', 'Under duress'],
        },
        {
            question: 'How often do you eat food from outside your home?',
            options: ['Never', 'Occasional', 'Often', 'Every Day'],
        },
        // Add more steps here
    ];




    return (
        <>

            <div className='home_page_section'>
                <Header />
                <div className='quiz-page'>

                    {currentStep <= steps.length ? (
                        <>
                            <QuizStepBox
                                step={currentStep}
                                question={steps[currentStep - 1].question}
                                options={steps[currentStep - 1].options}
                                onSelect={handleOptionSelect}
                            />
                            <div className='button_group'>
                                <button>
                                    <img src={require('../assets/images/left-chevron.png')} alt='' />
                                </button>
                                <button>
                                    <img src={require('../assets/images/right-arrow.png')} alt='' />
                                </button>
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


        </>
    )
}
