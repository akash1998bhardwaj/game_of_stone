import React, { useEffect } from 'react'
import Header from '../component/Header'

export default function Help() {

    
    useEffect(() => {
		window.scrollTo(0, 0);
		
	}, [])

    return (
        <div className='content_page'>
            <Header />
            <div className='content_page_design'>
                <p>Welcome to Game of Stones, where your knowledge is your most powerful weapon! If you find yourself needing assistance while playing the game, fear not! Here's a comprehensive guide to help you navigate through any challenges you may encounter:
                </p>
                <p><strong>Answering Questions:</strong></p>
                <p>Read each question carefully before selecting your answer. Take your time to consider all options before making your choice.</p>
                <p><strong>Hints:</strong></p>
                <p>If you're unsure about a question, use a hint to narrow down your options. Each hint will eliminate one incorrect answer, making it easier for you to make an informed decision.</p>
                <p>Categories:</p>
                <p>Play to your strengths by selecting your preferred categories. Focus on subjects you're knowledgeable about to maximize your chances of success.</p>
                <p><strong>Leaderboard:</strong></p>
                <p>Keep an eye on the leaderboard to track your progress and see how you stack up against other players. Aim to earn a spot among the top contenders by consistently answering questions correctly.</p>
                <p><strong>Feedback:</strong></p>
                <p>Have suggestions or encountered any issues while playing? We're here to help! Feel free to provide feedback or report any bugs, and our team will work diligently to address them.</p>
            </div>
        </div>
    )
}

