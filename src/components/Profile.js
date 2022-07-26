import styles from "./Profile.module.css"
export default function Profile() {
  return (
    <div>
      <div className={styles.ProfileDiv}>
        <div className={styles.ProfileHeader} >
          Name
        </div>
        <div className={styles.ProfileContent}>
          한지웅 (jiung, Han)
        </div>
      </div>
      <div className={styles.ProfileDiv}>
        <div className={styles.ProfileHeader} >
          E-mail
        </div>
        <div className={styles.ProfileContent}>
          jiungdev@gmail.com
        </div>
      </div>
      <div className={styles.ProfileDiv}>
        <div className={styles.ProfileHeader} >
          Address
        </div>
        <div className={styles.ProfileContent}>
          Jeju-si, Jeju-do, Republic of Korea
        </div>
      </div>
      <div className={styles.ProfileDiv}>
        <div className={styles.ProfileHeader} >
          Position
        </div>
        <div className={styles.ProfileContent}>
          Blockchain
        </div>
      </div>
    </div>
  )
}
