import { MovieCard } from '@molecules'
import React from 'react';

const MovieList = ({ movieList }) => {
    return (
        <>
            {
                movieList.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                ))
            }
        </>
    )
}

export default MovieList
