import React, { useState } from "react";
import { foodData } from "../assets/assets";

const FoodList = ({ addFoodToMeal }) => {
  const [query, setQuery] = useState("");

  // Filter food items based on the search query
  const filterFoodItems = () => {
    return foodData.filter((food) =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className="mb-6">
  
      <input
        type="text"
        className="border border-red-500 p-2 rounded w-full md:w-80 mb-4 placeholder-red-500"
        placeholder="Search for food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update the query as the user types
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filterFoodItems().map((food, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative w-full h-48">
              <img
                src={food.image}
                alt={food.name}
                className="object-cover w-80 h-100 absolute inset-0"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{food.name}</h3>
              <p className="text-gray-700 mb-4">{food.calories} kcal</p>
              <div className="flex justify-between gap-2">
                {["breakfast", "lunch", "dinner"].map((meal) => (
                  <button
                    key={meal}
                    className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600 transition"
                    onClick={() =>
                      addFoodToMeal(meal, {
                        name: food.name,
                        calories: food.calories,
                      })
                    }
                  >
                    Add to {meal}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
