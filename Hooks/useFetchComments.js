import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
  orderBy
} from 'firebase/firestore'

import { firebase } from '../firebase'
import { useEffect, useState } from 'react'

const useFetchComments = ({ pokemon }) => {
  const [results, setResults] = useState([])
  const db = getFirestore(firebase)
  const dbref = collection(db, `comments`)

  useEffect(() => {
    const fetchdata = async () => {
      const q = query(
        dbref,
        where('pokemon', '==', `${pokemon.id}`),
        orderBy('timestamp', 'desc')
      )

      onSnapshot(q, snapshot => {
        setResults(
          snapshot.docs.map(doc => ({
            name: doc.data().name,
            email: doc.data().email,
            pokemon: doc.data().pokemon,
            comment: doc.data().comment,
            date: doc.data().created_at.toDate().toLocaleString(),
            key: doc.id
          }))
        )
      })
    }
    fetchdata()
  }, [pokemon.id, dbref])
  return {
    results
  }
}
export default useFetchComments
