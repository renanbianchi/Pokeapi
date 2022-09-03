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

  useEffect(() => {
    const db = getFirestore(firebase)
    const dbref = collection(db, 'comments')
    const fetchdata = async () => {
      const q = query(
        dbref,
        where('pokemon', '==', `${pokemon.id}`),
        orderBy('timestamp')
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
  }, [pokemon.id])
  return {
    results
  }
}
export default useFetchComments
