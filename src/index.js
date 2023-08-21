import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//reducers here
const count = (state = 0, action) => {
    console.log(`Hey!!! I'm a reducer y'all!!!`);

    return state;
};

//store
const storeInstance = createStore(
    count
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>
);
