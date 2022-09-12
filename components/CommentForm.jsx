import { useState } from 'react'
import { firebase } from '../firebase'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

import styles from '../styles/Comments.module.css'

export default function CommentForm({ pokemon }) {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Comment, setComment] = useState('')
  const db = getFirestore(firebase)
  const dbRef = collection(db, 'comments')

  const commentData = {
    name: `${Name}`,
    email: `${Email}`,
    comment: `${Comment}`,
    pokemon: `${pokemon.id}`,
    created_at: new Date(),
    timestamp: new Date().toLocaleString()
  }

  const handleName = N => {
    setName(N.target.value)
  }

  const handleEmail = E => {
    setEmail(E.target.value)
  }

  const handleComment = C => {
    setComment(C.target.value)
  }

  function handleNewComment() {
    if (!Name || !Comment) {
      alert(
        `Please provide your Name and don't forget to write your commentary`
      )
      return null
    }

    addDoc(dbRef, commentData)
      .then(setComment(''), setEmail(''), setName(''))
      .then(alert('Comment sent sucessfully'))

      .catch(error => {
        console.log(error)
        return alert('error')
      })
  }
  return (
    <div className={styles.commentsContainer}>
      <p>Leave a comment!</p>
      <div className={styles.data}>
        <div className={styles.dataName}>
          <label htmlFor="Name">Name*: </label>
          <input
            value={Name}
            placeholder="Insert your name"
            type="string"
            id="Name"
            required={true}
            onChange={handleName}
          />
        </div>
        <div className={styles.dataEmail}>
          <label htmlFor="Email">E-Mail: </label>
          <input
            value={Email}
            placeholder="Insert your e-mail (optional)"
            type="email"
            id="Email"
            onChange={handleEmail}
          />
        </div>
      </div>
      <div className={styles.commentBox}>
        <label htmlFor="comment">Comment*:</label>
        <textarea
          value={Comment}
          type="textarea"
          id="Comment"
          required="required"
          onChange={handleComment}
        />
      </div>
      <button
        className={styles.button}
        type="submit"
        onClick={
          handleNewComment /* useSendComments({ pokemon }, Name, Email, Comment) */
        }
      >
        SEND
      </button>
    </div>
  )
}
