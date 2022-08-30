import styles from '../styles/Comments.module.css'

export default function CommentForm() {
return (
      <div className={styles.commentsContainer}>
        <p>Leave a comment!</p>
          <div className={styles.data}>
            <div className={styles.dataName}>
              <label htmlFor="Name">Name:</label>
              <input value={Name} placeholder="Insert your name" type="string" id="Name" onChange={handleName} />
            </div>
            <div className={styles.dataEmail}>
              <label htmlFor="Email">E-Mail: </label>
              <input value={Email} placeholder="Insert your e-mail" type="email" id="Email" onChange={handleEmail} />
            </div>
          </div>
          <div className={styles.commentBox}>
            <label htmlFor="comment">Comment:</label>
            <textarea value={Comment} type="textarea" id="Comment" onChange={handleComment} />
          </div>
        <button className={styles.button} type='submit' onClick={handleNewComment}>SEND</button>
      </div>
  )
}

