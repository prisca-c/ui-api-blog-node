// Fetch all categories
export const getCategories = () => {
  return fetch('http://localhost:8080/category', {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}

// Fetch all articles
export const getArticles = (category) => {
  return fetch(`http://localhost:8080/category/${category}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}

// Fetch specific article
export const getArticle = (category, article) => {
  return fetch(`http://localhost:8080/category/${category}/${article}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => console.log(err));
}


