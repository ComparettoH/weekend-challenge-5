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

function App() {

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
        <Route path="/">
            <p>Start Daily Reflection/Feedback</p>
            <Link to="/feeling">
            <button>Continue</button>
            </Link>
          </Route>

          <Route path="/feeling">
            <FeelingHow/>
          </Route>

          <Route path="/understanding">
            <UnderstandingHow />
          </Route>

          <Route path="/support">
            <SupportHow />
          </Route>

          <Route path="/comments">
            <CommentsToBeMade />
          </Route>

          <Route path="/Review">
            <ReviewSubmission />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>
          
        </div>
      </Router>
    </div>
  );
}

export default App;
