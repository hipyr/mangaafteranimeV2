"use client"
import {useState, useEffect} from 'react';
import styles from './Searchbar.module.scss';
export default function Searchbar() {
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);
    async function fetchData() 
    {
    if (!animeName) return;
    try 
    {
    const response = await fetch(`http://localhost:3000/api/animeName/${animeName}`);
    const data = await response.json();
    setSearchResults(data.data || []);
    } catch (error)
    {
        console.error("Error Occured: ", error);
        setSearchResults([]);
        setError("Error Fetching Data");
    }
    }
    // 7-21 FetchData function

    useEffect(() => {
        fetchData();
    })
    const [animeName, setAnimeName] = useState('');

    const handleSubmit = (e) => 
    {
        e.preventDefault();
        console.log('Searching for:', animeName);
        fetchData({animeName});
        
    };
    // Use Effect
    return (
        <div className={styles['searchbar-container']}>
            <form onSubmit={handleSubmit} className={styles['form-container']}>
            <input
                        type="text"
                        value={animeName}
                        onChange={(e) => setAnimeName(e.target.value)}
                        placeholder="Search anime database..."
                    />
            </form>
        <div>
        {searchResults.map(anime => (
                <div key={anime.node.id} className={styles['search-results-container']}>
                    <img src={anime.node.main_picture.medium} alt={`Cover of ${anime.node.title}`} />
                    <p>{anime.node.title}</p>
                    <p>{anime.node.rating}</p>
                </div>
            ))}
        </div>
        </div>
        
    )
}
