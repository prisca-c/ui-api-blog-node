import React, {useEffect, useState} from "react";
import {getCategories} from "../api/api_blog";

const Category = (props) => {
  const [categoriesState, setCategoriesState] = useState([])

  useEffect(() => {
    const fetchCategory = async () => {
      try{
        getCategories().then((response) => {
          setCategoriesState(response)
        })
      }
      catch (e) {
        console.log(e)
      }
    }
    fetchCategory()
  },[categoriesState])

  return (
    <div className={"categories"}>
      <h3>Categories</h3>
      {
        categoriesState.map((category) => {
          return (
            <div key={category}>
              <p className={"category"} onClick={props.handleClick}>{category}</p>
            </div>
          )
        })
      }
      <button onClick={props.handleShowFormCategory}>Add Category</button>
    </div>
  );
}

export default Category;