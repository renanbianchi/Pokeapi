import Link from 'next/link'
import styles from '../styles/Card.module.css'
import Image from 'next/image'

export default function Card({ pokemon }) {
  return (
    <>
      <Link
        prefetch={false}
        pokemon={pokemon}
        href={`/pokemon/${pokemon.name}`}
      >
        <a className={styles.cardButton}>
          <div className={styles.image}>
            <Image
              priority={true}
              placeholder="color"
              alt="pokemon image"
              width={100}
              height={100}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            />
          </div>
          <p>{pokemon.name}</p>
        </a>
      </Link>
    </>
  )
}

//alternative picture using same picture as Details.jsx | https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png

//Classic Sprites! Check Width and height to 100 for better viewing | https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/${pokemon.id}.png

//Animated Sprites! Check Width to 80 and height to 65 for better viewing | https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemon.id}.gif

//Static Sprites! Check Width and height to 100 for better viewing | https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png
