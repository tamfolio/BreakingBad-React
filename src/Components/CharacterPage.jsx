import React, { useState, useEffect } from "react";
import axios from "axios";

function CharacterPage({ match, char_id, isLoading }) {
  console.log("I got here");

  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const { data } = await axios(
        `https:www.breakingbadapi.com/api/characters/${match.params.char_id}`
      );
      console.log("result", data);
      setItems(data[0]);
    };

    fetchItems();
  }, [setItems, match]);

  return (
    <div className="character">
      <div className="left">
      <img src={items.img} alt="" />
      </div>
      <div className="right">
        <h3>Name: {items.name}</h3>
        <h3>Birthday: {items.birthday} </h3>
        <h3>Status: {items.status} </h3>
        <h3>Nickname: {items.nickname} </h3>
        <h3>Portrayed: {items.portrayed} </h3>
      </div>
    </div>
  );
}


export default CharacterPage;
