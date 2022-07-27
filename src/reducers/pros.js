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

import { GIT_LANG } from "../actions/actionTypes"




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
  console.log(GIT_LANG);
  switch (action.type) {
    case GIT_LANG:
      return [
        action
      ]
    default:
      return state
  }
}

export default pros
