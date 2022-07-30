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

import { GIT_LANG, WIN_SIZE, TABLET_SIZE, MODAL_BTN, TIMELINE } from "../actions/actionTypes"





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

const modal = (state = false, action) => {
  switch (action.type) {
    case MODAL_BTN:
      return action
    default:
      return state
  }
}
const timeline = (state = {}, action) => {
  console.log("action action", action)
  switch (action.type) {
    case TIMELINE:
      console.log(action, "Act")
      return {
        subject: action.subject,
        id: action.id
      }
    default:
      return state
  }
}

export { pros, wins, modal, timeline }
