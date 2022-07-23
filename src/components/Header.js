import { Link } from "react-router-dom";
import styles from './Main.module.css';

export default function Header() {
  return (
    <div className={styles.linkContainer}>
      <Link className={styles.linkStyle} to="/"> About </Link>
      <Link className={styles.linkStyle} to="/projects"> Projects </Link>
    </div>
  );
}
