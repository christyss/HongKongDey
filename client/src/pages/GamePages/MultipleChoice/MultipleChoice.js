import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import slang from '../../../assets/images/slang1.jpeg';
import dim from '../../../assets/images/dim-sum.jpeg'
import './MultipleChoice.scss'
;

export function MultipleChoice() {
    const questions = [
        {
            questionText : "Please select the correct answer below.",
            image: {slang},
            options: [
                {answer: "牛肉飯", isCorrect: false},
                {answer: "雞飯", isCorrect: false},
                {answer: "煲仔飯", isCorrect: true},
                {answer: "白飯", isCorrect: false}
            ]
        },
        {
            questionText : "Please select the correct answer.",
            image: {dim},
            options: [
                {answer: "點心", isCorrect: true},
                {answer: "同心", isCorrect: false},
                {answer: "愛心", isCorrect: false},
                {answer: "好心", isCorrect: false}
            ]
        }

    ]

    const [currentQuestion, setCurrentQuestion] = useState(0);

    const [showScore, setShowScore] = useState(false);

    const [score, setScore] = useState(0);

    const handleAnswerClick = (isCorrect) => {
        if(isCorrect === true){
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if(nextQuestion < questions.length){
            setCurrentQuestion(nextQuestion);
        }else{
            setShowScore(true)
        }
    }

    return (
        <section className="mc">
            {showScore ? (
                <section className="score-section">
                    <div className="score-section__background">
                        <div className="score">
                            <h3 className="score__text">You scored {score} out of {questions.length}</h3>
                            <Link to={`/`} className="score__link"><h3>Return Home</h3></Link>
                        </div>
                    </div>
                </section>
            ) : (
            
            <div className="mc-container">
                <div className="mc-content">
                    <h3>{questions[0].questionText}</h3>
                    <img className="mc-content__img" src={questions[0].image} alt="" />
                    <div className="mc-content__options">
                        <div className="mc-content__options-list">
                            {questions[currentQuestion].options.map((answerOpt) => 
                                <button onClick={() => handleAnswerClick(answerOpt.isCorrect)} className="mc-content__options-list-cta">{answerOpt.answer}</button>
                            )}
                        </div>
                    </div>
                    <div>
                        <h4>Your score for now is {score}/{questions.length}</h4>
                    </div>
                </div>
            </div>
            )}
        </section>
    )
}


export default MultipleChoice
