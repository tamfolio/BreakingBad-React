import React from 'react'
import { Link } from 'react-router-dom'

function CharacterItem({ item ,char_id}) {
    return (
        <div>
            <Link to={`/characters/${item.char_id}`}>
            <div className="card">
                    <div className="card-front">
                        <img src={item.img} alt="" />
                        <h2>{item.name}</h2>
                    </div>
            </div>
            </Link>
        </div>
    )
}

export default CharacterItem
