import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState('All');

  const foodsToDisplay = foods.filter((food) => {

    if (filterBy === 'All') {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  })

  const foodList = foodsToDisplay.map((food) => {
    return <li key={food.id} onClick={() => {handleClick(food.id)}}>{food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  });

  function handleClick(id) {
    const newFoodArray = foods.map((food) => {

      if (food.id === id) {
        food.heatLevel += 1;
        return food;
      } else {

        return food;
      }
    });
    setFoods(newFoodArray);
  }

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [ ...foods, newFood];
    setFoods(newFoodArray);

  }

  function handleFilter(e) {
    setFilterBy(e.target.value);  
  }

  return (
    <div>
      <select name="filter" onChange={handleFilter}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
