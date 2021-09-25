import {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';
// import Header from './components/Header/Header';
import Home from './pages/HomePage/HomePage';
import Word from './pages/LearningPages/Word/Word';
import Slang from './pages/LearningPages/Slang/Slang';
import MultipleChoice from './pages/GamePages/MultipleChoice/MultipleChoice';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
      {/* <Header /> */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learning/word" component={Word} />
          <Route path="/learning/dailyconversation/:id" />
          <Route path="/learning/slang/:id" component={Slang} />
          <Route path="/game/multiplechoice" component={MultipleChoice} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
