import React, { useState, useEffect} from 'react';
import axios from 'axios'

function CharacterPage({match,  char_id}) {

    const[items, setItems]=useState([]);
  
    useEffect(() => {
      const fetchItems = async () =>{
        const { result } = await axios(
          `https:www.breakingbadapi.com/api/characters/${match.params.char_id}`)
  
        setItems(result);
      }
  
      fetchItems();
    } )

  return (
        <div>
            <h1>{items.name}</h1>
        </div>
  );
}

export default CharacterPage;
