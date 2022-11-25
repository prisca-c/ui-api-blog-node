import React, {useState} from 'react';
import './App.css';
import FormArticle from "./components/FormArticle";
import FormCategory from "./components/FormCategory";
import Dashboard from "./components/Dashboard";


const App = () => {
  const [showAddArticle, setShowAddArticle] = useState(false)
  const [showAddCategory, setShowAddCategory] = useState(false)
  const [categoryUpdate, setCategoryUpdate] = useState(0)

  return (
    <div className="App">
      <Dashboard
        handleShowFormArticle={()=>{setShowAddArticle(true)}}
        handleShowFormCategory={()=>{setShowAddCategory(true)}}
        handleCategoryUpdate={()=>{setCategoryUpdate(categoryUpdate + 1)}}
      />
      {showAddArticle
        ? <FormArticle
            handleShowFormFalse={()=>{setShowAddArticle(false)}}
          />
        : null
      }
      {showAddCategory
        ? <FormCategory
            handleShowFormFalse={()=>{setShowAddCategory(false)}}
          />
        : null
      }
    </div>
  );
}

export default App;
