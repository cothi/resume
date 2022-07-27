import axios from "axios";
import { GIT_LANG } from "./actionTypes"

const setLang = (text) => {
  console.log("tt", text);
  return {
    type: "GIT_LANG",
    text
  };
};

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




export default getGitInfo;
