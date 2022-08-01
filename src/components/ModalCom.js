
import Modal from 'react-modal';
import styles from "./ModalCom.module.css"
import { GoX } from "react-icons/go";
import { setModal } from "../actions/index"
import { MdDescription, MdToday, MdTag } from "react-icons/md";
import { VscReferences } from "react-icons/vsc";

import AliceCarousel from 'react-alice-carousel';
import { PC_SIZE } from "../actions/actionTypes"
import timelineData from "../data/data"
import projectsData from "../data/project"




Modal.setAppElement("div");
Modal.defaultStyles.content.overflowY = 'hidden';
Modal.defaultStyles.content.padding = "2%";

export default function ModalCom({ dispatch, states }) {
  return (
    <>
      {
        states.modal.modalType === "timeline" ?
          states.timeline.subject === null ? null :
            <Modal isOpen={states.modal.open} >

              {
                states.wins === PC_SIZE ?
                  <div onClick={() => dispatch(setModal(false))} className={styles.ModalCloseMain}>
                    <GoX className={styles.ModalClose} />
                  </div>
                  :
                  null
              }


              <div className={states.wins !== PC_SIZE ? styles.ModalMainMobile : styles.ModalMain}>
                {
                  states.wins !== PC_SIZE ?
                    <div onClick={() => dispatch(setModal(false))} className={styles.ModalCloseMain}>
                      <GoX className={styles.ModalClose} />
                    </div>
                    :
                    null
                }
                <div className={states.wins !== PC_SIZE ? styles.aliceCarouselMobile : styles.aliceCarousel} >

                  <AliceCarousel disableButtonsControls autoHeight={false} animationDuration={2000} autoPlay={3000} mouseTracking >
                    {
                      !states.timeline.subject || timelineData[states.timeline.subject][states.timeline.id]["images"].length == 0 ?
                        <div className={styles.ModalSliderMain}>
                          no image
                        </div>
                        :
                        timelineData[states.timeline.subject][states.timeline.id]["images"].map((v, i) => {
                          return (
                            <div className={styles.ModalSliderMain} key={i}>
                              <img src={v} style={states.wins !== PC_SIZE ? { width: window.innerWidth / 1.5, height: window.innerHeight / 3, borderRadius: 10, } : {
                                width: window.innerWidth / 2.4,
                                height: window.innerHeight / 3,
                                borderRadius: 10,
                              }} className={styles.ModalSliderImg} />

                            </div>
                          )
                        })
                    }

                  </AliceCarousel>
                </div>
                <div className={states.wins !== PC_SIZE ? styles.ModalContentMainMobile : styles.ModalContentMain}>
                  <div>
                    <div className={styles.ModalHeader}>
                      <MdDescription />    설명
                    </div>
                    <div className={styles.ModalContentOne}>
                      <div className={styles.ModalTitle}>
                        # 요약
                      </div>
                      <div className={styles.ModalContent}>
                        {timelineData[states.timeline.subject][states.timeline.id]["detail"]}
                      </div>
                    </div>
                    <div className={styles.ModalContentOne}>
                      <div className={styles.ModalTitle}>
                        <MdToday /> 날짜
                      </div>
                      <div className={styles.ModalContent}>
                        {timelineData[states.timeline.subject][states.timeline.id]["date"]}
                      </div>
                    </div>
                    <div className={styles.ModalContentOne}>
                      <div className={styles.ModalTitle}>
                        <MdTag /> 태그
                      </div>
                      <div className={styles.ModalContentStackMain}>
                        {timelineData[states.timeline.subject][states.timeline.id]["tags"].map((v, i) => {
                          return (
                            <div className={styles.ModalContentStack} key={i}>
                              {v}
                            </div>
                          )
                        })}

                      </div>
                    </div>
                    <div className={styles.ModalContentOne}>
                      <div className={styles.ModalTitle}>
                        <VscReferences /> 참고
                      </div>
                      <div className={styles.ModalContent}>
                        {
                          timelineData[states.timeline.subject][states.timeline.id]["reference"].map((v, i) => {
                            return (
                              <div key={i}>
                                {`(${i + 1})${v}`}
                              </div>
                            )
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </Modal>
          :
          <>
            {
              states.project.name === null || states.project.getData === undefined || states.project.getData.v === null ? null :
                <Modal isOpen={states.modal.open}>
                  {
                    states.wins === PC_SIZE ?
                      <div onClick={() => dispatch(setModal(false))} className={styles.ModalCloseMain}>
                        <GoX className={styles.ModalClose} />
                      </div>
                      :
                      null
                  }


                  <div className={states.wins !== PC_SIZE ? styles.ModalMainMobile : styles.ModalMain}>


                    {
                      states.wins !== PC_SIZE ?
                        <div onClick={() => dispatch(setModal(false))} className={styles.ModalCloseMain}>
                          <GoX className={styles.ModalClose} />
                        </div>
                        :
                        null
                    }

                    <div className={states.wins !== PC_SIZE ? styles.aliceCarouselMobile : styles.aliceCarousel} >

                      <AliceCarousel disableButtonsControls mouseTracking autoHeight={false} animationDuration={1000} autoPlay autoPlayInterval={2000} >
                        {
                          !states.project.name || projectsData[states.project.name]["images"].length === 0 ?
                            <div className={styles.ModalSliderMain} >
                              no image
                            </div>
                            :
                            projectsData[states.project.name]["images"].map((v, i) => {
                              return (
                                <div className={styles.ModalSliderMain} key={i}>
                                  <img src={v} style={
                                    states.wins === PC_SIZE ?
                                      {
                                        width: window.innerWidth / 2.4,
                                        height: window.innerHeight / 2.6,
                                        borderRadius: 10
                                      }
                                      :
                                      {
                                        width: window.innerWidth / 1.4,
                                        height: window.innerHeight / 3.4,
                                        borderRadius: 10
                                      }
                                  } className={styles.ModalSliderImg} />
                                </div>
                              )
                            })
                        }
                      </AliceCarousel>
                    </div>

                    <div className={states.wins !== PC_SIZE ? styles.ModalContentMainMobile : styles.ModalContentMain}>
                      <div>
                        <div className={styles.ModalHeader}>
                          <MdDescription />    설명
                        </div>
                        <div className={styles.ModalContentOne}>
                          <div className={styles.ModalTitle}>
                            # 요약
                          </div>
                          <div className={styles.ModalContent}>
                            {states.project.getData.v.description}
                          </div>
                        </div>
                        <div className={styles.ModalContentOne}>
                          <div className={styles.ModalTitle}>
                            # 후기 및 느낀점
                          </div>
                          <div className={styles.ModalContent}>
                            {projectsData[states.project.name]["feel"]}
                          </div>
                        </div>
                        <div className={styles.ModalContentOne}>
                          <div className={styles.ModalTitle}>
                            # Type
                          </div>
                          <div className={styles.ModalContent}>
                            {projectsData[states.project.name]["type"]}
                          </div>
                        </div>
                        <div className={styles.ModalContentOne}>
                          <div className={styles.ModalTitle}>
                            <MdToday /> 마지막 업데이트 날짜
                          </div>
                          <div className={styles.ModalContent}>
                            {states.project.getData.v.created_at} - {states.project.getData.v.updated_at}
                            <div>
                              상태: {projectsData[states.project.name]["status"]}
                            </div>
                          </div>
                        </div>
                        <div className={styles.ModalContentOne}>
                          <div className={styles.ModalTitle}>
                            <MdTag /> 태그
                          </div>
                          <div className={styles.ModalContentStackMain}>
                            {projectsData[states.project.name]["tags"].map((v, i) => {
                              return (
                                <div className={styles.ModalContentStack} key={i}>
                                  {v}
                                </div>
                              )
                            })}

                          </div>
                        </div>
                        <div className={styles.ModalContentOne}>
                          <div className={styles.ModalTitle}>
                            <VscReferences /> 참고
                          </div>
                          <div className={styles.ModalContent}>
                            (1){states.project.getData.v.html_url}
                            {
                              projectsData[states.project.name]["reference"].map((v, i) => {
                                return (
                                  <div key={i}>
                                    {`(${i + 1})${v}`}
                                  </div>
                                )
                              })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                </Modal>
            }
          </>
      }
    </>
  )
}
