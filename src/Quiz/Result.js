import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Result() {

    const user = useSelector((state) => state.user.user);
    const [data, setData] = useState(undefined)
    const [correct, setCorrect] = useState(undefined)
    const percentage = 66;

    useEffect(() => {
        window.scrollTo(0, 0);
        setData(user)
        if (user) {
            // Filter the correct answers
            const correctAnswers = data?.result?.filter(answer => answer.correct);

            // Get the length of the correct answers
            const correctAnswersLength = correctAnswers?.length;
            setCorrect(correctAnswersLength)

            console.log('correctAnswersLength', correctAnswersLength, user); // Output: 2
        }
    }, [user]);



    return (
        <div className='result_page'>
            <Header />
            <div className='winning_page'>
                <div className='question_section'>
                    <h3>Sports</h3>
                    <h5>Stage 1 <span>(Beginner)</span></h5>
                    <div className='circle_progress_one'>
                        <div className='circle_progress'>
                            <CircularProgressbar
                                value={`${((correct) * 100) / data?.result?.length}`}
                                text={`${((correct) * 100) / data?.result?.length}%`}
                                styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.25,

                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',

                                    // Text size
                                    textSize: '20px',

                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,

                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',

                                    // Colors
                                    pathColor: `rgba(12, 54, 125, ${percentage / 100})`,
                                    textColor: '#000',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                })}
                            />

                        </div>
                    </div>
                    <div className='question_progress question_progress_result'>
                        {/* <div className='question_progress_'>
                            <div className='progress_line' style={{ width: `${((correct) * 100) / data?.result?.length}%` }}></div>
                        </div> */}
                        <h5 >Questions - {correct}/{data?.result?.length}</h5>
                    </div>
                </div>

                {/* <h2>Winner!</h2> */}
                <h5>Akash Bhardwaj</h5>
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
                <div className='play_now'>
                    <Link to={"/quiz"} className='btn-hover color-1' >Play Again</Link>
                </div>
            </div>
        </div>
    )
}
