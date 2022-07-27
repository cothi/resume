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
  console.log(action.type);
  switch (action.type) {
    case GIT_LANG:
      return {
        text: action.text,
        completed: false
      }
    default:
      return state
  }
}

const pros = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case GIT_LANG:
      return [
        pro(undefined, action)
      ]

    default:
      return state
  }
}

export default pros
