import Image from "next/image";

import Card from "../components/card.js";

export async function getStaticProps() {
    const maxPokemons = 150;

    const api = "https://pokeapi.co/api/v2/pokemon/";

    const res = await fetch(`${api}/?limit=${maxPokemons}`)

    const data = await res.json();

    data.results.forEach((item, index) => {
        item.id = index + 1;
    });

    return {
        props: {
            pokemons: data.results,
        }
    }
}

export default function Teste({ pokemons }) {
    return (
        <>

            <div className="title_container">
                <h1> Poke<span>dex</span> </h1>
                <Image src="/images/pokeball.png" width="50" height="50" alt="Imagem de uma pokebola" />
            </div>

            <div className="pokemon_container">
                {
                    pokemons?.map((pokemon) => (
                        <Card key={pokemon.id} pokemon={pokemon} />
                    ))
                }
            </div>

        </>
    )
}