import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import React from 'react'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'
import id from './pokemon/[id]'


export async function getStaticProps() {
  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`)
  const pokemonLists = await pokemonResponse.json()

  pokemonLists.results.forEach(function (item, index) {
    item.id = index +1
  })
  
  return {
    props: {  
      pokemonList: pokemonLists
    }}
  }
  
  
  export default function HomePage({pokemonList}) {
    return (
      <div className={styles.homeContainer}>
      <div>
        <h1 className={styles.title}>Choose your Pokémon!</h1>
      </div>
      <div className={styles.cardContainer}>
        {pokemonList ? (
          pokemonList.results.map(pokemon => {
            return <Card key={pokemon.url} pokemon={pokemon} />
          })
          ) : (
            <a>Loading</a>
            )}
      </div>
     </div>
  )
}
