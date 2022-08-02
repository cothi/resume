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
        <div className={styles.sidebarPosition} >
          <div>
            BLOCKAHIN, FRONTEND
          </div>
        </div>
        <div className={styles.sidebarName} >
          Jiung Han
        </div>

        <div className={styles.sidebarIconBox}>
          <a href="https://github.com/cothi" target="_blank" rel="noopener noreferrer">
            <Icon icon="fa6-brands:github-square" color="#fff" className={styles.sidebarIcon} />
          </a>
          <a href="mailto:jiundev@gmail.com" key="Email" target="_top" rel="noopener noreferrer" style={{ padding: '0 0 0 15px' }}>
            <Icon icon="fluent:mail-24-filled" color="#fff" className={styles.sidebarIcon2} />
          </a>
        </div>
      </div>
    </div>
  );
}
