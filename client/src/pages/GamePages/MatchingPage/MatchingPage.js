import React from 'react';
import puzzle from '../../../assets/icons/puzzle.png';
import './MatchingPage.scss';

function MatchingPage() {
    return (
        <>
        <section className="page">
            <h1 className="page-title">Matchie Matchie</h1>
            <div className="game-container">
                <div className="game-info-container">
                    <div className="game-info">
                        <p>Time <span id="time-remaining">60</span></p>
                        <p>Flips <span id="flips">0</span></p>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card visible">
                        <div className="card-back card-face">
                            <img className="card-item" src={puzzle} alt="" />
                        </div>
                        <div className="card-front card-face">
                            <h3>Happy</h3>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}

export default MatchingPage
