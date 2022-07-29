import styles from "./TeckStack.module.css"
export default function TeckStack({ git }) {

  if (git == undefined) {
    return (
      <>
        Loading
      </>
    )
  }

  var teckStackObj = {}

  git.text.map((v) => {
    if (v.topics.length > 1) {
      v.topics.map((k) => {
        teckStackObj[k] = 12
      })
    }
  })

  return (
    <div className={styles.TeckStackContainer}>
      <div className={styles.Stack}>GO</div>
      {
        Object.keys(teckStackObj).map((item, i) => (
          <div className={styles.Stack} key={i}>
            {item}
          </div>
        ))
      }
    </div >
  )
}
