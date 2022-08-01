import { combineReducers } from 'redux'
import { pros, wins, modal, timeline, project, location } from './pros'

const proApp = combineReducers({
  pros,
  wins,
  modal,
  timeline,
  project,
  location
})

export default proApp
