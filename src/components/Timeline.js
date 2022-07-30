import styles from "./Timeline.module.css"
import TimelineDiv from "../containers/TimelienDiv"
import Modal from 'react-modal';
import { setTimeline, setModal } from "../actions/index"
import { PC_SIZE } from "../actions/actionTypes"

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { GoX } from "react-icons/go";
import timelineData from "../data/data"
import freeDetails from "../data/free"
import { MdDescription, MdToday, MdStackedBarChart, MdTag } from "react-icons/md";
import { VscReferences } from "react-icons/vsc";




Modal.setAppElement("div");
export default function Timeline({ dispatch, states, }) {

  var test = []
  Object.keys(timelineData).map((v, i) => {
    test.push(v)
  })





  return (
    <>

      {
        test.map((v, i) => {
          let key = "timeline_" + (i + 1);
          return (
            <div key={key}>
              <div className={styles.TimelineTitle} props={v}>
                {v}
              </div>
              <TimelineDiv props={v} index={i} />
            </div>
          )
        })

        /*         마라톤 경기에서는 가장 먼저 골인 지점을 통과하는 것보다, 자신만의 레이스를 ‘어떻게 운용했는지’가 마라토너들에겐 더 중요하다고 합니다. 특별한 순간을 위해서는 지루한 시기도 보내기도 하고, 좀 더 멀리 좀 더 빨리 가기 위해 때를 기다려야 하기도 합니다. 변치 않는 삶의 목표와 완주하겠다는 열정만 잊지 않는다면, 기나긴 인생 마라톤에서 분명 환히 웃으며 목표를 가질 수 있다고 믿습니다. */

      }
      {
        states.timeline.subject == null ? null :
          <Modal isOpen={states.modal.open}>
            <div onClick={() => dispatch(setModal(false))} className={styles.ModalCloseMain}>
              <GoX className={styles.ModalClose} />
            </div>
            <div className={states.wins != PC_SIZE ? styles.ModalMainMobile : styles.ModalMain}>
              <div className={states.wins != PC_SIZE ? styles.aliceCarouselMobile : styles.aliceCarousel} >
                <AliceCarousel autoPlay autoPlayInterval="3000" >
                  {
                    !states.timeline.subject || states.timeline.subject.images ?
                      <div>
                        no image
                      </div>
                      :
                      timelineData[states.timeline.subject][states.timeline.id]["images"].map((v, i) => {
                        return (
                          <div className={styles.ModalSliderMain} key={i}>
                            <img src={v} style={{
                              width: window.innerWidth / 3,
                              height: window.innerHeight / 3
                            }} className={styles.ModalSliderImg} />
                          </div>
                        )
                      })
                  }

                </AliceCarousel>
              </div>
              <div className={states.wins != PC_SIZE ? styles.ModalContentMainMobile : styles.ModalContentMain}>
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
                        return (<div className={styles.ModalContentStack} key={i}>
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
                            <div>
                              {i + 1}. {v}
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
    </ >
  )
}

