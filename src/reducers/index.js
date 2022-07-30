import { combineReducers } from 'redux'
import { pros, wins, modal, timeline } from './pros'

const proApp = combineReducers({
  pros,
  wins,
  modal,
  timeline
})

export default proApp
