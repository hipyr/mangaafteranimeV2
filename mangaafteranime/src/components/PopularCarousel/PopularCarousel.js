'use client'
import React, { useState, useEffect } from 'react';
import styles from './PopularCarousel.module.scss';
import '@mantine/core/styles.css'; // Import core styles
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';

export default function PopularCarousel() {
  const [popularAnimes, setPopularAnimes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const requestOptions = {
          method: 'GET',
          headers: {
            'Access-Control-Allow-Headers': 'X-Requested-With',
            'X-MAL-CLIENT-ID': 'b16380860b0a5e8b505de7e3742b85c1',
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(`https://api.myanimelist.net/v2/anime/ranking?ranking_type=bypopularity&limit=20`, requestOptions);
        const data = await response.json();
        setPopularAnimes(data.data || []);
        setError(null);
      } catch (error) {
        console.error('Error Fetching Data: ', error);
        setPopularAnimes([]);
        setError('Error Getting Popular Animes, Try Again by reloading');
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles['popularCarousel']}>
    <h1>Popular</h1>
      {error && <p>{error}</p>}
      <Carousel slideSize="1%" slideGap="xs" align="start" loop withIndicators slidesToScroll={1}>
        {popularAnimes.length > 0 ? (
          popularAnimes.map((anime) => (
            <Carousel.Slide>
              <img src={anime.node.main_picture.medium} alt={`Cover of ${anime.node.title}`} />
              {/* <p>{anime.node.title}</p> */}
            </Carousel.Slide>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Carousel>
    </div>
  );
}
