import React from 'react'

import styles from './PeopleList.module.css'

const PeopleList = ({ people }) => {
  return (
    <>
      <ul className={styles.list__container}>
        {
          people.map(({ name, id, img }) => (
            <li className={styles.list__item} key={id}>
              <a href="#">
                <img className={styles.person__photo} src={img} alt={img} />
                {name}
              </a>
            </li>
          ))
        }
      </ul>
    </>
  )
}


export default PeopleList