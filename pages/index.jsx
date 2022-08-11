import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=151`
    //link/pokemon?limit=20&offset=60
  )
  const pokemonList = await pokemonResponse.json()

  pokemonList.results.forEach(function (item, index) {
    item.id = index +1
  })

  return {
    props: { pokemonList: pokemonList.results }
  }
}

export default function HomePage({ pokemonList, }) {
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
      {/* <div>
        <Link href={.flavor_text}><a>oi</a></Link>
      </div> */}

    </div>
  )
}
