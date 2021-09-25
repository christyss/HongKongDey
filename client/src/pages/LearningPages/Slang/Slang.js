import React, { Component } from 'react';
import axios from "axios";
import './Slang.scss';
import Button from '../../../components/Button/Button';
import slang from '../../../assets/images/slang1.jpeg';

export class Slang extends Component {
    state ={
        singleSlang: null,
    }

    getSlang = (slangId) =>{
        console.log(slangId);
        axios
          .get(`http://localhost:8080/learning/slang/${slangId}`)
            .then(slangContent => {
              this.setState({
                singleSlang: slangContent.data[0]
              });
            })
            .catch((err) => {
              console.log(`Error from getSlang ${err}`);
            });
      }
    
      componentDidMount(){
        const slangId = this.props.match.params.id

        if (slangId){
            this.getSlang(slangId);
          }
      
          return axios
            .get(`http://localhost:8080/learning/slang/${slangId}`)
              .then((slangResult) => {
                  console.log(slangResult);
                this.setState({
                    singleSlang: slangResult.data[0]
                });
              })
              .catch((err) => {
                console.log(`Error from getSingleSlang ${err}`);
              })
      }

    render() {
        return (
            <section className="slang">
                <div className="slang-content">
                    <div className="slang-content__left">
                        <img className="slang-content__img" src={slang} alt="" />
                    </div>
                    <div className="slang-content__right">
                        <h2 className="slang-content__right-title">{this.props.slangEng}</h2>
                        <p className="slang-content__right-description">How do a chicken and a duck communicate, you ask? Unsuccessfully. This phrase describes people who are unable to properly communicate with each other, whether due to language barriers or different values. No matter what is said, the chicken and duck just can’t seem to understand each other.</p>
                        <audio controls className="slang-content__audio" ><source></source> </audio>
                    </div>
                </div>
               <Button />
            </section>
        )
    }
}

export default Slang