import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import getGitInfo from "./actions/index"
import styles from "./App.module.css"
import axios from "axios";
import { connect } from "react-redux"


function App({ dispatch }) {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 920) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }
  useEffect(() => {
    dispatch(getGitInfo());
    window.addEventListener("resize", handleResize);
  }, [])

  return (
    <div className={styles.App}>
      {
        !isMobile ?
          <Sidebar />
          :
          null
      }
      <Main />
    </div >
  );
}




export default connect()(App);
