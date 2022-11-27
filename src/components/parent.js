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
          <div className={styles.stuTitle}>👩‍👧학부모용</div>
          <div className={styles.headLine}>
            <div className={styles.choice}>
              <p><label>어떤 상담을 원하시나요?</label></p>
              <div>취업 상담: <input type={"radio"} name={"choice"} value="jab"/></div>
              <div>진학 상담: <input type={"radio"} name={"choice"} value="further"/></div>
              <div>기타 상담: <input type={"radio"} name={"choice"} value="EtcChoice"/><input type={"text"} className={styles.inputText} id="EtcChoiceText" placeholder="ex)심리 상담"></input></div>
            </div>
          </div>


          <div className={styles.headLine}>
            <div className={styles.date}>
            <p><label>상담 날짜와 시간을 어떻게 할까요?</label></p>
              날짜:<input type={"date"} id="date" min={y+"-"+m+"-"+d} defaultValue={y+"-"+m+"-"+d} className={styles.inputText}></input>
            </div>

            <div className={styles.time}>

              <div>점심시간: <input type={"radio"} name={"time"} value="Lunch"/></div>
              <div>저녁시간: <input type={"radio"} name={"time"} value="dinner"/></div>
              <div>야자시간: <input type={"radio"} name={"time"} value="selfstudy"/></div>
              <div>기타시간: <input type={"radio"} name={"time"} value="Etc"/><input type={"time"} id="EtcTimeText" className={styles.inputText}></input></div>
            </div>
          </div>

          <div className={styles.headLine}>
            <div className={styles.privacy}>
              <p>자녀의 정보를 입력해주세요!</p>
              <div>이름: <input type={"text"} id="stuName" placeholder="ex)홍길동" className={styles.inputText}></input></div>
              <div>학번: <input type={"text"} id="stuNum" placeholder="ex)1206" className={styles.inputText}></input></div>
              <div>전화번호: <input type={"tel"} id={"stuPhoneNum"} maxLength="11" placeholder="ex)01012341234" className={styles.inputText}></input></div>
            </div>

          </div>

          <div className={styles.LastheadLine}>
            <div className={styles.privacy}>
              <p>학부모 본인의 정보를 입력해주세요!</p>
              <div>이름: <input type={"text"} id="parentName" placeholder="ex)홍길동" className={styles.inputText}></input></div>
              <div>관계:  <input type={"radio"} name={"gender"} value="dad"/>부 <input type={"radio"} name={"gender"} value="mom"/>모</div>
              <div>전화번호: <input type={"tel"} id={"parentPhoneNum"} maxLength="11" placeholder="ex)01012341234" className={styles.inputText}></input></div>
            </div>
            <input type={"submit"} id="submit" value={"신청하기"} className={styles.submit}></input>
          </div>

          
          </form>   
      </div>
    </div>
    </div>
  );
};

export default Parent;