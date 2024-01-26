import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {Form} from "@/components/ui/form"

function NewPizza({ onAddPizza }) {
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
      <h2 className='font-bold text-[25px] text-green-600'>Pizza</h2>
      <Form onSubmit={handleSubmit} className="space-y-8 py-[5px ]">
        <Input
          type="text"
          name="name"
          placeholder="Pizza name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          name="ingredients"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <Input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
        />
        <Button type="submit">Post </Button>
      </Form>
    </div>
  );
}

export default NewPizza;