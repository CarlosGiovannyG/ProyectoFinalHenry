import React from 'react';
import styles from './bills.module.css'
import SwiperCore, { Pagination } from 'swiper';
import SwiperComments from '../../Components/Swiper/Swiper';
import { Modal } from '@material-ui/core';
import BillsAll from './Components/BillsAll/BillsAll';
import useAuth from '../../Auth/useAuth'
import CreateBill from './Components/CreateBill/CreateBill';
import Transsition from '../../Hooks/Transsition';
// install Swiper modules
SwiperCore.use([Pagination]);


const options = [
  { id: 1, span: 'Crear', title: 'Factura', caso: 'createBill' },
  { id: 2, span: 'Ver', title: 'Todas', caso: 'allBills' },
  { id: 3, span: 'Ver Factura', title: 'Por Cliente', caso: '' },
  { id: 4, span: 'Ver Factura', title: 'Por Mesa', caso: '' },
  { id: 5, span: 'Ver Factura', title: 'Por Estado', caso: '' },

]

const Bills = () => {

  const { modalAllBills, modalCreateBill, openCloseModal } = useAuth()
  return (
    <div className={styles.container}>
      <div className={styles.containerCentro}>
        <Transsition>
          <SwiperComments options={options} />
        </Transsition>
      </div>
      <Modal open={modalAllBills} >
        {<BillsAll close={openCloseModal} />}
      </Modal>
      <Modal open={modalCreateBill} >
        {<CreateBill close={openCloseModal} />}
      </Modal>
    </div>
  )
}

export default Bills
