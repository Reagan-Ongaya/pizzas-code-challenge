import { useEffect, useState } from "react";
import NewPizza from "./NewPizza.jsx"; 
import PizzaList from "./PizzaList.jsx";
import Search from "./Search.jsx";

function PizzaPage() {
  const [pizzas, setPizzas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // no need to use http://localhost:5555 here
    fetch("/pizzas")
      .then((r) => r.json())
      .then((pizzasArray) => {
        setPizzas(pizzasArray);
      });
  }, []);

  const handleAddPizza = (newPizza) => {
    const updatedPizzasArray = [...pizzas, newPizza];
    setPizzas(updatedPizzasArray);
  }

  const handleUpdatePizza = (updatedPizza) => {
    const updatedPizzasArray = pizzas.map(pizza => {
      if (pizza.id === updatedPizza.id) return updatedPizza
      else return pizza;  
    });
    setPizzas(updatedPizzasArray);
  }

  const handleDeletePizza = (id) => {
    const updatedPizzasArray = pizzas.filter((pizza) => pizza.id !== id);
    setPizzas(updatedPizzasArray);
  }

  const displayedPizzas = pizzas.filter((pizza) => {
    return pizza.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewPizza onAddPizza={handleAddPizza} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PizzaList pizzas={displayedPizzas} handleUpdatePizza={handleUpdatePizza} handleDeletePizza={handleDeletePizza}/>
    </main>
  );
}

export default PizzaPage;