import styles from "./Main.module.css"
import Header from "./Header"
import About from './About'
import Projects from './Projects'
import { Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <div className={styles.mainRoot}>
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
