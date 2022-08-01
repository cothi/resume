import { Link } from "react-router-dom";
import styles from './Main.module.css';
import { setLocation } from "../actions/index"

export default function Header({ dispatch, states }) {
  return (
    <div className={styles.linkContainer}>
      <Link
        className={
          states.location == "about" ? styles.linkStyleSelected : styles.linkStyle
        }
        onClick={
          () => {
            dispatch(setLocation({ location: "about" }))
          }
        }
        to="/">
        About
      </Link>
      <Link
        className={
          states.location == "project" ? styles.linkStyleSelected : styles.linkStyle
        }
        onClick={
          () => {
            dispatch(setLocation({ location: "project" }))
          }
        }
        to="/projects"> Projects </Link>
    </div>
  );
}
