import React, {useState} from "react";
import Category from "./Category";
import Articles from "./Articles";
import DisplayArticle from "./DisplayArticle";


const Dashboard = (props) => {
  const [category, setCategory] = useState("code")
  const [article, setArticle] = useState("")

  const handleCategoryClick = (e) => {
    setCategory(e.target.innerText)
    setArticle("")
    console.log(category)
  }

  const handleArticleClick = (e) => {
    setArticle(e.target.innerText)
    console.log(e.target.innerText)
  }

  return (
    <div className={"dashboard"}>
      <h2 className={"text-center"}>Dashboard</h2>
      <div className={"dashboard-container"}>
        <div className={"left-container"}>
          <Category handleClick={handleCategoryClick}/>
          <Articles category={category} handleClick={handleArticleClick}/>
        </div>
        <div className={"right-container"}>
          <DisplayArticle category={category} article={article}/>
        </div>
      </div>
      <button onClick={props.handleShowForm}>Add new article</button>
    </div>
  );
}

export default Dashboard;