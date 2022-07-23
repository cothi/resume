import styles from "./Sidebar.module.css"
import { Icon } from '@iconify/react';

export default function Sidebar() {
  return (
    <div className={styles.sidebarRoot}>
      <div className={styles.sidebarCore}>
        <div className={styles.sidebarProfileContainer}>
          <img
            src="https://avatars.githubusercontent.com/u/51845043?v=4"
            alt="new"
            className={styles.sidebarProfileImg}
          />
        </div>
        <div className={styles.sidebarPosition}>
          blockchain developer
        </div>
        <div className={styles.sidebarIconBox}>
          <Icon icon="fa6-brands:github-square" color="#000" className={styles.sidebarIcon} />
          <Icon icon="fluent:mail-24-filled" color="#111" className={styles.sidebarIcon2} />
        </div>
      </div>
    </div>
  );
}
