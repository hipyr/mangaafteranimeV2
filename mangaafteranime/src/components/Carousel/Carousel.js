'use client'
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.scss';
import '@mantine/core/styles.css'; // Import core styles
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';

export default function PopularCarousel({ rankingtype, name }) {
  const [popularAnimes, setPopularAnimes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/rankingtype/${rankingtype}`);
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
      <h1>{name}</h1>
      {error && <p>{error}</p>}
      <div className={styles['Carousel-Container']}></div>
      <Carousel slideSize="1%" slideGap="xs" align="start" loop withIndicators slidesToScroll={1}>
        {popularAnimes.length > 0 ? (
          popularAnimes.map((anime) => (
            <Carousel.Slide >
              <img src={anime.node.main_picture.medium} alt={`Cover of ${anime.node.title}`} className={styles['Slides']} />
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
