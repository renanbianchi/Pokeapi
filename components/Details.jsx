import styles from '../styles/Details.module.css'

const Item = ({ label, value }) => (
  <div>
    <p className={styles.label}>
      <b>{label}</b>
    </p>
    <p className={styles.value}>{value}</p>
  </div>
)

export default function Details({ pokemon }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.data}>
        <Item value={pokemon.name} />
            <div className={styles.description}><Item 
              value={`${pokemon.flavor_text_entries[1].flavor_text}`}
            /></div>
          <div className={styles.dataContainer}>
            <div className={styles.specs}>
              <Item
                label="Height"
                value={`${(pokemon.height * 0.3048).toFixed(2)} M`}
              />
              <Item
                label="Weight"
                value={`${(pokemon.weight / 2.2046).toFixed(2)} Kg`}
              />
              <div className={styles.moves}>
                <Item
                  label="Moves" 
                  value={pokemon.moves.map((element, index) => {
                    if (index <=1)
                      return element.move.name && `| ${element.move.name} | `
                    })}/>
              </div>
              <Item 
                label="Type" 
                value={pokemon.types[0].type.name} 
              />
              <Item
                label="Attack" 
                value={pokemon.stats[1].base_stat} 
              />
              <Item
                label="Defense" 
                value={pokemon.stats[2].base_stat} 
              />
              <Item
                label="Speed" 
                value={pokemon.stats[5].base_stat} 
              />
              <Item
                label="Base Experience" 
                value={pokemon.base_experience} 
              />
            </div>
          </div>
        </div>
        <img
          className={styles.pokemonImg}
          width={400}
          src={pokemon.sprites.other['official-artwork'].front_default}
        />
      </div>
    </>
  )
}
