import NotFound from '../404'
import Details from '../../components/Details'

export async function getStaticPaths(pokemon) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`
  )
  const pokemonList = await res.json()

  const paths = pokemonList.results.map(pokemon => ({
    params: { id: pokemon.name }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  let pokemon = null
  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  )
  const pokemonBase = await pokemonResponse.json()

  const pokemonSpeciesResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${params.id}`
  )
  const pokemonSpecies = await pokemonSpeciesResponse.json()

  pokemon = {
    ...pokemonBase,
    ...pokemonSpecies
  }

  return {
    props: { pokemon }
  }
}

/*  export async function getServerSideProps({ params }) {
  let pokemon = null

  if (!isNaN (params.id) ) {
    const pokemonResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${params.id}`
    )

  const pokemonBase = await pokemonResponse.json()

    const pokemonSpeciesResponse = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${params.id}`
    )
    const pokemonSpecies = await pokemonSpeciesResponse.json()

    pokemon = {
      ...pokemonBase,
      ...pokemonSpecies
    }
  }

  return {
    props: { pokemon }
  }
}  */

export default function id({ pokemon }) {
  return pokemon ? <Details pokemon={pokemon} /> : <NotFound />
}
