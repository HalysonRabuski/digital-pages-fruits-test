import React, { useState } from "react";
import { FruitContainer } from "./styles";
import { Link } from "react-router-dom";

function Fruit(props) {
  const [fruit] = useState(props.location.state.fruit);

  return (
    <FruitContainer>
      <h1>Fruta: {fruit?.name}</h1>

      <div className="content">
        <img src={fruit.photo} alt={`imagem da fruta ${fruit.name}`} />
        <p>Calorias: {fruit?.calories}</p>
        <p>Proteína: {fruit?.protein}</p>
        <p>Carboidratos: {fruit?.carbohydrates}</p>
        <p>Fibra: {fruit?.fiber}</p>
        <p>Gordura: {fruit?.bluber}</p>
        <p>Porção: {fruit?.portion}</p>
        <div className="action">
          <Link to="/" id="back">
            Voltar
          </Link>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.google.com/search?q=${fruit.name}`}
            id="google"
          >
            Pesquisar no Google
          </a>
        </div>
      </div>
    </FruitContainer>
  );
}

export default Fruit;
