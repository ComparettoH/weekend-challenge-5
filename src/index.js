import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//reducers here
const feedbackList = (state = [], action) => {
    console.log(`Hey!!! I'm a reducer y'all!!!`);
    if(action.type === 'SET_FEEDBACK_LIST'){
        console.log('feedback list has received payload:', action.payload)
        return action.payload
    }

    return state;
};

//store
const storeInstance = createStore(
    combineReducers({
        feedbackList,
    })
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
