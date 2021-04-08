import {MovieCard} from '@molecules';
import React from 'react';

const MovieList = ({movieList}) => (
    <>
        {
            movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))
        }
    </>
);

export default MovieList;
