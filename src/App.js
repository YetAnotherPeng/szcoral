import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { Switch, Route} from 'react-router-dom';
import Model from './pages/model'
import Coral1 from './pages/coral1'
import Coral2 from './pages/coral2'
import Coral3 from './pages/coral3'
import CoralAoke from './pages/coral_aoke'
import CoralTree from './pages/coral_tree'

class App extends Component {
  render() {
    return (
        <Switch>
            <Route path={"/szcoral/3d/model/:name"} exact component={Model}></Route>
            <Route path={"/szcoral/3d/coral1"} exact component={Coral1}></Route>
            <Route path={"/szcoral/3d/coral2"} exact component={Coral2}></Route>
            <Route path={"/szcoral/3d/coral3"} exact component={Coral3}></Route>
            <Route path={"/szcoral/3d/coral_aoke"} exact component={CoralAoke}></Route>
            <Route path={"/szcoral/3d/coral_tree"} exact component={CoralTree}></Route>
        </Switch>
    )
  }
}

export default App;
