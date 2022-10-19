import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counter-reducer';
import {loadState, saveState} from '../localStorage/localStorage';
import {debounce} from 'debounce';

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(
    // we use debounce to save the state once each 800ms
    // for better performances in case multiple changes occur in a short time
    debounce(() => {
        saveState(store.getState());
    }, 800)
);


export type AppRootStateType = ReturnType<typeof rootReducer>
