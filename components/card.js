import Image from "next/image";
import Link from "next/link";

export default function Card({ pokemon }) {

    return (
        <div className="card_container">

            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                width="200"
                height="200"
                alt={pokemon.name}
            />

            <p> #{pokemon.id} </p>

            <h3> {pokemon.name} </h3>

            <Link href={`/pokemon/${pokemon.id}`}>
                <a> Detalhes </a>
            </Link>

        </div>
    )
}