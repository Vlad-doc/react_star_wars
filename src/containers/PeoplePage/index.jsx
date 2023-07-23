import React, { useEffect, useState } from 'react'

import PeopleList from '../../components/PeoplePage/PeopleList'
import { getApiResource } from '../../utils/network'
import { API_PEOPLE, HTTPS } from '../../constants/api'
import { getPeopleId, getPeopleImage } from '../../services/getPeopleData'

import styles from './PeoplePage.module.css'

const PeoplePage = () => {
  const [people, setPeople] = useState(null)

  useEffect(() => {
    const getPeopleData = async (url) => {
      const data = await getApiResource(url)
      const peopleList = data.results.map(({ name, url }) => {
        const id = getPeopleId(url)
        const img = getPeopleImage(id)

        return { name, id, img }
      })

      setPeople(peopleList)
    };

    getPeopleData(`${HTTPS}${API_PEOPLE}`)
  }, [])

  return (
    <>
      {people && <PeopleList people={people} />}
    </>
  )
}

export default PeoplePage