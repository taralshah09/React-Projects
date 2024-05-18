// import React from 'react'
import styles from "./ContactBox.module.css"

const ContactBox = () => {
    console.log(styles)
  return (
    <div className={styles.contactBox}>
      <div className={styles.col}>
        <div id={styles.btnsBox}>
            <button id={styles.chat}><i class="fa-regular fa-comment"></i>Via Chat</button>
            <button id={styles.call}><i class="fa-solid fa-phone"></i>Via Call</button>
            <button id={styles.email}><i class="fa-regular fa-envelope"></i> Via EMAIL form</button>
        </div>
        <div className={styles.inputField}>
            <div className={styles.inputBox}>
                <label htmlFor={styles.name} className={styles.label}>Name</label>
                <input type="text" id={styles.name} className={styles.input} />
            </div>
            <div className={styles.inputBox}>
                <label htmlFor={styles.email} className={styles.label}>EMAIL</label>
                <input type="text" id={styles.email} className={styles.input} />
            </div>
            <div className={styles.inputBox}>
                <label htmlFor={styles.text} className={styles.label}>TEXT</label>
                <input type="text" id={styles.text} className={styles.input} />
            </div>
            <button type="submit" id={styles.submitBtn}>Submit</button>
        </div>
      </div>
      <div className={styles.col}>

      </div>    
      
    </div>
  )
}

export default ContactBox
