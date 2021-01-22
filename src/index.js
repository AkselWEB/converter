import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css';
import Home from './pages/Home';
import { Converter } from './pages/Converter';
import { PageContact } from './pages/Contact';
import {reportWebVitals} from './reportWebVitals';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/converter' component={Converter} />
        <Route exact path='/contact' component={PageContact} />
      </Switch>
    </Router>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root')
);

