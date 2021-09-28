import React, { Component } from 'react';
import axios from "axios";
import Slang from '../../../components/Slang/Slang';

export class SlangPage extends Component {
    state ={
        singleSlang: null,
    }

    getSlang = (slangId) =>{
        console.log(slangId);
        axios
          .get(`http://localhost:8080/learning/slang/${slangId}`)
            .then(slangContent => {
              this.setState({
                singleSlang: slangContent.data
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
      
      }

      componentDidUpdate(prevProps){
      
        if(this.props.match.params !== prevProps.match.params){
          const slangId = this.props.match.params.id
          this.getSlang(slangId)
        }
        return
      
          
      }

    render() {
      
        return (
            <>
               {this.state.singleSlang && <Slang slang={this.state.singleSlang} />}
            </>
        )
    }
}

export default SlangPage