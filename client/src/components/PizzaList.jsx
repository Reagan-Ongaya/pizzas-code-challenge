import PizzaCard from "./PizzaCard.jsx";

function PizzaList({ pizzas, handleUpdatePizza, handleDeletePizza }) {
  return (
    <ul className="cards">
      {pizzas.map((pizza) => {
        return <PizzaCard key={pizza.id} pizza={pizza} handleUpdatePizza={handleUpdatePizza} handleDeletePizza={handleDeletePizza} />;
      })}
    </ul>
  );
}

export default PizzaList;