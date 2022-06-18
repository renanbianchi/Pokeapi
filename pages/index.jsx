import { useEffect, useState } from 'react'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  const [pokeList, setPokeList] = useState([])

  useEffect(function () {
    async function getPokemonList() {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?&limit=151`
      )
      const pokemonListData = await pokemonResponse.json()

      pokemonListData.results.forEach(function (item, index) {
        item.id = index + 1
      })
      setPokeList(pokemonListData.results)
    }
    getPokemonList()
  }, [])

  return (
    <div className={styles.homeContainer}>
      <div>
        <h1 className={styles.title}>Choose your Pokémon!</h1>
      </div>
      <div className={styles.cardContainer}>
        {pokeList.map(function (pokemon) {
          return <Card key={pokemon.url} pokemon={pokemon} />
        })}
      </div>
    </div>
  )
}
