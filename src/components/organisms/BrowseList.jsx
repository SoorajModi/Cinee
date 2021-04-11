import React, {useContext, useEffect, useState} from "react";
import { getMovieListFromFirebase, RoomContext } from '@services'
import { BrowseCard } from '@molecules';

const BrowseList = () => {
    const [movieList, setMovieList] = useState([]);
    const roomId = useContext(RoomContext);

    useEffect(() => {
        async function fetchMovieList() {
            const movies = await getMovieListFromFirebase();
            console.log(movies);
            setMovieList(movies);
        }
        fetchMovieList().then(r => r).catch();
    }, []);

  return (
      <>
          {
              movieList.map((movie) => (
                  <BrowseCard movie={movie}/>
              ))
          }
      </>
    );
};