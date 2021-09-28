import React from 'react';
import {Link} from 'react-router-dom';
import LeftArrow from '../../assets/icons/previous.png';
import RightArrow from '../../assets/icons/next.png';
import './Word.scss';

const Word = ({wordInfo}) => {
    return (
        <section className="word">
            <Link to="/" className="word-navbar">Home</Link>
            <div className="content">
                <div className="content__left">
                    <h2 className="content__title-en">{wordInfo.wordEn}</h2>
                    <img className="content__img" src={wordInfo.image} alt="" />
                    <h2 className="content__title-ch">{wordInfo.wordCh}</h2>
                    <h3 className="content__pronounce">{wordInfo.wordPronounce}</h3>
                    
                </div>
                <div className="content__right">
                    <p className="content__description">{wordInfo.description}</p>
                    <div>
                    <audio controls className="content__audio" ><source src={wordInfo.audio} type="audio/mpeg" /></audio> 
                    </div>
                    
                </div>
            </div>
            <div className="cta-words">
                <Link to={`/learning/word/${wordInfo.id - 1}`} className="cta-words__item">
                    <img className="cta-words__img" src={LeftArrow} alt="" />
                </Link>
                <Link to={`/learning/word/${Number(wordInfo.id) + 1}`} className="cta-words__item">
                    <img className="cta-words__img" src={RightArrow} alt="" />
                </Link>
            </div>
        </section>
        
    )
}

export default Word

