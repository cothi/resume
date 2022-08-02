import styles from "./Profile.module.css"
export default function Profile() {
  return (
    <div className={styles.ProfileDivMain}>
      <div className={styles.ProfileDiv}>
        <div className={styles.ProfileHeader} >
          NAME
        </div>
        <div className={styles.ProfileContentName}>
          한지웅 (jiung, Han)
        </div>
      </div>
      <div className={styles.ProfileDiv}>
        <div className={styles.ProfileHeader} >
          PHONE
        </div>
        <div className={styles.ProfileContent}>
          +82 010 3311 2389
        </div>
      </div>
      <div className={styles.ProfileDiv}>
        <div className={styles.ProfileHeader} >
          EMAIL
        </div>
        <div className={styles.ProfileContent}>
          jiungdev@gmail.com
        </div>
      </div>
      <div className={styles.ProfileDiv}>
        <div className={styles.ProfileHeader} >
          ADDRESS
        </div>
        <div className={styles.ProfileContent}>
          Jeju-si, Jeju-do, Republic of Korea
        </div>
      </div>
      <div className={styles.ProfileDiv}>
        <div className={styles.ProfileHeader} >
          POSITION
        </div>
        <div className={styles.ProfileContent}>
          BLOCKCHAIN, FRONTEND
        </div>
      </div>
    </div>
  )
}
