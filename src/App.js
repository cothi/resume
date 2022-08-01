import { useEffect } from "react";
import React from 'react';

import Sidebar from "./components/Sidebar"
import Main from "./containers/Main"
import { getGitInfo, setWin } from "./actions/index"
import { MOBILE_SIZE, PC_SIZE, TABLET_SIZE } from "./actions/actionTypes"
import styles from "./App.module.css"
import { connect } from "react-redux"
import ModalCom from "./containers/ModalCom"




function App({ dispatch, winSize }) {
  const handleResize = () => {
    if (window.innerWidth < 720) {
      dispatch(setWin(MOBILE_SIZE));
    } else if (window.innerWidth < 1020) {
      dispatch(setWin(TABLET_SIZE))
    } else {
      dispatch(setWin(PC_SIZE));
    }
  }
  useEffect(() => {
    dispatch(getGitInfo());
    if (window.innerWidth < 620) {
      dispatch(setWin(MOBILE_SIZE));
    } else if (window.innerWidth < 920) {
      dispatch(setWin(TABLET_SIZE))
    } else {
      dispatch(setWin(PC_SIZE));
    }
    window.addEventListener("resize", handleResize);
  }, [])

  return (
    <>
      <ModalCom />
      <div className={styles.App}>
        {
          winSize === PC_SIZE ?
            <>
              <Sidebar />
              <Main />
            </>
            :
            <>
              < Main />
            </>
        }
      </div >
    </>
  );
}

const mapStateToProps = state => ({
  winSize: state.wins
})


export default connect(mapStateToProps)(App);
