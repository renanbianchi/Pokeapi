import Link from 'next/link'
import styles from '../styles/Card.module.css'

export default function Card({ pokemon }) {
  return (
    <>
      <Link href={`/pokemon/${pokemon.id}`}>
        <a className={styles.cardButton}>
          <img
            width={100}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          />
          <p>{pokemon.name}</p>
        </a>
      </Link>
    </>
  )
}

/*alternative picture using same picture as Details.jsx`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`*/
