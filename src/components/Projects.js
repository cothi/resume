import styles from "./Project.module.css"
import stackStyles from "./TeckStack.module.css"
import { AiOutlineSelect } from "react-icons/ai";
import axios from "axios";
import Modal from 'react-modal';
import { setModal } from "../actions/index"

Modal.setAppElement("div");

export default function Projects({ dispatch, git }) {



  if (git.pros[0] == undefined) {
    return (
      <>
        Loading
      </>
    )
  }

  console.log(git);

  const getUrl = async (url) => {
    await axios.get(url)
  }

  const gitData = git.pros[0].text

  return (
    <div className={styles.mainBody}>
      <Modal isOpen={git.modal.open}>
        This is Modal content
      </Modal>
      <div className={styles.ProjectContainer}>
        <div className={styles.ProjectHeaderTitle}>
          Project
        </div>
        <div className={styles.ProjectTableMain}>
          <div className={styles.ProjectTableHeader}>
            <div>NAME/DESCRIPTION</div>
            <div>ROLE</div>
            <div>TOPIC/STACK</div>
            <div>DATE</div>
            <div>MORE</div>
          </div>
          <div className={styles.ProjectContentMain} >
            {
              gitData.map((v, i) => {
                let key1 = "git_" + (i + 1);
                if (v.fork == true) {
                  return (
                    <>
                    </>
                  )
                }
                return (
                  <div className={styles.ProjectTableContent} key={key1} onClick={() => dispatch(setModal(true))} >
                    <div className={styles.ProjectInnerText}>{
                      `${v.name} (${v.description})`
                    }</div>
                    <div className={styles.ProjectInnerText}>{v.name}</div>
                    <div className={styles.ProjectInnerText}>{v.updated_at}</div>
                    <div className={styles.ProjectStackContainer}>
                      {
                        v.topics.map((v2, index) => {
                          let key2 = "topics_" + (index + 1)
                          return (
                            <div className={stackStyles.Stack} key={key2} >
                              {v2}
                            </div>
                          )
                        })
                      }
                    </div>
                    <div className={styles.ProjectMore}>
                      <AiOutlineSelect />
                    </div>
                  </div>
                )
              })
            }
          </div>

        </div>
      </div>

    </div >
  )
}
