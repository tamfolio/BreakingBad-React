import React, { useState, useEffect } from "react";
import axios from "axios";

function CharacterPage({ match, char_id }) {
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
    <div>
      <h1>{items && items.name ? items.name : "Unable to get Item"}</h1>
    </div>
  );
}

export default CharacterPage;
