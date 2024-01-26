import { useState } from "react";

function PizzaCard({ pizza, handleUpdatePizza, handleDeletePizza  }) {
  const { id, name, ingredients, price, is_in_stock } = pizza;
  const [updatedPrice, setUpdatedPrice] = useState(price)


  const handleClick = () => {
    const updatedPizza = {...pizza, is_in_stock: !is_in_stock}
    handleUpdate(updatedPizza)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPizza = {...pizza, price: e.target.price.value}
    handleUpdate(updatedPizza)
  }

  const handleUpdate = async (updatedPizza) => {
    const response = await fetch(`/pizzas/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPizza),
    })
    const data = await response.json();
    handleUpdatePizza(data)

  }

  const handleDeleteClick = async () => {

      const response = await fetch(`/pizzas/${id}`, {
      method: "DELETE",
    });
      if (response.ok) {
        handleDeletePizza(id);
        alert("Deleted Successfully 🌼")
      }
  }

  return (
    <li className="card">
      <h4>{name}</h4>
      <p>Ingredients: {ingredients}</p>
      <p>Price: {price}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          step="0.01"
          placeholder="New price..."
          name="price"
          value={updatedPrice}
          onChange={e => setUpdatedPrice(parseFloat(e.target.value))}
        />
        <button type="submit">Update Price</button>
      </form>
      <div className="btn-group">
      {is_in_stock ? (
        <button name="is_in_stock" className="primary" onClick={handleClick}> In Stock </button>
      ) : (
        <button name="is_in_stock" onClick={handleClick}> Out of Stock </button>
      )}
      <button onClick={handleDeleteClick}> Delete </button>
      </div>
    </li>
  );
}

export default PizzaCard;
