/* import { GIT_LANG } from "../actions/actionTypes"

const Stores = (state, action) => {
  switch (action.type) {
    case GIT_LANG:
      return {
        id: action.id,
        text: action.text
      }
  }
}

export default stores */

import { GIT_LANG, WIN_SIZE, TABLET_SIZE } from "../actions/actionTypes"



const initialState = {
  winSize: TABLET_SIZE
}


const pro = (state, action) => {
  switch (action.type) {
    case GIT_LANG:
      console.log("Action", action)
      return {
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const pros = (state = [], action) => {
  switch (action.type) {
    case GIT_LANG:
      return [
        action
      ]

    default:
      return state
  }
}

const wins = (state = TABLET_SIZE, action) => {
  switch (action.type) {
    case WIN_SIZE:
      console.log(state);
      return action.winSize


    default:
      return state
  }
}

export { pros, wins }
