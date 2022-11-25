import React, {useEffect, useState} from "react";
import Category from "./Category";
import Articles from "./Articles";
import DisplayArticle from "./DisplayArticle";


const Dashboard = (props) => {
  const [category, setCategory] = useState("devop")
  const [article, setArticle] = useState("")

  // Category state change when clicking on a category
  const handleCategoryClick = (e) => {
    setCategory(e.target.innerText)
    setArticle("")
    console.log(category)
  }

  // Article state change when clicking on an article
  const handleArticleClick = (e) => {
    let id = e.target.innerText
    let reg = id.match(/\[(.*?)\]/) // Return characters inside "[]"
    let articleId = reg[0].replace(/\D/g,'') // Only return number inside "[]"
    setArticle(articleId)
  }

  useEffect(() => {
  },[category, article])

  return (
    <div className={"dashboard"}>
      <h2 className={"text-center"}>Dashboard</h2>
      <div className={"dashboard-container"}>
        <div className={"left-container"}>
          <div className={"left-container-cat"}>
            <Category
              handleClick={handleCategoryClick}
              handleShowFormCategory={props.handleShowFormCategory}
              handleCategoryUpdate={props.handleCategoryUpdate}
            />
            <Articles category={category} handleClick={handleArticleClick}/>
          </div>
          <button onClick={props.handleShowFormArticle} className={"btn-add-article"}>Add new article</button>
        </div>
        <div className={"right-container"}>
          <DisplayArticle category={category} article={article}/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;