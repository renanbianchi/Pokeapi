import { getFirestore, collection, query, where, onCreate, getDocs, onSnapshot } from 'firebase/firestore'
import { firebase } from '../firebase'
import { useEffect, useState,} from 'react';
import { async } from '@firebase/util';
import { useRouter } from 'next/router';


import styles from '../styles/CommentsList.module.css'
import CommentCard from './commentCard';
import { getSortedRoutes } from 'next/dist/shared/lib/router/utils';

export default function CommentsList() {
  const [comments, setComments] = useState([])
  const router = useRouter();
  
  useEffect(() => {
     const db = getFirestore(firebase);
      const fetchdata = async () => {
        const q = query(collection(db, "comments"), where("pokemon", "==", router.query.id ));
        onSnapshot(q, (snapshot) => {
        setComments(snapshot.docs.map(doc => ({
          name: doc.data().name,
          email: doc.data().email,
          pokemon: doc.data().pokemon,
          comment: doc.data().comment,
          date: doc.data().created_at.toDate().toLocaleString(),
          key: doc.id,
          bydate: doc.data().created_at.toDate()
        })
        ))
      })
    }
    fetchdata()
  }, [router.query.id])
  console.log (comments)
  return(
    (comments.length == 0 ? <div className={styles.noComment}><a>No Comment here Yet! Be the first to leave one!</a></div> : comments.map(comment => {return <CommentCard key={comment.key} comment={comment}/>})
    ))}

