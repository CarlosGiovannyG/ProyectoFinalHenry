import React from 'react';
import { useState } from 'react';
import styles from './checkIn.module.css'


const CheckIn = ({ close, checkIn, handlePaidBill }) => {
  
  const [input, setinput] = useState();

  const handleChange = (e) => {
    setinput(e.target.value)
  }

  const handleSubmit = (e) => {
  e.preventDefault();
    handlePaidBill()
    close()
  }

  return (
      <div className={styles.container} >
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Check In</h1>
        </div>
        <div>
          <form>
            <div className={styles.form}>
              <div className={styles.inputDiv}>
                <label className={styles.label} >Total: ${checkIn}</label>
                <input
                  className={styles.input}
                  type='number'
                  name='mount'
                  placeholder='Enter an amount'
                  value={input}
                  onChange={handleChange}                
                />
              </div>
              <div className={styles.inputDiv}>
                <label
                  className={styles.label}
                  onChange={handleChange}
                >Change: ${input && Number(input) - Number(checkIn)}</label>
              </div>
              
              <div className={styles.inputDiv}>
                {
                  <button
                    className={styles.input}
                    type="submit"
                   onClick={handleSubmit}
                  >CONFIRM</button>
                }
              </div>
            </div>
          </form>
        </div>
      </div>
  );
};

export default CheckIn;
