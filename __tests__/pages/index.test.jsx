import { render, screen } from "@testing-library/react";
import Card from "../../components/Card";
import '@testing-library/jest-dom/extend-expect';
import HomePage, { getStaticProps } from '../../pages/index';
import React from "react";


describe('Home', () => {
  it('renders pokemon cards', () => {
    render(<HomePage pokemonList={[{name: 'Fievel', url: "https://pokeapi.co/api/v2/pokemon/999/", id: "999"}]} />)
    
    expect(screen.getByText('Fievel')).toBeInTheDocument()
    expect(screen.getByText('Fievel').closest('a')).toHaveAttribute('href', '/pokemon/999')
    expect(screen.getByText('Choose your Pokémon!')).toBeInTheDocument
  });
})


  /* it('loads data from getStaticProps', async () => {

    const mockedProps = ([{
      name: 'fake-name',
      url: 'https://pokeapi.co/api/v2/pokemon/fake-url/',
      id: 'fake-id'
    }])

    
    const response = await getStaticProps()

    console.log(response)

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          name: 'fake-name',
          url: 'https://pokeapi.co/api/v2/pokemon/fake-url/',
          id: 'fake-id'
        }
      })
    )

  }) 
  */

