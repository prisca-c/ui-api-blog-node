import React, {useState, useEffect} from "react";
import {getArticles} from "../api/api_blog";

const Articles = (props) => {
  const [articlesState, setArticlesState] = useState([])

  const fetchArticles = async () => {
    getArticles(props.category).then((response) => {
      setArticlesState(response)
    })
  }

  useEffect(() => {
    fetchArticles()
  },[articlesState])

  return (
    <div className={"articles"}>
      <h3>Articles</h3>
      {
        articlesState.map((article) => {
          return (
            <div key={article} className={"article"}>
              <p onClick={props.handleClick}>{article}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Articles;