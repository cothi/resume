import styles from "./Project.module.css"
import stackStyles from "./TeckStack.module.css"
import { AiOutlineSelect } from "react-icons/ai";
import { setModal, setProject } from "../actions/index"
import { PC_SIZE } from "../actions/actionTypes"
import projectsData from "../data/project"

import "react-alice-carousel/lib/alice-carousel.css";
export default function Projects({ dispatch, git }) {



  if (git.pros[0] === undefined) {
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
        <div className={styles.ProjectTypeHeader}>
          <div className={git.project.pType === "all" ? styles.ProjectTypeHeaderTextSelected : styles.ProjectTypeHeaderText} onClick={() => { dispatch(setProject({ pType: "all", name: git.project.name })) }}>
            ALL
          </div>
          <div className={git.project.pType === "open source" ? styles.ProjectTypeHeaderTextSelected : styles.ProjectTypeHeaderText} onClick={() => { dispatch(setProject({ pType: "open source", name: git.project.name })) }}>
            OPEN SOURCE PROJECT
          </div>
          <div className={git.project.pType === "team project" ? styles.ProjectTypeHeaderTextSelected : styles.ProjectTypeHeaderText} onClick={() => { dispatch(setProject({ pType: "team project", name: git.project.name })) }}>
            TEAM
          </div>
          <div className={git.project.pType === "toy project" ? styles.ProjectTypeHeaderTextSelected : styles.ProjectTypeHeaderText} onClick={() => { dispatch(setProject({ pType: "toy project", name: git.project.name })) }}>
            TOY
          </div>
          <div className={git.project.pType === "clone challenge" ? styles.ProjectTypeHeaderTextSelected : styles.ProjectTypeHeaderText} onClick={() => { dispatch(setProject({ pType: "clone challenge", name: git.project.name })) }}>
            CLON CHALLENGE
          </div>
        </div>
        <div className={styles.ProjectTableMain}>
          {
            git.wins === PC_SIZE ?
              <>

                <div className={styles.ProjectTableHeader}>
                  <div>NAME/DESCRIPTION</div>
                  <div>TYPE</div>
                  <div>STATUS</div>
                  <div>TOPIC/STACK</div>
                  <div>MORE</div>
                </div>
                <div className={styles.ProjectContentMain} >
                  {
                    gitData.map((v, i) => {
                      let key1 = "git_" + (i + 1);
                      v.name = v.name.replace(".", "_");
                      v.name = v.name.replaceAll("-", "_");

                      if (v.folk === true && projectsData[v.name] === undefined || projectsData[v.name] === undefined) {
                        return null;
                      }
                      if (git.project.pType !== "all" && git.project.pType !== projectsData[v.name].type) {
                        return null;
                      }
                      return (
                        <div className={styles.ProjectTableContent} key={key1} onClick={() => {
                          dispatch(setModal({ modalType: "project", open: true }))
                          dispatch(setProject({
                            pType: git.project.pType,
                            name: v.name,
                            getData: { v }
                          }))
                        }
                        } >
                          <div className={styles.ProjectInnerText}>
                            <div>
                              {v.name}
                            </div>
                            <div className={styles.ProjectInnerTextSup}>
                              - {v.description}
                            </div>
                          </div>
                          <div className={styles.ProjectInnerText}>{projectsData[v.name].type}</div>
                          <div className={styles.ProjectInnerText}>{projectsData[v.name].status} </div>
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
              </>
              :
              <>
                <div className={styles.ProjectTableHeaderMobile}>
                  <div>NAME/DESCRIPTION</div>
                  <div>STATUS</div>
                  <div>TOPIC/STACK</div>
                </div>
                <div className={styles.ProjectContentMain} >
                  {
                    gitData.map((v, i) => {
                      let key1 = "git_" + (i + 1);
                      v.name = v.name.replace(".", "_");
                      v.name = v.name.replaceAll("-", "_");

                      if (v.folk === true && projectsData[v.name] === undefined || projectsData[v.name] === undefined) {
                        return null;
                      }
                      if (git.project.pType !== "all" && git.project.pType !== projectsData[v.name].type) {
                        return null;
                      }
                      return (
                        <div className={styles.ProjectTableContentMobile} key={key1} onClick={() => {
                          dispatch(setModal({ modalType: "project", open: true }))
                          dispatch(setProject({
                            pType: git.project.pType,
                            name: v.name,
                            getData: { v }
                          }))
                        }
                        } >
                          <div className={styles.ProjectInnerText}>
                            <div>
                              {v.name}
                            </div>
                            <div className={styles.ProjectInnerTextSup}>
                              - {v.description}
                            </div>
                          </div>
                          <div className={styles.ProjectInnerText}>{projectsData[v.name].status} </div>
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

                        </div>
                      )
                    })
                  }
                </div>
              </>
          }
        </div>
      </div>

    </div >
  )
}
