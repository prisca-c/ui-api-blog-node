import React, {useEffect, useState} from "react";
import {getCategories} from "../api/api_blog";

const FormArticle = (props) => {
  const [categoriesState, setCategoriesState] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector('#form_add_article'));
    const formEntries = Object.fromEntries(formData);

    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let timestamp = {timestamp: date + " " + time};

    let data = Object.assign(formEntries, timestamp)
    console.log(data)

    // Define the URL to send the request to
    const url = `http://localhost:8080/category/${data.category}`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    // Close form when submitted
    props.handleShowFormFalse();
  }

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
  },[])

  return (
    <div>
      <h1 className={"text-center"}>New Article</h1>
      <form id={"form_add_article"} onSubmit={handleSubmit}>
        <div>
          <div className={"input-group"}>
            <label htmlFor={"title"}>Title</label>
            <input type={"text"} name={"title"} id={"title"} required={true}/>
          </div>
          <div className={"input-group"}>
            <label htmlFor={"excerpt"}>Excerpt</label>
            <input type={"text"} name={"excerpt"} id={"excerpt"} required={true}/>
          </div>
          <div className={"input-group"}>
            <label htmlFor={"category"}>Category</label>
            <select name={"category"} id={"category"}>
              {
                categoriesState.map((category) => {
                  return (
                    <option key={category} value={category}>{category}</option>
                  )
                })
              }
            </select>
          </div>
          <div className={"input-group"}>
            <label htmlFor={"content"}>Content</label>
            <textarea name={"content"} id={"content"} required={true}/>
          </div>

          <button type={"submit"}>Submit</button>
          <button onClick={props.handleShowFormFalse}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default FormArticle;