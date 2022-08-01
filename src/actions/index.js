import axios from "axios";
import { GIT_LANG, WIN_SIZE, MODAL_BTN, TIMELINE, PROJECT_TYPE, LOCATION_TYPE } from "./actionTypes"

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
    modalType: e.modalType,
    open: e.open
  };
}

const getGitInfo = () => {
  return (dispatch) => {
    axios.get("https://api.github.com/users/cothi/repos")
      .then(res => {
        const git_info = res.data;
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



const setProject = (t) => {
  return {
    type: PROJECT_TYPE,
    pType: t.pType,
    name: t.name,
    getData: t.getData
  }
}

const setLocation = (t) => {
  return {
    type: LOCATION_TYPE,
    location: t.location
  }
}

export { getGitInfo, setWin, setModal, setTimeline, setProject, setLocation };
