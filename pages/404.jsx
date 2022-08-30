import Link from 'next/link'
import React from 'react'
import styles from '../styles/Details.module.css'
import Image from 'next/image'
import MissingNo from '../img/MissingNo.png'


const Item = ({ label, value }) => (
  <div>
    <p className={styles.label}>
      <b>{label}</b>
    </p>
    <p className={styles.value}>{value}</p>
  </div>
)

const MoveNames = ({ label, moves }) => (
  <div>
    <p className={styles.label}>
      <b>{label}</b>
    </p>
    <p className={styles.moves}>
        </p>
  </div>
)

export default function NotFound() {
  return (
    <>
      <div className={styles.detailsReturn}>
        <Link href="/" >Return</Link>
      </div>
      <div className={styles.container}>
          <div className={styles.data}>
            <div className={styles.name}>
              <Item value="MissingNo" />
            </div>
            <div className={styles.description}>
              <Item value="Oh No! It seems you found the secret pokemon! Or is it a 404 page? Who knows?" 
              />
            </div>
            <div className={styles.dataContainer}>
              <div className={styles.specs}>
                <Item
                  label="Height"
                  value="?"
                />
                <Item
                  label="Weight"
                  value="?"
                />
                <Item
                  label="Moves"
                  value={"?"}
                />
                <Item label="Type" value="?" />
                <Item label="Attack" value="?" />
                <Item label="Defense" value="?" />
                <Item label="Speed" value="?" />
                <Item label="Base Experience" value="?" />
                <Item label="First Appearance" value={`pokemon Red`} 
                />
              </div>
            </div>
          </div>
          <div className={styles.ID}>
            <Item label="Pokémon ID" value={`# ?`} />
            <Image alt="pokemon image"
              className={styles.pokemonImg}
              width={400}
              height={400}
              src={MissingNo}
            />
          </div>
      </div>
    </>
  )
}