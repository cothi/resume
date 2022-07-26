import styles from "./Timeline.module.css"
import TimelineDiv from "./TimelineDiv"
import { freelancer, award, certificates, education, interesting } from "../data/data"

export default function Timeline() {
  return (
    <>
      <div className={styles.TimelineTitle}>
        Freelancer
      </div>
      <TimelineDiv props={freelancer} />
      <div className={styles.TimelineTitle}>
        Award
      </div>
      <TimelineDiv props={award} />
      <div className={styles.TimelineTitle}>
        Certificate
      </div>

      <TimelineDiv props={certificates} />

      <div className={styles.TimelineTitle}>
        Education
      </div>

      <TimelineDiv props={education} />

      <div className={styles.TimelineTitle}>
        interesting
      </div>
      <div className={styles.TimelineSubtitle}>
        마라톤 경기에서는 가장 먼저 골인 지점을 통과하는 것보다, 자신만의 레이스를 ‘어떻게 운용했는지’가 마라토너들에겐 더 중요하다고 합니다. 특별한 순간을 위해서는 지루한 시기도 보내기도 하고, 좀 더 멀리 좀 더 빨리 가기 위해 때를 기다려야 하기도 합니다. 변치 않는 삶의 목표와 완주하겠다는 열정만 잊지 않는다면, 기나긴 인생 마라톤에서 분명 환히 웃으며 목표를 가질 수 있다고 믿습니다.
      </div>
      <TimelineDiv props={interesting} />
    </ >
  )
}
