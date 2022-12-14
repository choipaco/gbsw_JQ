import styles from "../css/stu.module.css";


function Parent(){
  let now = new Date();
  let y = now.getFullYear();
  let m = now.getMonth() + 1; 
  let d = now.getDate();


  return(
    
    <div className={styles.outImg}>
    <div className={styles.inImg}>
      <div className={styles.stuDiv}>
        
        <form>
          <div className={styles.stuTitle}>π©βπ§νλΆλͺ¨μ©</div>
          <div className={styles.headLine}>
            <div className={styles.choice}>
              <p><label>μ΄λ€ μλ΄μ μνμλμ?</label></p>
              <div>μ·¨μ μλ΄: <input type={"radio"} name={"choice"} value="jab"/></div>
              <div>μ§ν μλ΄: <input type={"radio"} name={"choice"} value="further"/></div>
              <div>κΈ°ν μλ΄: <input type={"radio"} name={"choice"} value="EtcChoice"/><input type={"text"} className={styles.inputText} id="EtcChoiceText" placeholder="ex)μ¬λ¦¬ μλ΄"></input></div>
            </div>
          </div>


          <div className={styles.headLine}>
            <div className={styles.date}>
            <p><label>μλ΄ λ μ§μ μκ°μ μ΄λ»κ² ν κΉμ?</label></p>
              λ μ§:<input type={"date"} id="date" min={y+"-"+m+"-"+d} defaultValue={y+"-"+m+"-"+d} className={styles.inputText}></input>
            </div>

            <div className={styles.time}>

              <div>μ μ¬μκ°: <input type={"radio"} name={"time"} value="Lunch"/></div>
              <div>μ λμκ°: <input type={"radio"} name={"time"} value="dinner"/></div>
              <div>μΌμμκ°: <input type={"radio"} name={"time"} value="selfstudy"/></div>
              <div>κΈ°νμκ°: <input type={"radio"} name={"time"} value="Etc"/><input type={"time"} id="EtcTimeText" className={styles.inputText}></input></div>
            </div>
          </div>

          <div className={styles.headLine}>
            <div className={styles.privacy}>
              <p>μλμ μ λ³΄λ₯Ό μλ ₯ν΄μ£ΌμΈμ!</p>
              <div>μ΄λ¦: <input type={"text"} id="stuName" placeholder="ex)νκΈΈλ" className={styles.inputText}></input></div>
              <div>νλ²: <input type={"text"} id="stuNum" placeholder="ex)1206" className={styles.inputText}></input></div>
              <div>μ νλ²νΈ: <input type={"tel"} id={"stuPhoneNum"} maxLength="11" placeholder="ex)01012341234" className={styles.inputText}></input></div>
            </div>

          </div>

          <div className={styles.LastheadLine}>
            <div className={styles.privacy}>
              <p>νλΆλͺ¨ λ³ΈμΈμ μ λ³΄λ₯Ό μλ ₯ν΄μ£ΌμΈμ!</p>
              <div>μ΄λ¦: <input type={"text"} id="parentName" placeholder="ex)νκΈΈλ" className={styles.inputText}></input></div>
              <div>κ΄κ³:  <input type={"radio"} name={"gender"} value="dad"/>λΆ <input type={"radio"} name={"gender"} value="mom"/>λͺ¨</div>
              <div>μ νλ²νΈ: <input type={"tel"} id={"parentPhoneNum"} maxLength="11" placeholder="ex)01012341234" className={styles.inputText}></input></div>
            </div>
            <input type={"submit"} id="submit" value={"μ μ²­νκΈ°"} className={styles.submit}></input>
          </div>

          
          </form>   
      </div>
    </div>
    </div>
  );
};

export default Parent;