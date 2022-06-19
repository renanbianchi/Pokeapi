import Link from 'next/link'
import styles from '../styles/Details.module.css'

const Item = ({ label, value }) => (
  <div>
    <p className={styles.label}><b>{label}</b></p>
    <p className={styles.value}>{value}</p>
  </div>
)

export default function Details({ pokemon }) {
  return (
    <>
      <div className={styles.container}>
      <div className={styles.data}>
            <Item value={pokemon.name} />
        <div className={styles.dataContainer}>
            <Item label="Height" value={pokemon.height} />
            <Item label="Weight" value={pokemon.weight} />
          <p><b>Type</b></p>
          {pokemon.types.map(({ type }) => (
            <p className={styles.detailStyles} key={type.name}>
              {type.name}
            </p>
          ))}
          <p><b>Moves</b></p>
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
