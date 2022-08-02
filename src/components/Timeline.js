import styles from "./Timeline.module.css"
import TimelineDiv from "../containers/TimelienDiv"
import "react-alice-carousel/lib/alice-carousel.css";
import timelineData from "../data/data"


export default function Timeline({ }) {

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
            <div key={key} className={styles.TimelineMain}>
              <div className={styles.TimelineTitle} props={v}>
                [ {i + 1}. {v}
              </div>
              {v == "interesting" ? <div className={styles.TimelineInterText}>
                마라톤 경기에서는 가장 먼저 골인 지점을 통과하는 것보다, 자신만의 레이스를 ‘어떻게 운용했는지’가 마라토너들에겐 더 중요하다고 합니다. <br /> 특별한 순간을 위해서는 지루한 시기도 보내기도 하고, 좀 더 멀리 좀 더 빨리 가기 위해 때를 기다려야 하기도 합니다. 변치 않는 삶의 목표와 완주하겠다는 열정만 잊지 않는다면, 기나긴 인생 마라톤에서 분명 환히 웃으며 목표를 가질 수 있다고 믿습니다. </div>
                :
                null
              }
              <TimelineDiv props={v} index={i} />
            </div>
          )
        })

        /*         마라톤 경기에서는 가장 먼저 골인 지점을 통과하는 것보다, 자신만의 레이스를 ‘어떻게 운용했는지’가 마라토너들에겐 더 중요하다고 합니다. 특별한 순간을 위해서는 지루한 시기도 보내기도 하고, 좀 더 멀리 좀 더 빨리 가기 위해 때를 기다려야 하기도 합니다. 변치 않는 삶의 목표와 완주하겠다는 열정만 잊지 않는다면, 기나긴 인생 마라톤에서 분명 환히 웃으며 목표를 가질 수 있다고 믿습니다. */

      }
    </>

  )
}

