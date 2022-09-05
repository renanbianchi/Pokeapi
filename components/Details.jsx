import Link from 'next/dist/client/link'
import styles from '../styles/Details.module.css'
import Comments from './Comments'
import Image from 'next/image'
import React from 'react'

const Item = ({ label, value }) => (
  <div>
    <p className={styles.label}>
      <b>{label}</b>
    </p>
    <p className={styles.value}>{value}</p>
  </div>
)

const MoveNames = ({ label, moves }) => (
  <div>
    <p className={styles.label}>
      <b>{label}</b>
    </p>
    {moves.map((move, index) => {
      if (index < 10)
        return (
          <p className={styles.moves} key={move}>
            {move}
          </p>
        )
    })}
  </div>
)

export default function Details({ pokemon }) {
  return (
    <>
      <div className={styles.detailsReturn}>
        <Link href="/">Return</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.data}>
          <div className={styles.name}>
            <Item value={pokemon.name} />
          </div>
          <div className={styles.description}>
            <Item
              value={
                pokemon.flavor_text_entries.filter(description =>
                  description.language.name.includes('en')
                )[0].flavor_text
              }
            />
          </div>
          <div className={styles.dataContainer}>
            <div className={styles.specs}>
              <Item
                label="Height"
                value={`${(pokemon.height * 0.3048).toFixed(2)} M`}
              />
              <Item
                label="Weight"
                value={`${(pokemon.weight / 2.2046).toFixed(2)} Kg`}
              />
              <div>
                <a className={styles.labelmoves}>Moves</a>
                <div className={styles.movesContainer}>
                  <MoveNames
                    moves={pokemon.moves.map(element => {
                      return element.move.name
                    })}
                  />
                </div>
              </div>
              <Item label="Type" value={pokemon.types[0].type.name} />
              <Item label="Attack" value={pokemon.stats[1].base_stat} />
              <Item label="Defense" value={pokemon.stats[2].base_stat} />
              <Item label="Speed" value={pokemon.stats[5].base_stat} />
              <Item label="Base Experience" value={pokemon.base_experience} />
              {pokemon.game_indices.length === 0 ? null : (
                <Item
                  label="First Appearance"
                  value={`pokemon ${pokemon.game_indices[0].version.name}`}
                />
              )}
            </div>
          </div>
        </div>
        <div className={styles.ID}>
          <Item label="Pokémon ID" value={`# ${pokemon.id}`} />
          <Image
            alt="pokemon image"
            className={styles.pokemonImg}
            width={400}
            height={400}
            src={pokemon.sprites.other['official-artwork'].front_default}
          />
        </div>
      </div>
      <div className={styles.commentPosition}>
        <Comments pokemon={pokemon} />
      </div>
    </>
  )
}
