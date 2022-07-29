import { combineReducers } from 'redux'
import { pros, wins, modal } from './pros'

const proApp = combineReducers({
  pros,
  wins,
  modal
})

export default proApp
