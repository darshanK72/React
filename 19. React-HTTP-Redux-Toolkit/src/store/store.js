import {configureStore} from '@reduxjs/toolkit';
import studentReducer from './student/student.slice';
import logger from 'redux-logger';

const store = configureStore({
    reducer:{
        students:studentReducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store;