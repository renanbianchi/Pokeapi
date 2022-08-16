import React from 'react'
import Card from '../components/Card'
import styles from '../styles/Home.module.css'


let offset = 0
/* async function handleNextPage({pokemonPaths}) {
  offset = offset + 50
  setpokemonPage(pokemonPaths.next)
  
} */

//const [pokemonPage, setpokemonPage] = useState(`https://pokeapi.co/api/v2/pokemon/`)

export async function getStaticProps() {
  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151&offset=00`)

  const pokemonLists = await pokemonResponse.json()
    
    pokemonLists.results.forEach(function (item, index) {
      item.id = index + 1
    })
    
    return {
      props: {  
        pokemonPaths: pokemonLists.next,
        pokemonList: pokemonLists.results }
      }
    }

    
export default function HomePage({pokemonList}) {
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
          <a>Carregando</a>
        )}
      </div>
     {/*  <div>
          
          <button onClick={handleNextPage}>oi</button>
          
        </div> */}

    </div>
  )
}
