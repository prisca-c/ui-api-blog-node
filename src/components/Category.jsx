import React, {useEffect, useState} from "react";
import {getCategories} from "../api/api_blog";

const Category = (props) => {
  const [categoriesState, setCategoriesState] = useState([])

  useEffect(() => {
    getCategories().then((response) => {
      setCategoriesState(response)
    })
  },[props.handleCategoryUpdate])

  const handleClick = (e) => {
    props.handleShowFormCategory(e)
  }

  let categoriesList = []

  if(categoriesState !== undefined && categoriesState !== []){
    categoriesList = categoriesState.map((category) => {
      return (
        <div key={category}>
          <p className={"category"} onClick={props.handleClick}>{category}</p>
        </div>
      )
    })}

  return (
    <div className={"categories"}>
      <h3>Categories</h3>
      { categoriesList}

      <button onClick={handleClick}>Add Category</button>
    </div>
  );
}

export default Category;