import {combineReducers} from 'redux';
import {counterReducer} from './counter-reducer';
import {configureStore} from '@reduxjs/toolkit';
import {loadState} from '../localStorage/localStorage';

const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = configureStore({
    devTools:true,
    reducer: rootReducer,
    preloadedState: loadState()
})

export type AppRootStateType = ReturnType<typeof rootReducer>
