import { useState } from 'react'
import { firebase } from '../firebase'
import { collection, addDoc, getFirestore, } from 'firebase/firestore'
import { useRouter } from 'next/router'


import styles from '../styles/Comments.module.css'
import CommentsList from './CommentsList'


export default function Comments() {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Comment, setComment] = useState('');
  const router = useRouter();
  const db = getFirestore(firebase);
  const dbRef = collection(db, "comments");
  
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
      created_at: new Date()
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
    
    <div className={styles.dataName}>
    <label htmlFor="Name">Name:</label>
    <input placeholder="Insert your name" type="string" id="Name" onChange={setName} />
    </div>
    <div className={styles.dataEmail}>
    <label htmlFor="Email">E-Mail: </label>
    <input placeholder="Insert your e-mail" type="email" id="email" onChange={setEmail} />
    </div>
    </div>
    <div className={styles.commentBox}>
    <label htmlFor="comment">Comment:</label>
    <textarea type="textarea" onChange={setComment} />
    </div>
    <button className={styles.button} type='submit' onClick={handleNewComment}>SEND</button>
    </div>
    <div className={styles.currentComments}>
      <CommentsList />
    </div>
    </div>
  )
} 