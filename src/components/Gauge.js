import styles from "./Gauge.module.css"

export default function Gauge({ title, percentage }) {

  percentage = percentage.toFixed(1);
  if (title == "HTML" || title == "null" || title == "Pug") {
    return (
      <>
      </>
    )
  }

  return (
    <>
      <div className={styles.gaugeHeader}>
        <div className={styles.gaugeTitle}>
          {title}
        </div>
        <div className={styles.gaugeTitlePercentage}>
          {percentage}%
        </div>
      </div>
      <div className={styles.gaugeContainer}>
        <div className={styles.gaugePercentage} style={{ width: percentage + "%" }}>
        </div>
      </div>
    </>
  )
}
