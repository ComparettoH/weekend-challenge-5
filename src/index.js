import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//reducers here
//this reducer pulls ALL feedback from database (needed for admin functionality)
const feedbackList = (state = [], action) => {
    console.log(`Hey!!! I'm a reducer y'all!!!`);
    switch(action.type){
        case 'SET_FEEDBACK':
            return action.payload;
        case 'ADD_FEEDBACK':
            
        default:
        return state;
    }
};

// newfeedback reducer that tracks all stages of feedback
const newFeedback = (state = [], action) =>{
    console.log(`newFeedback testing!`)
    if (action.type === 'SET_FEELINGS'){
        //adding feelings rate
        return [...state, action.payload]
    }
    if (action.type === 'SET_UNDERSTANDING'){
        //adding understanding rate
        return [...state, action.payload]
    }
    if (action.type === 'SET_SUPPORT'){
        //adding support rate
        return [...state, action.payload]
    }
    if (action.type === 'SET_COMMENT'){
        //adding comment
        return [...state, action.payload]
    }
    return state;
}


//store
const storeInstance = createStore(
    combineReducers({
        feedbackList,
        newFeedback,
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
