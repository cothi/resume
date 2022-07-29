import styles from "./Project.module.css"
import stackStyles from "./TeckStack.module.css"
import { AiOutlineSelect } from "react-icons/ai";

export default function Projects({ git }) {

  // AiOutlineSelect

  if (git.pros[0] == undefined) {
    return (
      <>
        Loading
      </>
    )
  }

  const gitData = git.pros[0].text

  return (
    <div className={styles.mainBody}>
      <div className={styles.ProjectContainer}>
        <div className={styles.ProjectHeaderTitle}>
          Project
        </div>
        <div className={styles.ProjectTableMain}>
          <div className={styles.ProjectTableHeader}>
            <div>NAME</div>
            <div>ROLE</div>
            <div>TYPE</div>
            <div>TOPIC/STACK</div>
            <div>MORE</div>
          </div>
          {
            gitData.map((v, i) => {

              return (
                <div className={styles.ProjectTableContent} key={i}>
                  <div className={styles.ProjectInnerText}>{v.name}</div>
                  <div className={styles.ProjectInnerText}>{v.name}</div>
                  <div className={styles.ProjectInnerText}>{v.name}</div>
                  <div className={styles.ProjectStackContainer}>
                    {
                      v.topics.map((v2, j) => (
                        <div className={stackStyles.Stack} key={j}>
                          {v2}
                        </div>
                      ))
                    }
                  </div>
                  <div className={styles.ProjectMore}
                  ><AiOutlineSelect className={styles.ProjectMore} /></div>
                </div>
              )
            })
          }
          <div className={styles.ProjectTableContent}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

    </div>
  )
}
