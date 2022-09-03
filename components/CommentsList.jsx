import useFetchComments from '../Hooks/useFetchComments'

import styles from '../styles/CommentsList.module.css'
import CommentCard from './CommentCard'

export default function CommentsList(pokemon) {
  const comments = useFetchComments(pokemon)

  return comments.results.length == 0 ? (
    <div className={styles.noComment}>
      <a>No Comment here Yet! Be the first to leave one!</a>
    </div>
  ) : (
    comments.results.map(comment => {
      return <CommentCard key={comment.key} comment={comment} />
    })
  )
}
