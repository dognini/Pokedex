import Image from "next/image";

export default function About() {
    return (
        <div className="about">
            <h1> Sobre o projeto </h1>

            <p> O intuito desse projeto foi para que eu treinasse as minhas habilidades com NextJs </p>
    
            <Image src="/images/charizard.png" alt="foto de um dragão de fogo"  width="350" height="350" />
        </div>
    )
}