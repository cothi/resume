import styles from "./Sidebar.module.css"
import { Icon } from '@iconify/react';
import { useEffect, useState, useRef } from "react";

export default function Sidebar() {
  const [count, setCount] = useState(0);
  const number_ref = useRef(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1);
      console.log(count);
    }, 1000);
    return clearInterval(timer)
  }, [])
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
        <div className={styles.sidebarPositionMain}>
          <div className={styles.sidebarPosition} >
            <div>
              I'm
            </div>
            <div className={styles.sidebarFadeoutTextContainer}>
              <div className={styles.sidebarFadeoutText}>
                blockchain developer
              </div>
              <div className={styles.sidebarFadeoutText}>
                frontend developer
              </div>
              <div className={styles.sidebarFadeoutText}>
                oriented a sustainable developer
              </div>
            </div>
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
