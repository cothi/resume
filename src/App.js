import { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import styles from "./App.module.css"


function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  })

  return (
    <div className={styles.App}>
      {
        !isMobile ?
          <Sidebar />
          :
          null
      }
      <Main />
    </div >
  );
}




export default App;
