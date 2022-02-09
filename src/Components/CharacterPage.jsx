import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CharacterItem from './CharacterItem';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom'

function CharacterPage({ items, isLoading, match }) {

    // const[item, setItems]=useState([]);
    const {char_id} = useParams();
  
    useEffect(() => {
      const fetchItems = async () =>{
        const { result } = await axios(
          `https:www.breakingbadapi.com/api/characters/${match.params.char_id}`
          )
  
        
      }
  
      fetchItems();
    } )

    return isLoading ? <Spinner/> :
    <section className='cards'>
        {items.map((item => (
            <h2>{item.char_id}</h2>
        )))}
    </section>
}


export default CharacterPage;
