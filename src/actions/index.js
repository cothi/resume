import { GIT_LANG } from "./actionTypes"

const setLang = text => (
  {
    type: GIT_LANG,
    text
  })


export default setLang
