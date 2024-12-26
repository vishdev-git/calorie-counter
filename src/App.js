import React, { useState } from "react";
import FoodList from "../src/components/FoodList";
import MealTracker from "../src/components/MealTracker";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const App = () => {
  const [meals, setMeals] = useState({
    breakfast: [],
    lunch: [],
    dinner: [],
  });

  const addFoodToMeal = (meal, food) => {
    const foodWithId = { ...food, id: Date.now() + Math.random() }; // Add unique id
    setMeals((prevMeals) => ({
      ...prevMeals,
      [meal]: [...prevMeals[meal], foodWithId],
    }));
  };

  const removeFoodFromMeal = (meal, foodToRemove) => {
    setMeals((prevMeals) => ({
      ...prevMeals,
      [meal]: prevMeals[meal].filter(food => food.id !== foodToRemove.id), // Remove by id
    }));
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="flex-1 p-4">
          <FoodList addFoodToMeal={addFoodToMeal} />
        </div>
        <div className="w-1/5 p-4">
          <MealTracker meals={meals} removeFoodFromMeal={removeFoodFromMeal} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
