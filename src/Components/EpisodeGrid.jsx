import React from 'react'
import EpisodeItem from './EpisodeItem'
import Spinner from './Spinner'

function EpisodeGrid({ episodeItems, isLoading}) {
    return isLoading ? <Spinner/> :
    <section className='episode-grid'>
        {episodeItems.map((episodeItem) => (
            <EpisodeItem key={episodeItem.episode_id} episodeItem={episodeItem}/>
        ))}
    </section>
}

export default EpisodeGrid
