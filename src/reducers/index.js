import { combineReducers } from 'redux'
import { pros, wins, modal, timeline, project } from './pros'

const proApp = combineReducers({
  pros,
  wins,
  modal,
  timeline,
  project
})

export default proApp
