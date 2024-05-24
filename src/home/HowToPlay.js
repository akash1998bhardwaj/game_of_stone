import React, { useEffect } from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer';

export default function HowToPlay() {

    
    useEffect(() => {
		window.scrollTo(0, 0);
		
	}, [])

    return (
        <div className='content_page'>
            <Header />
            <div className='content_page_design'>
                <h4>How to Play</h4>
                <p>Welcome to Game of Stones, the ultimate quiz game where knowledge is your weapon and victory is your goal. In this thrilling battle of wits, you'll face off against challenging questions from various categories as you strive to claim the title of Quiz Champion. Here's how to play:</p>
                <h5>Objective:</h5>
                <p>The goal of Game of Stones is to answer as many questions correctly as possible to earn points and climb the leaderboard.</p>
                <p>Game of Stones features a variety of categories, including General Knowledge, Science, History, Movies & TV Shows, Sports, and more. Each category offers a different challenge, so be prepared for anything!</p>
                <p>If you're unsure about a question, use a hint to narrow down your options. Each hint will eliminate one incorrect answer, making it easier for you to make an informed decision.</p>
                <p><strong>Categories:</strong></p>
                <p>Play to your strengths by selecting your preferred categories. Focus on subjects you're knowledgeable about to maximize your chances of success.</p>
                <p><strong>Feedback:</strong></p>
                <p>Have suggestions or encountered any issues while playing? We're here to help! Feel free to provide feedback or report any bugs, and our team will work diligently to address them.</p>
                <p><strong>Answering Questions:</strong></p>
                <p>Read each question carefully and select the correct answer from the multiple-choice options provided.</p>
                <p>You'll earn points for every correct answer, so choose wisely and trust your instincts.</p>
                <p><strong>Leaderboard:</strong></p>
                <p>Keep track of your progress and compare your scores with friends and players from around the world on the global leaderboard. Aim for the top spot and prove your trivia prowess to the world!</p>
                <p><strong>Rewards and Achievements:</strong></p>
                <p>Earn rewards and unlock achievements as you conquer challenges and demonstrate your mastery of various subjects. Collect rare stones and showcase your achievements with pride.</p>
                <p><strong>Continuous Updates:</strong></p>
                <p>Stay tuned for regular updates and new features that will keep the game fresh and exciting. With new questions, challenges, and events added regularly, there's always something new to discover in the world of Game of Stones.</p>
                <p>Above all, remember to have fun! Whether you're playing to test your knowledge, challenge your friends, or simply pass the time, Game of Stones offers an immersive and entertaining trivia experience for players of all ages.
                    Now that you know the rules, it's time to embark on your epic journey to become the ultimate Quiz Champion. Are you ready to claim your place among the legends of Game of Stones? Let the quest for knowledge begin!</p>
            </div>
            <Footer />
        </div>
    )
}
