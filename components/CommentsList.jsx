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

import styles from '../styles/CommentsList.module.css'
import CommentCard from './CommentCard'

export default function CommentsList({ pokemon }) {
  const [comments, setComments] = useState([])

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
        setComments(
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

  return comments.length == 0 ? (
    <div className={styles.noComment}>
      <a>No Comment here Yet! Be the first to leave one!</a>
    </div>
  ) : (
    comments.map(comment => {
      return <CommentCard key={comment.key} comment={comment} />
    })
  )
}
