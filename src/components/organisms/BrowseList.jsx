import React, { useContext, useEffect, useState } from "react";
import { getMovieListFromFirebase, RoomContext } from '@services'
import { BrowseCard } from '@molecules';
import { Dimensions, ScrollView } from "react-native";

const ScreenHeight = Dimensions.get('window').height;

const BrowseList = () => {
    const [movieList, setMovieList] = useState([]);
    const roomId = useContext(RoomContext);

    useEffect(() => {
        async function fetchMovieList() {
            try {
                const movies = await getMovieListFromFirebase();
                console.log(movies);
                setMovieList(movies);

            } catch {
                console.log("Something went wrong! No movies listed.")
                setMovieList([])
            }
        }

        fetchMovieList().then(r => r).catch(() => { });
    }, []);

    return (
        <ScrollView style={styles}>
            {
                movieList.map((movie) => (
                    <BrowseCard key={movie.id} movie={movie} roomId={roomId} />
                ))
            }
        </ScrollView>
    );
};

const styles = {
    backgroundColor: '#39485A',
    minHeight: 1.5 * ScreenHeight,
    paddingLeft: 15,
    paddingRight: 15,
};

export default BrowseList;