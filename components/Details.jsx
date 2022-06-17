import Link from 'next/link'
import styles from '../styles/Details.module.css'

const Item = ({label, value}) => (
  <div>
    <p>{label}</p>
    <p>{value}</p>
  </div>
)

export default function Details({ pokemon }) {
  return (
    <div className={styles.detailsContainer}>
      <Link className={styles.detailsReturn} href="/">Return</Link>
      <div>
        <Item label="Name" value={pokemon.name} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        {pokemon.types.map(({type}) => (
          <p key={type.name}>{type.name}</p>
        ))}
      </div>
      <img
        width={300}
        src={pokemon.sprites.other['official-artwork'].front_default}
      />
    </div>
  )
}
