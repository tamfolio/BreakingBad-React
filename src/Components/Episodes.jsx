import React, {useState, useEffect } from 'react'
import axios from 'axios';
import EpisodeGrid from './EpisodeGrid';
import SearchEpisode from '../SearchEpisode';

function Episodes() {
    const[ episodeItems, setEpisodeItem] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    const[query, setQuery] = useState('')

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(
                `https:www.breakingbadapi.com/api/episodes/${query}`
            )

            console.log(result.data)
            setEpisodeItem(result.data)
            setIsLoading(false);

        }
        fetchItems();
    }, [query])
    return (
        <div>
            <SearchEpisode getQuery={(q) => setQuery(q)}/>
            <EpisodeGrid isLoading={isLoading} episodeItems={episodeItems}/>
        </div>
    )
}

export default Episodes
