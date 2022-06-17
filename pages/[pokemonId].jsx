import { useRouter } from "next/router"
import { useEffect, useState } from "react";

import Details from '../components/Details'

export default function PokemonDetails() {
  const router = useRouter();
  const { pokemonId } = router.query;
  const [pokemonDetails, setPokemonDetails] = useState();

  useEffect(() => {
    const getPokemonDetails = async () => {
      const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const pokemonData = await pokemonResponse.json();
      setPokemonDetails(pokemonData);
    }

    if (!isNaN(pokemonId)) {
      getPokemonDetails();
    }
  }, [pokemonId]);

  return pokemonDetails ? <Details pokemon={pokemonDetails} /> : `${pokemonId} não existe`;
}