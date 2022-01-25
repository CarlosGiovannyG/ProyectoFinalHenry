import React from 'react';
import { useState } from 'react';
import { Table } from 'reactstrap';
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
        <h1 className={styles.title}>CHECK IN</h1>
      </div>
      <div>

        <Table striped hover={true}>
          <thead>
            <tr >
              <th >Name</th>
              <th >Amount</th>
              <th >Total</th>
            </tr>
          </thead>
          <tbody>
            {
              checkIn?.array.map(p => (
                <tr >
                  <td >{p.name}</td>
                  <td >{p.cantidad}</td>
                  <td >{p.total}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
      <div>
        <form>
          <div className={styles.form}>
            <div className={styles.inputDiv}>
              <label className={styles.label} >Total Bill: ${checkIn?.sumatotal}</label>
              <input
                className={styles.input}
                type='text'
                name='mount'
                placeholder='Enter an amount'
                value={input}
                onChange={handleChange}
              />

            </div>
            <div className={styles.inputDiv} >
              <label
                className={styles.label}
                onChange={handleChange}
              >Change: ${input && Number(input) - Number(checkIn.sumatotal)}</label>

            </div>

            <div className={styles.inputDiv} >
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
