import styles from '../styles/CommentCard.module.css'

export default function CommentCard({ comment }) {
  return (
    <>
      <div className={styles.commentContainer}>
        <p> On {comment.date}</p>
        <p>
          <b>{comment.name} said:</b> {comment.comment}
        </p>
        {comment.email ? <p>Contact Info: {comment.email}</p> : null}
      </div>
    </>
  )
}
