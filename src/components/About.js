import styles from './Main.module.css'

export default function About() {
  return (
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

  );
}
