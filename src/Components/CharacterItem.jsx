import React from 'react'

function CharacterItem({ item ,char_id}) {
    return (
        <div>
            <div className="card">
                    <div className="card-front">
                        <img src={item.img} alt="" />
                        <h2>{item.name}</h2>
                    </div>
            </div>
        </div>
    )
}

export default CharacterItem
