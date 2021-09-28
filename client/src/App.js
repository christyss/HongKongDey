import {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';
import Home from './pages/HomePage/HomePage';
import Word from './pages/LearningPages/WordPage/WordPage';
import Slang from './pages/LearningPages/SlangPage/SlangPage';
import MultipleChoice from './pages/GamePages/MultipleChoice/MultipleChoice';
import Matching from './pages/GamePages/MatchingPage/MatchingPage';
import Test from './pages/test/test';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/learning/word/:id" component={Word} />
          <Route path="/learning/dailyconversation/:id" />
          <Route path="/learning/slang/:id" component={Slang} />
          <Route path="/game/multiplechoice" component={MultipleChoice} />
          <Route path="/game/matching" component={Matching} />
          <Route path="/learning/word" exact component={Test} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
