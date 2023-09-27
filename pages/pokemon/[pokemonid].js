import Image from "next/image";

export const getStaticPaths = async () => {
    const maxPokemons = 150;

    const api = "https://pokeapi.co/api/v2/pokemon/";

    const res = await fetch(`${api}/?limit=${maxPokemons}`);

    const data = await res.json();

    const paths = data.results?.map((pokemon, index) => {
        return {
            params: {
                pokemonid: (index + 1).toString()
            },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonid;

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const data = await res.json();

    return {
        props: { pokemon: data }
    }
}

export default function PokemonId({ pokemon }) {
    return (
        <div className="container_pokemon">
            <h1 className="container_pokemon_title"> {pokemon.name} </h1>

            <Image src={pokemon.sprites.front_default} width="200" height="200" alt={pokemon.name} />

            <div>
                <h3> Número: </h3>
                <p> #{pokemon.id} </p>
            </div>

            <div>
                <h3> Tipo: </h3>
                <div className="types_container">
                    {
                        pokemon?.types?.map((item, index) => (
                            <span className={`type ${'type_' + item.type.name}`} key={index}> {item.type.name} </span>
                        ))
                    }
                </div>
            </div>

            <div className="data_container">

                <div className="data_height">
                    <h3> Altura: </h3>
                    <p> {pokemon.height * 10} cm </p>
                </div>

                <div className="data_weight">
                    <h3> Peso: </h3>
                    <p> {pokemon.weight / 10} kg </p>
                </div>

            </div>

        </div>
    )
} 