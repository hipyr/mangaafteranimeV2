"use client";
import { useState, useEffect } from 'react';
import styles from './Searchbar.module.scss';

function Search({ animeName }) {
    const [searchResults, setSearchResults] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (animeName) {
                    const encodedAnimeName = encodeURIComponent(animeName);
                    const requestOptions = {
                        method: 'GET',
                        headers: {
                            'Access-Control-Allow-Headers': 'X-Requested-With',
                            'X-MAL-CLIENT-ID': 'b16380860b0a5e8b505de7e3742b85c1',
                            'Content-Type': 'application/json'
                        }
                    };

                    const response = await fetch(`https://api.myanimelist.net/v2/anime?q=${encodedAnimeName}`, requestOptions);
                    const data = await response.json();
                    setSearchResults(data.data || []);
                    setError(null);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setSearchResults([]);
                setError('Error fetching data. Please try again later.');
            }
        };

        fetchData();
    }, [animeName]);

    return (
        <>
            {error && <p>{error}</p>} {/* this is error catching so if there are no results found it prints this */}
            {searchResults.length === 0 && !error && <p></p>}
            {searchResults.length > 0 && searchResults.map(searchedAnime => (
                <div key={searchedAnime.node.id}>

                    <p>{searchedAnime.node.title}</p>
                </div>
            ))}  {/* Lines 39-44 is the printing of the Pictures and the title need to add an anchor */}
        </>
    );
}

function Searchbar() {
    const [animeName, setAnimeName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform search or other actions here
        console.log(animeName);
    };

    return (
        <div className={styles['searchbar-container']}>
            <form onSubmit={handleSubmit}>
                <input

                    type="text"
                    value={animeName}
                    onChange={(e) => setAnimeName(e.target.value)}
                    placeholder=" Search anime database..."
                />

            </form>
                <div className={styles['searchresults-container']}>
                    <Search animeName={animeName} />
                </div>
        </div>
    ); {/* Lines 60-68 is the form submission god help me this needs reorganized LOL */ }
}

export default Searchbar;
