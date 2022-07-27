import styles from './Main.module.css'
import Timeline from "./Timeline"
import Profile from './Profile'
import TechRank from "../containers/TechRank"

export default function About() {
  return (
    <div className={styles.mainBody}>
      <div className={styles.mainBodyLeft}>
        <div className={styles.mainBodyHeader}>
          <div className={styles.mainHeaderTitle}>
            Resume
          </div>
          <div className={styles.mainHeaderContent}>
            블록체인은 디지털 세상에서 복제할 수 없는 무언가를 만드는 능력은 대체할 수 없는 엄청난 가치를 지닙니다. 이는 데이터 주권을 가질 수 있음을 의미합니다.
          </div>
          <div className={styles.mainLine}>
          </div>
        </div>
        <div className={styles.mainBodyTimeLine}>
          <div className={styles.mainHeaderTitle}>
            TimeLine
          </div>
          <div className={styles.mainTimeBody}>
            <Timeline />
          </div>
        </div>

      </div>
      <div className={styles.mainBodyRight}>
        <div className={styles.mainBodyProfile}>
          <Profile />
        </div>
        <div className={styles.mainTechInterest}>
          <TechRank />
        </div>
        <div className={styles.mainBodyStack}>
          e
        </div>
      </div>
    </div>

  );
}
