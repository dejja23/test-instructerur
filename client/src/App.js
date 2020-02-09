import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Users from './Components/Users/Users';
import Photos from './Components/Photos/Photos';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/' component={Users} />
          <Route path='/photos/:id' component={Photos} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
