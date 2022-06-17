import Card from '../components/Card'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const pokeLimit = 151
  const pokeApi = 'https://pokeapi.co/api/v2/pokemon'

  const pokeRequest = await fetch(`${pokeApi}/?limit=${pokeLimit}`)
  const pokeData = await pokeRequest.json()

  pokeData.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokeProps: pokeData.results
    }
  }
}

export default function Home({ pokeProps }) {
  return (
    <div className={styles.homeContainer}>
      <div>
        <h1 className={styles.title}>Escolha seu Pokémon!</h1>
      </div>
      <div className={styles.cardContainer}>
        {pokeProps.map(pokemon => (
          <Card key={pokemon.url} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}
