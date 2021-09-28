import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import slang from '../../../assets/images/slang1.jpeg';
import dim from '../../../assets/images/dim-sum.jpeg'
import './MultipleChoice.scss';

const MultipleChoice = () => {
    
    const [questions, setQuestions] = useState([]);
    

    useEffect(() => {
        axios
        .get("http://localhost:8080/game/multiplechoice")
        .then((res) => {
            console.log(res.data);
            setQuestions(res.data);
        })
        .catch((err) => {
            console.log(`Error from getQuestion ${err}`);
        })
    }, [])

    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const [currentIndex, setCurrentIndex] = useState(0);

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
    
    if(questions.length === 0){
        return (
        <div className="Loading-page">
            <div className="Loading-page__item">
              <p className="Loading-page__item--size">Loading</p>  
            </div>
        </div>)
       
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
        <section>
                <div>
            <div className="mc-container">
                <div className="mc-content">   
                    <h3 className="mc-content__text">{questions[currentIndex].questionText}</h3>
                    <img className="mc-content__img" src={questions[currentQuestion].image} alt="" />
                    <div className="mc-content__options">
                        <div className="mc-content__options-list">
                                {questions[currentQuestion].answerOptions.map((answerOpt) => (
                                <button key={answerOpt.answer} onClick={() => handleAnswerClick(answerOpt.isCorrect)} className="mc-content__options-list-cta"><p className="mc-content__options-list-cta-text">{answerOpt.answer}</p></button>
                            ))}
                        
                        </div>
                    </div>
                    <div>
                        <h4 className="mc-score">Your score for now is {score}/{questions.length}</h4>
                    </div>
                </div>
            </div></div>
            
        </section>  )}
        </section>
)}
export default MultipleChoice
