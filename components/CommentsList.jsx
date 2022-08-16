import { getFirestore, collection, query, where, onSnapshot, getDocs, getDoc, doc, documentId} from 'firebase/firestore'
import { firebase } from '../firebase'
import { useEffect, useState,} from 'react';
import { async } from '@firebase/util';

import styles from '../styles/CommentsList.module.css'
import CommentCard from './commentCard';

export default function CommentsList() {
  const [comments, setComments] = useState([])
  
   useEffect(() => {
    const fetchdata = async () => {
      const db = getFirestore(firebase);
        const q = query(collection(db, "comments"))
        const querySnapshot = await getDocs(q)
        
       async( setComments(querySnapshot.docs.map(doc => ({
        name: doc.data().name,
        email: doc.data().email,
        pokemon: doc.data().pokemon,
        comment: doc.data().comment,
        date: doc.data().created_at.toDate().toLocaleString(),
        key: doc.id

      }))))}
      fetchdata()
      
    }, [setComments])
  return(
    (comments.length == 0 ? <div className={styles.noComment}><a>No Comment here Yet! Be the first to leave one!</a></div> : comments.map(comment => {return <CommentCard key={comment.key} comment={comment}/>})
    ))}


