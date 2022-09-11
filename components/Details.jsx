import Link from 'next/dist/client/link'
import styles from '../styles/Details.module.css'
import Comments from './Comments'
import Image from 'next/image'
import React from 'react'
import MissingNo from '../img/MissingNo.webp'

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
        <Link prefetch={false} href="/">Return</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.data}>
          <div className={styles.name}>
            <Item value={pokemon ? pokemon.name : 'MissingNo'} />
          </div>
          <div className={styles.description}>
            <Item
              value={
                pokemon
                  ? pokemon.flavor_text_entries.filter(description =>
                      description.language.name.includes('en')
                    )[0].flavor_text
                  : 'Oh No! It seems you found the secret pokemon! Or is it a 404 page? Who knows?'
              }
            />
          </div>
          <div className={styles.dataContainer}>
            <div className={styles.specs}>
              <Item
                label="Height"
                value={`${
                  pokemon ? (pokemon.height * 0.3048).toFixed(2) : `?`
                } M`}
              />
              <Item
                label="Weight"
                value={`${
                  pokemon ? (pokemon.weight / 2.2046).toFixed(2) : `?`
                } Kg`}
              />

              {pokemon ? (
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
              ) : (
                <Item label="Moves" value={'?'} />
              )}

              <Item
                label="Type"
                value={pokemon ? pokemon.types[0].type.name : '?'}
              />
              <Item
                label="Attack"
                value={pokemon ? pokemon.stats[1].base_stat : '?'}
              />
              <Item
                label="Defense"
                value={pokemon ? pokemon.stats[2].base_stat : '?'}
              />
              <Item
                label="Speed"
                value={pokemon ? pokemon.stats[5].base_stat : '?'}
              />
              <Item
                label="Base Experience"
                value={pokemon ? pokemon.base_experience : '?'}
              />
              {pokemon ? (
                pokemon.game_indices.length === 0 ? null : (
                  <Item
                    label="First Appearance"
                    value={`pokemon ${pokemon.game_indices[0].version.name}`}
                  />
                )
              ) : (
                <Item label="First Appearance" value={`pokemon Red`} />
              )}
            </div>
          </div>
        </div>
        <div className={styles.ID}>
          <Item label="Pokémon ID" value={`# ${pokemon ? pokemon.id : '?'}`} />
          <Image
            alt="pokemon image"
            className={styles.pokemonImg}
            width={400}
            height={400}
            src={
              pokemon
                ? pokemon.sprites.other['official-artwork'].front_default
                : MissingNo
            }
          />
        </div>
      </div>
      {pokemon ? (
        <div className={styles.commentPosition}>
          <Comments pokemon={pokemon} />
        </div>
      ) : null}
    </>
  )
}
