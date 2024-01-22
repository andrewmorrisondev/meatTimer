import { combineReducers } from '@reduxjs/toolkit'
import steakReducer from './steakReducer'

const reducers = combineReducers({
  steak: steakReducer
})

export default reducers