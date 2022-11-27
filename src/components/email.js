import styles from '../css/email.module.css';

const Email = () =>{
  return(
    <>
    <div className={styles.outImg}>
      <div className={styles.inImg}>
        <div className={styles.backgroundEmail}>
            <div className={styles.felxEmail}>
              <div className={styles.EmailTitle}>첫번째 이용은 이메일 인증이 필요합니다.</div>
              <div>
                <div>
                  <label>email:</label><input type={"email"} className={styles.inputText}></input>
                  <button type={"submit"}>이메일 발송</button>
                </div>
                <div className={styles.dd}>
                  <label>인증번호:</label><input type={"text"} className={styles.inputText}></input>
                  <button type={"submit"}>인증하기</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Email;