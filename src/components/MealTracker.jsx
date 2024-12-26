import React from "react";

const MealTracker = ({ meals, removeFoodFromMeal }) => {
  const calculateTotalCalories = () => {
    return Object.values(meals).flat().reduce((total, food) => total + food.calories, 0);
  };

  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-2xl text-red-500 font-bold mb-4">Daily Summary</h2>
      {["breakfast", "lunch", "dinner"].map((meal) => (
        <div key={meal} className="mb-4">
          <h3 className="text-xl font-bold text-red-600 capitalize">{meal}</h3>
          <ul className="list-disc pl-6">
            {meals[meal].map((food, index) => (
              <li key={food.id} className="flex justify-between items-center">
                <span className=" text-red-900">{food.name} - {food.calories} kcal</span>
                <button
                  onClick={() => removeFoodFromMeal(meal, food)}
                  className="ml-4 text-red-500 hover:text-red-700"
                >
                  -
                </button>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <h3 className="text-xl text-red-500 font-bold">Total: {calculateTotalCalories()} kcal</h3>
    </div>
  );
};

export default MealTracker;
