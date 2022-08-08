import Details from '../components/Details'

export async function getServerSideProps({ params }) {
  let pokemon = null;

  if (!isNaN(params.id)) {
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
}

export default function id({ pokemon }) {
  return pokemon ? <Details pokemon={pokemon} /> : <a>Problema</a>
}