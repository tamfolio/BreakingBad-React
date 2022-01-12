import React from 'react'

function CharacterItem({ item }) {
    return (
        <div>
            <div className="card">
                    <div className="card-front">
                        <img src={item.img} alt="" />
                        <h2>{item.name}</h2>
                    </div>
                    <h2>{item.name}</h2>
            </div>
        </div>
    )
}

export default CharacterItem
