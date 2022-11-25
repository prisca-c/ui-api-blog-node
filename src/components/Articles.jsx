import React, {useState, useEffect} from "react";
import {getArticles} from "../api/api_blog";

const Articles = (props) => {
  const [articlesState, setArticlesState] = useState([])

  useEffect(() => {
      getArticles(props.category)
        .then((response) => {
          setArticlesState(response)
        })
        .catch((error) => {
          console.log(error)
        })
  },[props.category])

  let articlesList = []
  if(articlesState !== undefined){
    articlesList = articlesState.map((article) => {
      return (
        <div key={article} className={"article"}>
          <p onClick={props.handleClick}>{article}</p>
        </div>
      )
    })
  }

  return (
    <div className={"articles"}>
      <h3>Articles</h3>
      {articlesList}
    </div>
  );
}

export default Articles;