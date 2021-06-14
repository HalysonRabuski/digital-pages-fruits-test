import React, { useState, useEffect } from "react";
import Card from "../../components/Card";
import { HomepageContainer } from "./styles";
import api from "../../services/api";

function Homepage(props) {
  const [fruits, setFruits] = useState([]);

  async function getAllFruits() {
    const { data } = await api.get("/mock/api/fruits-api/fruits.json");

    setFruits(data);
  }

  useEffect(() => {
    getAllFruits();
  }, []);

  function handleClick(fruit) {
    props.history.push({
      pathname: "/fruit",
      state: { fruit },
    });
  }

  return (
    <HomepageContainer>
      <h1>Página Inicial</h1>

      <div className="content">
        {fruits.map((fruit) => (
          <Card
            key={fruit.name}
            onCardClick={() => handleClick(fruit)}
            image={fruit.photo}
            title={fruit.name}
          >
            <p>Calorias: {fruit.calories}</p>
            <p>Proteína: {fruit.protein}</p>
            <p>Carboidratos: {fruit.carbohydrates}</p>
            <p>Fibras: {fruit.fiber}</p>
            <p>Gordura: {fruit.blubber}</p>
            <p>Porção: {fruit.portion}</p>
          </Card>
        ))}
      </div>
    </HomepageContainer>
  );
}

export default Homepage;
