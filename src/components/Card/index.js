import React from "react";
import { CardContainer } from "./styles";

const Card = (props) => (
  <CardContainer
    onClick={() => {
      props.onCardClick();
    }}
  >
    <img src={props.image} alt={`Imagem do(a) ${props.title}`} />
    <div className="container">
      <h4>
        <b>{props.title}</b>
      </h4>
      {props.children}
    </div>
  </CardContainer>
);
export default Card;
