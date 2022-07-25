import styles from "./Timeline.module.css"

export default function Timeline() {
  const freelancer = [
    {
      date: "2021.06",
      order: "** 학원",
      subject: "학생 관리 프로그램",
      detail: "학생 데이터를 엑셀로 수기로 작성 후,  학생 데이터를 pdf 형태로 자동으로 변환하여 출력을 진행"
    },
    {
      date: "2021.05",
      order: "** 쇼핑몰",
      subject: "google docs api, 자동 데이터 입력",
      detail: "수기로 발주받은 데이터를 구글 문서에 대입 시키는 작업을api 화를 자동화",
    },
    {
      date: "2021.05",
      order: "** 쇼핑몰",
      subject: "google apps script에 대해서 데이터를 취통합을 필요한 애플리케이션 개발",
      detail: "수기로 작성한 물품 데이터를 전체 데이터에 자동 수정하는 작업 자동화"
    },
    {
      date: "2022.06",
      order: "** 학원",
      subject: "학생 관리 프로그램 보수 및 데이터 라벨 추가",
    }
  ]

  return (
    <div>
      {
        freelancer.map(v => (
          <div className={styles.ContentDivider}>
            <div className={styles.ContentLeft}>
              <div>
                {v.date}
              </div>
              <div>
                {v.order}
              </div>
            </div>
            <div className={styles.Divider}>
            </div>
            <div>
              <div>
                {v.subject}
              </div>
              <div>
                {v.detail}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
