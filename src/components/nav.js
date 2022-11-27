import styles from '../css/main.module.css'
import {NavLink} from "react-router-dom";
function Nav() {
  return(
    <nav className={styles.navbar}><NavLink to="/" className={styles.navHome}><div className={styles.logoImg}></div><div className={styles.text}>경소고 상담신청 프로그램</div></NavLink></nav>
  );
}

export default Nav;