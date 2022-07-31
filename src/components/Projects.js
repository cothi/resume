import styles from "./Project.module.css"
import stackStyles from "./TeckStack.module.css"
import { AiOutlineSelect } from "react-icons/ai";
import axios from "axios";
import { setModal, setProject } from "../actions/index"
import projectsData from "../data/project"

import "react-alice-carousel/lib/alice-carousel.css";
export default function Projects({ dispatch, git }) {



  if (git.pros[0] == undefined) {
    return (
      <>
        Loading
      </>
    )
  }

  console.log(projectsData);

  /*   const getUrl = async (url) => {
      var jsonData = await axios.get(url);
    } */
  const gitData = git.pros[0].text
  console.log(git)

  return (
    <div className={styles.mainBody}>
      {
        /*      <Modal isOpen={git.modal.open}>
               <div onClick={() => { dispatch(setModal(false)) }} className={styles.ProjectModalHeader}>
                 <GoX className={styles.ModalClose} />
               </div>
               <div className={styles.ProjectModalMain}>
                 <div className={styles.ProjectModalLeft}>
       
                   <AliceCarousel autoPlay autoPlayInterval="3000" >
                     <div className={styles.ProjectPicMain}>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuH7jnF8soRcBRLxD83Thq-XH9tt-j146_WfoQgkDX_b1MxSzl3DM_g6WO1g7VgAF7LBE&usqp=CAU" style={{ width: window.innerWidth / 3, height: window.innerHeight / 2 }} />
                     </div>
                   </AliceCarousel>
                 </div>
                 <div className={styles.ProjectModalRight}>
                   <div className={styles.ModalContentHeader2}>
                     <div>
                       <MdDescription />
                     </div>
                     <div className={styles.ModalContentHeaderText}>
                       설명
                     </div>
                   </div>
                   <div className={styles.ModalContentOne}>
                     <div className={styles.ModalContentHeader}>
                       <div>
                         <MdSummarize />
                       </div>
                       <div className={styles.ModalContentHeaderText}>
                         요약
                       </div>
                     </div>
                     <div>
                     </div>
                   </div>
                   <div className={styles.ModalContentOne}>
                     <div className={styles.ModalContentHeader}>
                       <div>
                         <HiDocumentText />
                       </div>
                       <div className={styles.ModalContentHeaderText}>
                         후기
                       </div>
                     </div>
                     <div>
                     </div>
                   </div>
                   <div className={styles.ModalContentOne}>
                     <div className={styles.ModalContentHeader}>
                       <div>
                         <MdToday />
                       </div>
                       <div className={styles.ModalContentHeaderText}>
                         날짜
                       </div>
                     </div>
                     <div>
                     </div>
                   </div>
                   <div className={styles.ModalContentOne}>
                     <div className={styles.ModalContentHeader}>
                       <div>
                         <MdTag />
       
                       </div>
                       <div className={styles.ModalContentHeaderText}>
                         태그
                       </div>
                     </div>
                     <div>
                     </div>
                   </div>
                   <div className={styles.ModalContentOne}>
                     <div className={styles.ModalContentHeader}>
                       <div>
                         <VscReferences />
       
                       </div>
                       <div className={styles.ModalContentHeaderText}>
                         참고
                       </div>
                     </div>
                     <div>
                     </div>
                   </div>
       
       
                 </div>
               </div>
             </Modal> */
      }
      <div className={styles.ProjectContainer}>
        <div className={styles.ProjectHeaderTitle}>
          Project
        </div>
        <div className={styles.ProjectTypeHeader}>
          <div className={git.project.pType == "all" ? styles.ProjectTypeHeaderTextSelected : styles.ProjectTypeHeaderText} onClick={() => { dispatch(setProject({ pType: "all", name: git.project.name })) }}>
            ALL
          </div>
          <div className={git.project.pType == "open source" ? styles.ProjectTypeHeaderTextSelected : styles.ProjectTypeHeaderText} onClick={() => { dispatch(setProject({ pType: "open source", name: git.project.name })) }}>
            OPEN SOURCE PROJECT
          </div>
          <div className={git.project.pType == "team project" ? styles.ProjectTypeHeaderTextSelected : styles.ProjectTypeHeaderText} onClick={() => { dispatch(setProject({ pType: "team project", name: git.project.name })) }}>
            TEAM
          </div>
          <div className={git.project.pType == "toy project" ? styles.ProjectTypeHeaderTextSelected : styles.ProjectTypeHeaderText} onClick={() => { dispatch(setProject({ pType: "toy project", name: git.project.name })) }}>
            TOY
          </div>
          <div className={git.project.pType == "clone challenge" ? styles.ProjectTypeHeaderTextSelected : styles.ProjectTypeHeaderText} onClick={() => { dispatch(setProject({ pType: "clone challenge", name: git.project.name })) }}>
            CLON CHALLENGE
          </div>
        </div>
        <div className={styles.ProjectTableMain}>
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
                console.log(v.name)

                if (v.folk == true && projectsData[v.name] == undefined || projectsData[v.name] == undefined) {
                  return null;
                }
                if (git.project.pType != "all" && git.project.pType != projectsData[v.name].type) {
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

        </div>
      </div>

    </div >
  )
}
