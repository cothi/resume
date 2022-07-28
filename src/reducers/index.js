import { combineReducers } from 'redux'
import { pros, wins } from './pros'

const proApp = combineReducers({
  pros,
  wins
})

export default proApp
