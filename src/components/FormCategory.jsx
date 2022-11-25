import React from "react";

const FormCategory = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(document.querySelector('#form_add_article'));
    const formEntries = Object.fromEntries(formData);
    let data = formEntries

    // Define the URL to send the request to
    const url = `http://localhost:8080/category`;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    // Close form when submitted
    props.handleShowFormFalse();
  }

  return (
    <div>
      <h1 className={"text-center"}>Create a Category</h1>
      <form id={"form_add_article"} onSubmit={handleSubmit}>
        <div>
          <div className={"input-group"}>
            <label htmlFor={"name"}>Name</label>
            <input type={"text"} name={"name"} id={"name"} required={true}/>
          </div>
          <button type={"submit"}>Submit</button>
          <button onClick={props.handleShowFormFalse}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default FormCategory;