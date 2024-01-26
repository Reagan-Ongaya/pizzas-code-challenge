import { useEffect, useState } from "react";
import NewPizza from "./NewRestaurantPizza.jsx"; 
import PizzaList from "./PizzaList.jsx";
import Search from "./Search.jsx";

function PizzaPage() {
  const [restaurantpizzas, setRestaurantPizzas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // no need to use http://localhost:5555 here
    fetch("/restaurant_pizzas")
      .then((r) => r.json())
      .then((restaurantpizzasArray) => {
        setRestaurantPizzas(restaurantpizzasArray);
      });
  }, []);

  const handleAddRestaurantPizza = (newRestaurantPizza) => {
    const updatedRestaurantPizzasArray = [...restaurantpizzas, newRestaurantPizza];
    setRestaurantPizzas(updatedRestaurantPizzasArray);
  }

  const handleUpdateRestaurantPizza = (updatedRestaurantPizza) => {
    const updatedRestaurantPizzasArray = restaurantpizzas.map(restaurantpizza => {
      if (restaurantpizza.id === updatedRestaurantPizza.id) return updatedRestaurantPizza
      else return restaurantpizza;  
    });
    setRestaurantPizzas(updatedRestaurantPizzasArray);
  }

  const handleDeleteRestaurantPizza = (id) => {
    const updatedRestaurantPizzasArray = restaurantpizzas.filter((restaurantpizza) => restaurantpizza.id !== id);
    setRestaurantPizzas(updatedRestaurantPizzasArray);
  }

  const displayedRestaurantPizzas = restaurantpizzas.filter((restaurantpizza) => {
    return restaurantpizza.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewPizza onAddRestaurantPizza={handleAddRestaurantPizza} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PizzaList pizzas={displayedRestaurantPizzas} handleUpdateRestaurantPizza={handleUpdateRestaurantPizza} handleDeleteRestaurantPizza={handleDeleteRestaurantPizza}/>
    </main>
  );
}

export default PizzaPage;