import axios from "axios";
import { GIT_LANG, WIN_SIZE, MODAL_BTN, TIMELINE } from "./actionTypes"

const setWin = (winSize) => {
  return {
    type: WIN_SIZE,
    winSize
  };
};


const setLang = (text) => {
  return {
    type: GIT_LANG,
    text
  };
};

const setModal = (e) => {
  return {
    type: MODAL_BTN,
    open: e
  };
}

const getGitInfo = () => {
  return (dispatch) => {
    axios.get("https://api.github.com/users/cothi/repos")
      .then(res => {
        const git_info = res.data;
        console.log("before", git_info)
        dispatch(setLang(git_info))
      })
  }
};


const setTimeline = (t) => {
  return {
    type: TIMELINE,
    subject: t.timeline,
    id: t.index,
  };
}





export { getGitInfo, setWin, setModal, setTimeline };
