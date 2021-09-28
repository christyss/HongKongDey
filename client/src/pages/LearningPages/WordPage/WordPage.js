import React, { Component } from 'react';
import axios from 'axios';
import WordComponent from '../../../components/Word/Word';

export class WordPage extends Component {
    state ={
      singleWord: null,
    }

    getWord = (wordId) =>{
      console.log(wordId);
      axios
        .get(`http://localhost:8080/learning/word/${wordId}`)
          .then(wordContent => {
            this.setState({
              singleWord: wordContent.data
            });
          })
          .catch((err) => {
            console.log(`Error from getWord ${err}`);
          });
    }
    
    componentDidMount(){
      const wordId = this.props.match.params.id

      if (wordId){
          this.getWord(wordId);
        }
    
    }

    componentDidUpdate(prevProps){
      console.log(this.props.match);
      if(this.props.match.params !== prevProps.match.params){
        const wordId = this.props.match.params.id
        this.getWord(wordId)
      }
      return
    
        
    }

    render() {
        return (
            <>
             {this.state.singleWord && <WordComponent wordInfo={this.state.singleWord} />}   
            </>
        )
    }
}

export default WordPage
