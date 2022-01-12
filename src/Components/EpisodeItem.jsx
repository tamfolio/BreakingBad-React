import React from 'react'

function EpisodeItem({ episodeItem }) {
    return (
        <div className='episode-card'>
            <h2>{episodeItem.series}</h2>
            <h3>Season {episodeItem.season} Episode {episodeItem.episode}</h3>
            <h4>{episodeItem.title}</h4>
        </div>
    )
}

export default EpisodeItem
