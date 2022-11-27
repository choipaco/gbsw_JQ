import styles from '../css/main.module.css'; 
import {NavLink} from "react-router-dom";
function Main(){
  return(
    <>
      <div className={styles.outImg}>
      <div className={styles.inImg}>
          

          <div className={styles.humanbotton}>
            <NavLink to="/stu"><button className={styles.box} id="stu"><div className={styles.textstu}>학생용👨‍🎓</div></button></NavLink>
            <NavLink to="/parent"><button className={styles.box} id="parent"><div className={styles.textstu}>학부모용👩‍👧</div></button></NavLink>
          </div>

      </div>
    </div>
    </>
  );
}

export default Main;