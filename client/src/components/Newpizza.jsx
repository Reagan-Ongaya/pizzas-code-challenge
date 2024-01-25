import { useState } from "react";

function NewPizzaForm({ onAddPizza }) {
  const [name, setName] = useState("");
  const [ingredients, setIngredient] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/pizzas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        ingredients: ingredients,
        price: price,
      }),
    })
      .then((r) => r.json())
      .then((newPizza) => onAddPizza(newPizza));
  }

  return (
    <div className="new-pizza-form">
      <h2>Pizza</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Pizza name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Post Pizza</button>
      </form>
    </div>
  );
}

export default NewPizzaForm;