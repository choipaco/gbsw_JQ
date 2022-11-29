import styles from '../css/weit.module.css';


function Weit(){
  return(
    <>
      <div className={styles.outImg}>
        <div className={styles.inImg}>
          <div className={styles.weitSection}>



            <div className={styles.weitBox}>
              <div className={styles.weitContainer}>
                <div><label>수락 대기 중</label> <label>date</label> <label>time</label></div>
                <div className={styles.weitinfo}>
                  <div>이름: <label>name</label></div>
                  <div>학번: <label>stuNum</label></div>
                  <div>학부모 여부: <label>o/x</label></div>  
                </div>
              </div>
            </div>
            <div className={styles.weitBox}>
              <div className={styles.weitContainer}>
                <div><label>수락 대기 중</label> <label>date</label> <label>time</label></div>
                <div className={styles.weitinfo}>
                  <div>이름: <label>name</label></div>
                  <div>학번: <label>stuNum</label></div>
                  <div>학부모 여부: <label>o/x</label></div>  
                </div>
              </div>
            </div>
            



          </div>
        </div>
      </div>
    </>
  )
}


export default Weit;