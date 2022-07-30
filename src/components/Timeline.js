import styles from "./Timeline.module.css"
import TimelineDiv from "../containers/TimelienDiv"
import Modal from 'react-modal';
import timelineData from "../data/data"
import { setTimeline, setModal } from "../actions/index"

import SimpleImageSlider from "react-simple-image-slider";



Modal.setAppElement("div");
export default function Timeline({ dispatch, states, }) {

  var test = []
  Object.keys(timelineData).map((v, i) => {
    test.push(v)
  })

  const images = [

    "https://github.com/cothi/resume/blob/main/public/assets/2015_mara_tour(2).jpeg?raw=true",
    ,
    "https://mblogthumb-phinf.pstatic.net/MjAxODEwMDJfNTAg/MDAxNTM4NDg3NDExMDMw.SzgqnH7Lc0ROTZXR5bvmo7z0O-8gHLKV-wbdKmxFWL0g.WfkZ0YVAjSNbspvCE40fqCM1NKsnNwT17ZgKmtX7FLkg.GIF.doso556/%EB%85%B9%ED%99%94_2018_10_02_22_11_53_920.gif?type=w800",
  ]

  return (
    <>
      <Modal isOpen={states.modal.open}>

        This is Modal content
        <div onClick={() => dispatch(setModal(false))}>
          hhh
        </div>

        <SimpleImageSlider
          width={window.innerWidth - window.innerWidth / 4}
          height={window.innerHeight - window.innerHeight / 2}

          images={images}
          showBullets={true}
          showNavs={true}
        />


      </Modal>
      {
        test.map((v, i) => {
          let key = "timeline_" + (i + 1);
          return (
            <div key={key}>
              <div className={styles.TimelineTitle} props={v}>
                {v}
              </div>
              <TimelineDiv props={v} />
            </div>
          )
        })

        /*         마라톤 경기에서는 가장 먼저 골인 지점을 통과하는 것보다, 자신만의 레이스를 ‘어떻게 운용했는지’가 마라토너들에겐 더 중요하다고 합니다. 특별한 순간을 위해서는 지루한 시기도 보내기도 하고, 좀 더 멀리 좀 더 빨리 가기 위해 때를 기다려야 하기도 합니다. 변치 않는 삶의 목표와 완주하겠다는 열정만 잊지 않는다면, 기나긴 인생 마라톤에서 분명 환히 웃으며 목표를 가질 수 있다고 믿습니다. */

      }
    </ >
  )
}

