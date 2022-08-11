import { useState } from 'react'
import { firebase,  database } from '../firebase'
import { collection, addDoc, getFirestore, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'


import styles from '../styles/Comments.module.css'


export default function Comments() {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Comment, setComment] = useState('')
  const router = useRouter()
  router.query
  console.log(router)
  
  
  function handleNewComment() {
    const db = getFirestore(firebase)
    const dbRef = collection(db, "comments")
    const commentData = { 
      Name: `${Name.target.value}`,
      Email: `${Email.target.value}`,
      Comment: `${Comment.target.value}`,
      Pokemon: `${router.asPath}`
    };
    if(!Name || !Email || !Comment) {
      alert('Preencha corretamente seu nome, email e escreva seu comentário')
    }

    

    //addDoc(collection(getFirestore(firebase), 'comments')), commentData
    addDoc(dbRef, commentData)
    .then(alert("Comment sent sucessfully"))

    .catch((error) => {
      console.log(error);
      return alert('erro');
    })
  }
  return (
    <>
    <div className={styles.commentsContainer}>
    <p>Comments:</p>
    <p>Comment list</p>
    <p>Make a comment</p>
    <label htmlFor="Name">Name:</label>
    <input placeholder="Insert your name" type="string" id="Name" onChange={setName} />
    <label htmlFor="Email">E-Mail: </label>
    <input placeholder="Insert your e-mail " type="email" id="email" onChange={setEmail} />
    <input type='textarea' onChange={setComment} />
    <button type='submit' onClick={handleNewComment}>send</button>
    </div>
    </>
  )
} 