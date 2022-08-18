import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {saveState} from './localStorage/localStorage';
import {debounce} from 'debounce'

// here we subscribe to the store changes
store.subscribe(
    // we use debounce to save the state once each 800ms
    // for better performances in case multiple changes occur in a short time
    debounce(() => {
        saveState(store.getState());
    }, 800)
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);

