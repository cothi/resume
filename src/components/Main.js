import styles from "./Main.module.css"
import Header from "./Header"
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

          <div className={styles.mainBody}>
            <div className={styles.mainBodyLeft}>
              <div className={styles.mainBodyHeader}>
                a
              </div>
              <div className={styles.mainBodyTimeLine}>
                b
              </div>
            </div>
            <div className={styles.mainBodyRight}>
              <div className={styles.mainBodyProfile}>
                c
              </div>
              <div className={styles.mainTeckInterest}>
                d
              </div>
              <div className={styles.mainBodyStack}>
                e
              </div>
            </div>
          </div>
        } />
        <Route exact path="/projects" element={
          <div className={styles.mainBody}>
            project
          </div>
        } />

      </Routes>
    </div>
  );
}
