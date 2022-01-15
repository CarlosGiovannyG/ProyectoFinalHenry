import React from 'react';
import loadingGif from '../../img/loading.gif';
import s from './loading.module.css'

const Loading = () => {
  return (
    <div>
      <img className={s.loading} src={loadingGif} alt="Loading Gif" />
    </div>
  )
}

export default Loading
