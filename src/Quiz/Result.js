import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Result() {

    const user = useSelector((state) => state.user.user);
    console.log('user', user)
    const [data, setData] = useState(undefined)
    const [correct, setCorrect] = useState(undefined)
    const [skip, setSkip] = useState(undefined)
    const [incorrect, setIncorrect] = useState(undefined)
    const [color, setColor] = useState(undefined)
    const percentage = 66;

    useEffect(() => {
        window.scrollTo(0, 0);

        if (user) {
            setData(user)
            // Filter the correct answers
            const correctAnswers = user?.result?.filter(answer => answer.correct === true);

            // Filter incorrect answers
            const incorrectAnswers = user?.result?.filter(answer => answer.correct === false);

            // Filter skipped answers (undefined or empty objects)
            const skippedAnswers = user?.result?.filter(answer => answer?.skip === '' );

            // Get lengths of each category
            const correctAnswersLength = correctAnswers?.length;
            const incorrectAnswersLength = incorrectAnswers?.length;
            const skippedAnswersLength = skippedAnswers?.length;
            setCorrect(correctAnswersLength);
            setIncorrect(incorrectAnswersLength)
            setSkip(skippedAnswersLength)

            const percent = ((correctAnswersLength ? correctAnswersLength : 0) * 100) / user?.result?.length;

            if (percent >= 80) {
                setColor('green')
            } else if (percent >= 40 && percent < 80) {
                setColor('orange')
            } else if (percent < 40) {
                setColor('red')
            }

        }
    }, [user]);



    return (
        <div className='result_page'>
            <Header />
            <div className='winning_page'>
                <div className='question_section' style={{ backgroundColor: color }}>

                    <h5>Stage 1</h5>
                    <h3>GAME OVER</h3>
                    <div className='circle_progress_one'>
                        <div className='circle_progress'>
                            <CircularProgressbar
                                value={`${((correct ? correct : 0) * 100) / data?.result?.length}`}
                                text={`${((correct ? correct : 0) * 100) / data?.result?.length}%`}
                                styles={buildStyles({
                                    // Rotation of path and trail, in number of turns (0-1)
                                    rotation: 0.25,

                                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                    strokeLinecap: 'butt',

                                    // Text size
                                    textSize: '25px',

                                    // How long animation takes to go from one percentage to another, in seconds
                                    pathTransitionDuration: 0.5,

                                    // Can specify path transition in more detail, or remove it entirely
                                    // pathTransition: 'none',

                                    // Colors
                                    pathColor: `#fff`,
                                    textColor: '#fff',
                                    trailColor: '#d6d6d6',
                                    backgroundColor: '#3e98c7',
                                })}
                            />
                            <h5 >{correct ? correct : 0}/{data?.result?.length}</h5>

                        </div>

                    </div>
                    <div className='total_coins_earn'>
                        <h6>
                            Total earn  <span>5 coins
                                <img src={require('../assets/images/stone.png')} />

                            </span>
                        </h6>
                    </div>
                    <div className='answers_board'>
                        <ul>
                            <li>
                                <p>Right</p>
                                <h5>{correct}</h5>
                            </li>
                            <li>
                                <p>Wrong</p>
                                <h5>{incorrect}</h5>
                            </li>
                            <li>
                                <p>Skip</p>
                                <h5>{skip}</h5>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* <h2>Winner!</h2> */}
                {/* <h5>Akash Bhardwaj</h5> */}

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
