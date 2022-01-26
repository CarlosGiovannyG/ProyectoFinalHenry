import React, { useState } from 'react';
import styles from './bills.module.css';
import { Table } from 'reactstrap'
import CreateBill from './Components/CreateBill/CreateBill';
import useModal from '../../Hooks/useModal';
import Modal from '../../Components/Modal/Modal';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';
import Mutations from '../../Utils/Mutations';
import Loading from '../../Components/Loading/Loading';
import { GrEdit, GrCheckmark, GrTrash } from 'react-icons/gr';
import ReactTooltip from 'react-tooltip';
import BillDetail from './Components/BillDetail/BillDetail';
import CheckIn from './Components/CheckIn/CheckIn';
import toast from 'react-hot-toast';


const Prueba = () => {
  

  const [checkIn, setCheckIn] = useState(null)
  const [isOpenCreateBill, openCreateBill, closeCreateBill] = useModal();
  const [isOpenBillDetail, openBillDetail, closeBillDetail] = useModal();
  const [isOpenCheckIn, openCheckIn, closeCheckIn] = useModal();
  const [billDeatil, setBillDeatil] = useState(null)
  const [billId, setBillId] = useState(null)

  const [PaidBill] = useMutation(Mutations.PAID_BILL, {
    refetchQueries: [{ query: Queries.ALL_BILLS }],
    onError: error => { console.log(error.graphQLErrors) }
  });

  const [DeleteBill] = useMutation(Mutations.DELETE_BILL, {
    refetchQueries: [{ query: Queries.ALL_BILLS }],
    onError: error => { console.log(error.graphQLErrors) }
  });



  const { loading, data, error } = useQuery(Queries.ALL_BILLS); // TODO: , { pollInterval: 5000 }
  const [getBillId] = useLazyQuery(Queries.BILL_BY_ID);
  const [BillsCheckIn] = useLazyQuery(Queries.BILL_CHECK_IN);
  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    )
  }
  if (error) return null

  const datos = data.allBills

  const billById = async (id) => {
    openBillDetail()
    let resultado = await getBillId({ variables: { input: { id: id } } })

    let bill = resultado.data.BillsById
    setBillDeatil(bill)

  }

  const handleCheckIn = async (id) => {

    let resultado = await BillsCheckIn({ variables: { input: { id: id } } })
    const { sumatotal, array } = resultado.data.BillsCheckIn
    setCheckIn({ sumatotal, array })
    setBillId(id)
    openCheckIn()

  }

  const handlePaidBill = async () => {
    let response = await PaidBill({
      variables: {
        "input": {
          "id": billId
        }
      }

    })

    let res = response.data.PaidBill.message
    toast.success(res)

  }

  const handleClosedBill = async (id) => {

    let response = await DeleteBill({
      variables: {
        "input": {
          "id": id
        }
      }

    })

    let res = response.data.DeleteBill.message
    toast.success(res)

  }

  return (
    <div className={styles.container} >
      <div className={styles.containerCenter}>
        <button className={styles.Create} onClick={openCreateBill}>CREATE BILL</button>
        <div className={styles.containerTable}>
          <Table striped hover={true} >
            <thead>
              <tr>
                <th  >Table Number</th>
                <th >Descriptions</th>
                <th >Type of Order</th>
                <th >Status</th>
                <th >Status Kitchen</th>
                <th >Subtotal</th>
                <th >Total</th>
                <th >Edit</th>
                <th >Check In</th>
                <th >Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                datos.map(dato => (
                  <tr>
                    <td >{dato.numeroMesa}</td>
                    <td>{dato.description}</td>
                    <td>{dato.tipoDePedido}</td>
                    <td>{dato.status}</td>
                    <td>{dato.statusCocina}</td>
                    <td>{dato.subTotal}</td>
                    <td>{dato.total}</td>
                    <td >
                      <GrEdit
                        size='1.5rem'
                        data-tip data-for='edit'
                        onClick={() => {
                          billById(dato._id)
                        }}
                      />
                    </td>
                    <td ><GrCheckmark
                      size='1.5rem'
                      data-tip data-for='save'
                      onClick={() => {
                        handleCheckIn(dato._id)
                      }}
                    /></td>
                    <td ><GrTrash
                      size='1.5rem'
                      data-tip data-for='delete'
                      onClick={() => {
                        handleClosedBill(dato._id)
                      }}
                    /></td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
          <ReactTooltip id='edit' place='left' effect="solid" > Edit Invoice </ReactTooltip>
          <ReactTooltip id='save' place='left' effect="solid" > Check In </ReactTooltip>
          <ReactTooltip id='delete' place='left' effect="solid" >DELETE </ReactTooltip>
        </div>
      </div>
      <Modal isOpen={isOpenCreateBill} closeModal={closeCreateBill} >
        {<CreateBill close={closeCreateBill} />}
      </Modal>
      <Modal isOpen={isOpenBillDetail} closeModal={closeBillDetail} >
        {<BillDetail close={closeBillDetail} billDeatil={billDeatil} setBillDeatil={setBillDeatil} />}
      </Modal>
      <Modal isOpen={isOpenCheckIn} closeModal={closeCheckIn} >
        {<CheckIn close={closeCheckIn} checkIn={checkIn} handlePaidBill={handlePaidBill} />}
      </Modal>
    </div>
  )
}

export default Prueba
