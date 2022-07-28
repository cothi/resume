import styles from './Main.module.css'
import Timeline from "./Timeline"
import Profile from './Profile'
import TechRank from "../containers/TechRank"
import TeckStack from "../containers/TechStack"
import { MOBILE_SIZE } from "../actions/actionTypes"

export default function About({ winSize }) {
  return (
    <div className={winSize == MOBILE_SIZE ? styles.mainMobileBody : styles.mainBody}>
      {
        winSize == MOBILE_SIZE ?
          <>
            <div className={styles.mainBodyMobileRight}>
              <div className={styles.mainBodyMobileHeader}>
                <div className={styles.mainHeaderTitle}>
                  Resume
                </div>
                <div className={styles.mainHeaderContent}>
                  세상에서 복제할 수 없는 무언가를 만드는 능력은 대체할 수 없는 엄청난 가치를 지닙니다. 이는 데이터 주권을 가질 수 있음을 의미합니다.
                </div>
              </div>

              <div className={styles.mainBodyProfile}>
                <Profile />
              </div>



              <div className={styles.mainTechInterest}>
                <div className={styles.mainHeaderTitle}>
                  Tech Interest
                </div>
                <TechRank />
              </div>

            </div>
            <div className={styles.mainMobileBodyLeft}>
              <div className={styles.mainBodyMobileStack}>
                <div className={styles.mainBodyStack}>
                  <div className={styles.mainHeaderTitle}>
                    Tech Stack
                  </div>
                  <TeckStack />
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
          </>
          :
          <>
            <div className={styles.mainBodyLeft}>
              <div className={styles.mainBodyHeader}>
                <div className={styles.mainHeaderTitle}>
                  Resume
                </div>
                <div className={styles.mainHeaderContent}>
                  블록체인은 디지털 세상에서 복제할 수 없는 무언가를 만드는 능력은 대체할 수 없는 엄청난 가치를 지닙니다. 이는 데이터 주권을 가질 수 있음을 의미합니다.
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
                <div className={styles.mainHeaderTitle}>
                  Tech Interest
                </div>
                <TechRank />
              </div>
              <div className={styles.mainBodyStack}>
                <div className={styles.mainHeaderTitle}>
                  Tech Stack
                </div>
                <TeckStack />
              </div>
            </div>
          </>
      }
    </div>

  );
}
