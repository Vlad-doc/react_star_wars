import React from 'react'
import { useLocation } from 'react-router-dom'

import notFound from './img/not_found.png'

import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
  const { pathname } = useLocation();

  return (
    <>
      <img
        className={styles.img}
        src={notFound}
        alt="Not Found"
      />
      <p className={styles.text}>No match <u>{pathname}</u> </p>
    </>
  )
}

export default NotFoundPage