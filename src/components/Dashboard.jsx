import React, {useState} from "react";
import Category from "./Category";
import Articles from "./Articles";


const Dashboard = (props) => {
  const [category, setCategory] = useState("code")
  const [article, setArticle] = useState("")

  const handleCategoryClick = (e) => {
    setCategory(e.target.innerText)
    console.log(category)
  }

  const handleArticleClick = (e) => {
    setArticle(e.target.innerText)
    console.log(e.target.innerText)
  }

  return (
    <div className={"dashboard"}>
      <h2>Dashboard</h2>
      <div>
        <Category handleClick={handleCategoryClick}/>
        <Articles category={category} handleClick={handleArticleClick}/>
      </div>
      <button onClick={props.handleShowForm}>Add new article</button>
    </div>
  );
}

export default Dashboard;