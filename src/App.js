import React, {useState} from 'react';
import './App.css';
import FormArticle from "./components/FormArticle";
import Dashboard from "./components/Dashboard";


const App = () => {
  const [showAddArticle, setShowAddArticle] = useState(false)

  return (
    <div className="App">
      <Dashboard handleShowForm={()=>{setShowAddArticle(true)}}/>
      {showAddArticle
        ? <FormArticle
            handleShowFormFalse={()=>{setShowAddArticle(false)}}
          />
        : null
      }
    </div>
  );
}

export default App;
