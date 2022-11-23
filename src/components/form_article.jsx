import React from "react";

const FormArticle = () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formEntries = Object.fromEntries(formData);

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let timestamp = {timestamp:date +" " + time};

    let data = Object.assign(formEntries, timestamp)

    const url = `http://localhost:8080/category/${data.category}`;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  });

  return (
    <div>
      <h1>New Article</h1>
      <form className={"form_add_article"}>
        <div>
          <div className={"input-group"}>
            <label htmlFor={"id"}>Id</label>
            <input type={"text"} name={"id"} id={"id"} />
          </div>
          <div className={"input-group"}>
            <label htmlFor={"title"}>Title</label>
            <input type={"text"} name={"title"} id={"title"} />
          </div>
          <div className={"input-group"}>
            <label htmlFor={"excerpt"}>Excerpt</label>
            <input type={"text"} name={"excerpt"} id={"excerpt"} />
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
            <textarea name={"body"} id={"body"} />
          </div>

          <button type={"submit"}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormArticle;