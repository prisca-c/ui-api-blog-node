import React from "react";

const FormArticle = (props) => {

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


  return (
    <div>
      <h1 className={"text-center"}>New Article</h1>
      <form id={"form_add_article"} onSubmit={handleSubmit}>
        <div>
          <div className={"input-group"}>
            <label htmlFor={"id"}>Id</label>
            <input type={"text"} name={"id"} id={"id"} />
          </div>
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
              <option value="code">Code</option>
              <option value="design">Design</option>
              <option value="devop">Devop</option>
            </select>
          </div>
          <div className={"input-group"}>
            <label htmlFor={"body"}>Body</label>
            <textarea name={"body"} id={"body"} required={true}/>
          </div>

          <button type={"submit"}>Submit</button>
          <button onClick={props.handleShowFormFalse}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default FormArticle;