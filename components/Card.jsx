import Link from 'next/link'
import styles from '../styles/Card.module.css'
import Image from 'next/image'

export default function Card({ pokemon }) {
  return (
    <>
      <Link pokemon={ pokemon } href={`/pokemon/${pokemon.name}`}> 
        <a className={styles.cardButton}>
          <div className={styles.image}>
          <Image alt='pokemon image'
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

//Animated Sprites! Check Width and height to 70 for better viewing | https://play.pokemonshowdown.com/sprites/gen5ani/${pokemon.name.replace(/-|NORMAL|PLANT|/gi,'')}.gif
//Also, replace <p> with this : {pokemon.name.replace(/-|NORMAL|PLANT|/gi,'')}
//Don't go any further than Palkia(484) or the sprites will start to break.

//Static Sprites! Check Width and height to 100 for better viewing | https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png