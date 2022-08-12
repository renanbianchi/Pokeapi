import { useState } from 'react'
import { firebase } from '../firebase'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { useRouter } from 'next/router'


import styles from '../styles/Comments.module.css'
import CommentsLists from './CommentsLists'


export default function Comments() {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Comment, setComment] = useState('')
  const router = useRouter()
  const db = getFirestore(firebase)
  const dbRef = collection(db, "comments")

  function handleNewComment() {
    if(!Name || !Email || !Comment) {
      alert(`Please provide your Name, e-mail address and don't forget to write your commentary`)
      return null
    }
    
    router.query

    const commentData = { 
      name: `${Name.target.value}`,
      email: `${Email.target.value}`,
      comment: `${Comment.target.value}`,
      pokemon: `${router.query.id}`,
    };
    
    addDoc(dbRef, commentData)
    .then(alert("Comment sent sucessfully"))

    .catch((error) => {
      console.log(error);
      return alert('erro');
    })
        //addDoc(collection(getFirestore(firebase), 'comments')), commentData
  }
  return (
    <div className={styles.comments}>
    <div className={styles.commentsContainer}>
    <p>Leave a comment!</p>
    <div className={styles.data}>
    <label htmlFor="Name">Name:</label>
    <input placeholder="Insert your name" type="string" id="Name" onChange={setName} />
    <label htmlFor="Email">E-Mail: </label>
    <input placeholder="Insert your e-mail" type="email" id="email" onChange={setEmail} />
    </div>
    <div className={styles.commentbox}>
    <label htmlFor="comment">Comment:</label>
    <textarea rows={4} cols={50} placeholder="Insert your comment here" type="textarea" onChange={setComment} />
    </div>
    <button className={styles.button} type='submit' onClick={handleNewComment}>SEND</button>
    </div>
    <div className={styles.currentComments}>
     
    <p>Current Comments</p>
    {/* <CommentsLists  /> */}
    </div>
    </div>
  )
} 