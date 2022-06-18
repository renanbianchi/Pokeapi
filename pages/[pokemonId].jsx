import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Details from '../components/Details'

export default function PokemonDetailsPage() {
  const router = useRouter()
  const { pokemonId } = router.query
  const [pokemonDetails, setPokemonDetails] = useState()

  useEffect(
    function () {
      async function getPokemonDetails () {
        const pokemonResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
        )
        const pokemonData = await pokemonResponse.json()
        setPokemonDetails(pokemonData)
      }

      if (!isNaN(pokemonId)) {
        getPokemonDetails()
      }
    },
    [pokemonId]
  )

  if (pokemonDetails) {
    return <Details pokemon={pokemonDetails} />
  }

  return `${pokemonId} não existe`
}
