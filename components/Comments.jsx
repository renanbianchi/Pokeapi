

import styles from '../styles/Comments.module.css'
import CommentsList from './CommentsList'
import CommentForm from './CommentForm'

export default function Comments({ pokemon }) {


  return (
    <div className={styles.comments}>
      <CommentForm pokemon={pokemon} />
      <div className={styles.currentComments}>
        <CommentsList pokemon={pokemon} />
      </div>
    </div>
  )
}
