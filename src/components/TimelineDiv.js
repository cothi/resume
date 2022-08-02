import styles from "./Timeline.module.css"
import timelineData from "../data/data"
import { setModal, setTimeline } from "../actions/index"
import { Icon } from '@iconify/react';


export default function TimelineDiv({ dispatch, props }) {
  const data = [...timelineData[props]].reverse();

  console.log(data);


  return (
    <div>

      {
        data.map((v, id) => (
          <div className={styles.ContentDivider} key={id++} onClick={() => {
            dispatch(setTimeline({
              timeline: props,
              index: id - 1
            }))
            dispatch(setModal(
              {
                modalType: "timeline",
                open: true
              }
            ))
          }}>
            <div className={styles.ContentLeft}>
              <div className={styles.Title}>
                {v.date}
              </div>
              <div className={styles.Order}>
                {v.order}
              </div>
            </div>
            <div className={styles.Divider}>
            </div>
            <div className={styles.ContentRight}>
              <div>
                <div className={styles.Title}>
                  {v.subject}
                </div>
                <div className={styles.Details}>
                  {v.detail}
                </div>
              </div>
              <div className={styles.DocsMain}>
                <Icon icon="iconoir:google-docs" className={styles.Docs} height="25" color="#5f6368" />
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
