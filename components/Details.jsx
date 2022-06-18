import Link from 'next/link'
import styles from '../styles/Details.module.css'

const Item = ({ label, value }) => (
  <div>
    <p className={styles.label}>{label}</p>
    <p className={styles.value}>{value}</p>
  </div>
)

export default function Details({ pokemon }) {
  return (
    <>
      <Link href="/">
        <a className={styles.returnButton}>Return</a>
      </Link>
      <div className={styles.container}>
        <div>
          <Item label="Name" value={pokemon.name} />
          <Item label="Height" value={pokemon.height} />
          <Item label="Weight" value={pokemon.weight} />

          <p>Type</p>
          {pokemon.types.map(({ type }) => (
            <p className={styles.detailStyles} key={type.name}>
              {type.name}
            </p>
          ))}

          <p className={styles.movestitle}>Moves</p>
          <div className={styles.movescontainer}>
            {pokemon.moves.map(function (element, index) {
              if (index < 2) {
                return <p key={element.move.name}>{element.move.name}</p>
              }
              return null
            })}
          </div>
        </div>
        <img
          width={300}
          src={pokemon.sprites.other['official-artwork'].front_default}
        />
      </div>
    </>
  )
}
