import React, { useEffect, useState } from 'react'

import PeopleList from '@components/PeoplePage/PeopleList'
import { getApiResource } from '@utils/network'
import { API_PEOPLE, HTTPS } from '@constants/api'
import { getPeopleId, getPeopleImage } from '@services/getPeopleData'
import withApiError from '@hoc/withApiError'

import styles from './PeoplePage.module.css'

const PeoplePage = ({ setApiError }) => {
  const [people, setPeople] = useState(null)

  useEffect(() => {
    const getPeopleData = async (url) => {
      const data = await getApiResource(url)
      if (data) {
        const peopleList = data.results.map(({ name, url }) => {
          const id = getPeopleId(url)
          const img = getPeopleImage(id)

          return { name, id, img }
        })
        setPeople(peopleList)
        setApiError(false)
      } else {
        setApiError(true)
      }
    };

    getPeopleData(`${HTTPS}${API_PEOPLE}`)
  }, [])

  return (
    <>
      <div className='header__text'>
        Navigation
      </div>
      {
        people && <PeopleList people={people} />
      }
    </>
  )
}

export default withApiError(PeoplePage)