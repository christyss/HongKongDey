import React, { Component } from 'react';
import './Word.scss';
import Button from '../../../components/Button/Button';
import DimSum from '../../../assets/images/dim-sum.jpeg';
import audio from '../../../assets/audio/dim-sum.mp3';

export class Word extends Component {
    render() {
        return (
            <section className="word">
                <div className="content">
                    <div className="content__left">
                        <h2 className="content__title-en">Dim Sum</h2>
                        <img className="content__img" src={DimSum} alt="" />
                        <h2 className="content__title-ch">點心</h2>
                        <h3 className="content__pronounce">dim1 sam2</h3>
                        
                    </div>
                    <div className="content__right">
                        <p className="content__description">Dim sum is a huge part of Hong Kong's unique heritage and cultural identity and therefore, also a big part of our diet. There’s everything from white tablecloth establishments housed inside luxury hotels to neighbourhood gems that are still rough-around-the-edges, but almost equal in quality.</p>
                        <div>
                           <audio controls ><source src={audio} type="audio/mpeg" /></audio> 
                        </div>
                        
                    </div>
                </div>
               <Button />
            </section>
        )
    }
}

export default Word
