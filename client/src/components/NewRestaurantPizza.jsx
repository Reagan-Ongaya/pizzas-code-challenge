import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {Form} from "@/components/ui/form"

function NewRestaurantPizza({ onAddRestaurantPizza }) {
  const [name, setName] = useState("");
  const [pizza, setPizza] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/restaurant_pizzas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        pizza: pizza,
        price: price,
      }),
    })
      .then((r) => r.json())
      .then((newRestaurantPizza) => onAddRestaurantPizza(newRestaurantPizza));
  }

  return (
    <div className="">
      <h2 className='font-bold text-[25px] text-green-600'>RestaurantPizza</h2>
      <Form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          name="name"
          placeholder="RestaurantPizza name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          name="pizza"
          placeholder="pizza"
          value={pizza}
          onChange={(e) => setPizza(e.target.value)}
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

export default NewRestaurantPizza;