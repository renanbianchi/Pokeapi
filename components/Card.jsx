import styles from '../styles/Card.module.css'

export default function Card({ pokemon }) {
  return (
    <a className={styles.cardButton} href={`/${pokemon.id}`}>
      <img
        width={100}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
      />
      <p>{pokemon.name}</p>
    </a>
  )
}
