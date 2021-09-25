import React, { Component } from 'react';
import HomeNav from '../../components/Header/HomeNav';
import {Link} from 'react-router-dom';
import chat from '../../assets/icons/chat-64.png';
import word from '../../assets/icons/word.svg';
import slang from '../../assets/icons/lol-3.png';
import mc from '../../assets/icons/mc.png';
import matching from '../../assets/icons/jigsaws.png';
import './HomePage.scss';

export class HomePage extends Component {
    render() {
        return (
            <section>
                <section className="home__desktop">
                    <HomeNav />
                    <div className="home__desktop-background">
                        <div className="title__desktop">
                            <h1 className="title__desktop-ch">香港地</h1>
                            <h2 className="title__desktop-en">Hong Kong Dey</h2>
                        </div>
                        <section className="learning-game">
                            <h3 className="learning-title__desktop">Learning Session</h3>
                            <div className="learning__desktop">
                                    <Link to={`/learning/word`} className="learning-option__desktop">
                                    <img className="learning-option__desktop-img" src={word} alt="" />
                                        <h4 className="learning-option__desktop-label">Word</h4> 
                                    </Link>
                                <div className="learning-option__desktop learning-option__desktop--space">
                                <img className="learning-option__desktop-img" src={chat} alt="" />
                                    <h4 className="learning-option__desktop-label">Conversation</h4> 
                                </div>
                                <Link to={`/learning/slang/1`} className="learning-option__desktop">
                                <img className="learning-option__desktop-img" src={slang} alt="" />
                                    <h4 className="learning-option__desktop-label">Slang</h4> 
                                </Link>
                            </div>
                            <h3 className="game__title-desktop">Exercises</h3>
                            <div className="game__desktop">
                                <Link to={`/game/multiplechoice`} className="game-option__desktop">
                                    <img className="game-option__desktop-img" src={mc} alt="" />
                                    <h4 className="game-option__desktop-label">Multiple<br /> Choice</h4> 
                                </Link>
                                <Link className="game-option__desktop">
                                    <img className="game-option__desktop-img" src={matching} alt="" />
                                    <h4 className="game-option__desktop-label">Matching</h4> 
                                </Link>
                            </div>
                        </section>
                    </div>
                </section>
            </section>
        )
    }
}

export default HomePage
