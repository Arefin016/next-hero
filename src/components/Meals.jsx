"use client"

import React, { useEffect, useState } from "react"

const Meals = () => {
  const [search, setSearch] = useState("a")
  const [error, setError] = useState("")
  const [meals, setMeals] = useState([]);
  console.log(meals)

  const loadData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`
      )
      const data = await res.json()
      console.log(data.meals)
      setMeals(data.meals);
      setError("")
    } catch (error) {
      setError('No Data Found');
    }
  }

  const handler = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }


  useEffect(() => {
    loadData();
  }, [])


  // if(meals?.length === 0){
  //   return <h6>No Data Found....</h6>
  // }

  return (
    <div className="mt-12">
      <input
        onChange={handler}
        className="p-4 outline-none border rounded-lg border-red-300 mr-2 text-slate-900"
        type="text"
        placeholder="search meals...."
      />
      <button onClick={() => loadData()} className="bg-red-400 p-4 rounded-lg">Search</button>
      <div className="mt-12 grid grid-cols-3 gap-12">
        {meals?.length > 0 && !error &&
          meals?.map((meal) => (
            <div key={meal?.idMeal} className="border-2 p-4">
              <img src={meal.strMealThumb} alt="" />
              <h6>Name: {meal.strMeal}</h6>
              <p>Description: {meal.strInstructions}</p>
            </div>
          ))}
          {
            error && <h6>No Data Found...</h6>
          }
      </div>
    </div>
  )
}

export default Meals
