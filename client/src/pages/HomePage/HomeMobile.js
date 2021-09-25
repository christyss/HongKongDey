<section className="home__mobile">
                    <div className="home__mobile-background">
                        <div className="title">
                            <h1 className="title-ch">香港地</h1>
                            <h2 className="title-en">Hong Kong Dey</h2>
                        </div>
                        <h3 className="learning-title">Learning Session</h3>
                        <div className="learning">
                            {/* <Link to={`/word`} className="learning-link" > */}
                                <Link to={`/learning/word`} className="learning-option">
                                <img className="learning-option__img" src={word} alt="" />
                                    <h4 className="learning-option__label">Word</h4> 
                                </Link>
                            {/* </Link> */}
                            <div className="learning-option">
                            <img className="learning-option__img" src={chat} alt="" />
                                <h4 className="learning-option__label">Daily Conversation</h4> 
                            </div>
                            <Link to={`/slang`} className="learning-option">
                            <img className="learning-option__img" src={slang} alt="" />
                                <h4 className="learning-option__label">Slang</h4> 
                            </Link>
                        </div>
                        <h3 className="game-title">Game</h3>
                        <div className="game">
                            <div className="game-option">
                            <img className="game-option__img" src={mc} alt="" />
                                <h4 className="game-option__label">Multiple Choice</h4> 
                            </div>
                            <div className="game-option">
                            <img className="game-option__img" src={matching} alt="" />
                                <h4 className="game-option__label">Matching</h4> 
                            </div>
                        </div>
                    </div>
                </section>