import styles from '../styles/CommentsList.module.css'

export default function CommentCard({ comment }) {
  return (
    <>
      <div className={styles.commentContainer}>
      <p> On {comment.date}</p> 
      
         <p>{comment.name} said: {comment.comment}</p>
      <p>contact info: {comment.email}</p>
         
      </div>
    </>
  )
}