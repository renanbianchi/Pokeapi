import React from 'react'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`
  )
  const pokemonLists = await pokemonResponse.json()

  pokemonLists.results.map((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemonList: pokemonLists.results
    }
  }
}

export default function HomePage({ pokemonList }) {
  return (
    <div className={styles.homeContainer}>
      <div>
        <h1 className={styles.title}>Choose your Pokémon!</h1>
      </div>
      <div className={styles.cardContainer}>
        {pokemonList ? (
          pokemonList.map(pokemon => {
            return <Card key={pokemon.url} pokemon={pokemon} />
          })
        ) : (
          <a>Loading</a>
        )}
      </div>
    </div>
  )
}
