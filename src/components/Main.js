import styles from "./Main.module.css"
import Header from "../containers/Header"
import About from "../containers/About"
import Projects from '../containers/Projects'
import { Route, Routes } from "react-router-dom";
import { PC_SIZE } from "../actions/actionTypes"


export default function Main({ winSize }) {
  return (
    <div className={winSize === PC_SIZE ? styles.mainRoot : styles.mainFullRoot}>
      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderItem}>
          <Header />
        </div>
        <div className={styles.mainHeaderItem}>
        </div>
      </div>
      <Routes>
        <Route exact path="/" element={
          <About />
        } />
        <Route exact path="/projects" element={
          <Projects />
        } />
      </Routes>
    </div>
  );
}

