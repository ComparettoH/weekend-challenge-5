import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
// Component imports
import { FeelingHow } from '../Feeling/Feeling';
import { UnderstandingHow } from '../Understanding/Understanding';
import { SupportHow } from '../Support/Support';
import { CommentsToBeMade } from '../Comments/Comments';
import { ReviewSubmission } from '../Review/Review';
import { Admin } from '../Admin/Admin';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  const history = useHistory()
  const reduxStore = useSelector(store => store)
  const count = useSelector(store => store.count)

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>

      <Router>
        <div>
        <Route exact path="/">
            <p>Start Daily Reflection/Feedback</p>
            <Link to="/feeling">
            <button>Continue</button>
            </Link>
          </Route>

          <Route exact path="/feeling">
            <FeelingHow/>
          </Route>

          <Route exact path="/understanding">
            <UnderstandingHow />
          </Route>

          <Route exact path="/support">
            <SupportHow />
          </Route>

          <Route exact path="/comments">
            <CommentsToBeMade />
          </Route>

          <Route exact path="/Review">
            <ReviewSubmission />
          </Route>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
