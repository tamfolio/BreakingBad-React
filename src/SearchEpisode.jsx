import React, {useState} from 'react'

function SearchEpisode({getQuery}) {

    const [text, setText] = useState('');

    const onChange = (q) =>{
        setText(q)
        getQuery(q)
    }
    return (
        <section className='search'>
        <form>
            <input
            type='text'
            className='form-control'
            placeholder='Search Episode'
            autoFocus
            value={text}
            onChange={(e) => onChange(e.target.value)}
            />
        </form>
    </section>
    )
}

export default SearchEpisode
