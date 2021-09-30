import React from 'react';
import {Link} from 'react-router-dom';
import LeftArrow from '../../assets/icons/left-arrow.png';
import RightArrow from '../../assets/icons/right-arrow.png';
import './Slang.scss';

const Slang = ({slang}) => {
    return (
        <section className="slang-container">
            <div className="slang-navbar" >
               <Link to="/" className="slang-navbar__text">Home</Link> 
            </div>
            <div className="slang">
                <div className="slang-content">
                    <div className="slang-content__left">
                        <img className="slang-content__img" src={slang.image} alt="" />
                    </div>
                    <div className="slang-content__right">
                        <h2 className="slang-content__right-title">{slang.slangEng}</h2>
                        <p className="slang-content__right-description">{slang.description}</p>
                        <audio controls src={slang.audio} className="slang-content__audio" ><source src={slang.audio} type="audio/mpeg" /></audio>
                    </div>
                </div>
                <div className="cta">
                    <Link to={`/learning/slang/${slang.id - 1}`} className="cta__item"><img className="cta__img" src={LeftArrow} alt="" /></Link>
                    <Link to={`/learning/slang/${Number(slang.id) + 1}`} className="cta__item"><img className="cta__img" src={RightArrow} alt="" /></Link>
                </div>
            </div>
        </section>    
    )
}

export default Slang
