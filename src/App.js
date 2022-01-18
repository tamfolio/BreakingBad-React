import './App.css';
import Header from './Components/Header'; 
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterGrid from './Components/CharacterGrid';
import Search from './Components/Search';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Episodes from './Components/Episodes';


function App() {

  const[items, setItems]=useState([]);
  const[isLoading, setIsLoading]=useState(true);
  const[query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () =>{
      const result = await axios(
        `https:www.breakingbadapi.com/api/characters?name=${query}`
        )

      // console.log(result.data)
      setItems(result.data);
      setIsLoading(false);
    }

    fetchItems();
  } ,[query])

  

  return (
    <Router>
    <div className="container">
      <Header/>
      <Switch>
      <Route exact path='/'>
      <Search getQuery={(q) => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
      </Route>
      <Route path='/episodes'>
        <Episodes/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
