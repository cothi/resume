import styles from "./Timeline.module.css"


export default function TimelineDiv(props) {
  console.log(props.props);

  return (
    <>
      {
        props.props.map(v => (
          <div className={styles.ContentDivider}>
            <div className={styles.ContentLeft}>
              <div className={styles.Title}>
                {v.date}
              </div>
              <div className={styles.Order}>
                {v.order}
              </div>
            </div>
            <div className={styles.Divider}>
            </div>
            <div className={styles.ContentRight}>
              <div className={styles.Title}>
                {v.subject}
              </div>
              <div className={styles.Details}>
                {v.detail}
              </div>
            </div>
          </div>
        ))

      }
    </>
  )
}
