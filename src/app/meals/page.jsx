import Meals from "@/components/Meals"
import React from "react"
import styles from "./styles.module.css"


export const metadata = {
  title: {
    absolute : "Meals"
  },
  description: "Meals Page",
}

const MealsPage = () => {
  return (
    <div className="p-12">
      <h1 className="text-3xl font-semibold text-red-400">Choose Your Meal</h1>
      <p className={styles.font_tomato}>Choose meals of you choice by searching</p>
      <button className="btn btn-outline btn-accent">Accent</button>
      <Meals></Meals>
    </div>
  )
}

export default MealsPage;
