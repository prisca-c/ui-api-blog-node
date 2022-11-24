import React, {useState, useEffect} from "react";
import {getArticle} from "../api/api_blog";

const DisplayArticle = (props) => {
  const [articleChoosen, setArticleChoosen] = useState("")
  const [articleState, setArticleState] = useState()

  const fetchArticle = async () => {
    if(props.article !== ""){
      getArticle(props.category, props.article).then((response) => {
        setArticleState(response)
      })
    }
  }

  useEffect(() => {
    fetchArticle()
    if(props.article !== ""){
      setArticleChoosen(props.article)
    }
  },[articleState, articleChoosen, props.article])

  return (
    <div className={"display-article"}>
      {
        articleState
          ?
          <div>
            <h3 className={"h3-article"}>Article's Content: <span className={"article-title"}>{articleState.title}</span></h3>
            <p className={"article-container"}>
              <span className={"article-label"}>ID:</span>
              <span className={"article-content"}>{
                articleState.id
                  ? articleState.id
                  : "No ID"
              }</span>

              <span className={"article-label"}>Title:</span>
              <span className={"article-content"}>{articleState.title}</span>

              <span className={"article-label"}>Excerpt:</span>
              <span className={"article-content"}>{articleState.excerpt}</span>

              <span className={"article-label"}>Body:</span>
              <span className={"article-content"}>{articleState.body}</span>

              <span className={"article-label"}>Category:</span>
              <span className={"article-content"}>{articleState.category}</span>
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