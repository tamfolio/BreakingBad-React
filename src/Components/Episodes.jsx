import React, {useState, useEffect } from 'react'
import axios from 'axios';
import EpisodeGrid from './EpisodeGrid';

function Episodes() {
    const[ episodeItems, setEpisodeItem] = useState([]);
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(
                `https:www.breakingbadapi.com/api/episodes`
            )

            console.log(result.data)
            setEpisodeItem(result.data)
            setIsLoading(false);

        }
        fetchItems();
    }, [])
    return (
        <div>
            <EpisodeGrid isLoading={isLoading} episodeItems={episodeItems}/>
        </div>
    )
}

export default Episodes
