import React, {useState, useEffect} from "react";
import {getArticle} from "../api/api_blog";

const DisplayArticle = (props) => {
  const [articleState, setArticleState] = useState()

  const handleDelete = (e) => {
    e.preventDefault()
    const url = `http://localhost:8080/category/${articleState.category}/${articleState.id}`
    fetch(url, {
      method: 'DELETE'
    })
    setArticleState("")
  }

  useEffect(() => {
      if(props.article !== ""){
        getArticle(props.category, props.article)
          .then((response) => {
            setArticleState(response)
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        setArticleState("")
      }
  },[props.article])

  return (
    <div className={"display-article"}>
      {
        articleState
          ?
          <div>
            <h3 className={"h3-article"}>Article's Content: <span className={"article-title"}>{articleState.title}</span></h3>
            <p className={"article-container"}>

              <span className={"article-label"}>Id:</span>
              <span className={"article-content"}>{articleState.id}</span>

              <span className={"article-label"}>Title:</span>
              <span className={"article-content"}>{articleState.title}</span>

              <span className={"article-label"}>Excerpt:</span>
              <span className={"article-content"}>{articleState.excerpt}</span>

              <span className={"article-label"}>Content:</span>
              <span className={"article-content"}>{articleState.content}</span>

              <span className={"article-label"}>Category:</span>
              <span className={"article-content"}>{articleState.category}</span>

              <button>Edit Article</button>
              <button onClick={handleDelete}>Delete</button>
            </p>
          </div>
          :
          <div>
            <h3 className={"h3-article"}>Click on an article to display it</h3>
          </div>
      }
    </div>
  );
}

export default DisplayArticle;