import React from 'react';
import './App.css';
import NavBar from './pages/NavBar';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GoalSetting from './pages/GoalSetting';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar></NavBar>
        <Container maxWidth={false}>
          <div className="container-fluid">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/goal-setting" component={GoalSetting}/>
            </Switch>
          </div>
        </Container>
      </div> 
    </Router>
  );
}

export default App;
