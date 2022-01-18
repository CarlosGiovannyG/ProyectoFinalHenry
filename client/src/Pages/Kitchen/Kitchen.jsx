import React from 'react';
import { useQuery } from '@apollo/client';
import Queries from '../../Utils/Queries';
import s from './kitchen.module.css';
import loadingGif from '../../img/loading.gif';
import Swiper from '../../Components/Swiper/Swiper';


const Kitchen = () => {

  const { loading, data, error } = useQuery(Queries.BILLS_KITCHEN);


  if (loading) {
    return (
      <div>
        <img className={s.loading} src={loadingGif} alt="Loading Gif" />
      </div>
    )
  }
  if (error) return null


  const infoKitchen = data.BillsKitchen

  return (
    <div className={s.container}>
      <div className={s.containerCentro}>
        <Swiper infoKitchen={infoKitchen} />

      </div>

    </div>
  )
}

export default Kitchen
