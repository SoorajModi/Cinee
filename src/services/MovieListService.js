import axios from 'axios'
import firebase from 'firebase';


const options = {
    method: 'GET',
    url: 'https://unogsng.p.rapidapi.com/search',
    params: {
        start_year: '1980',
        orderby: 'rating',
        audiosubtitle_andor: 'and',
        limit: '100',
        subtitle: 'english',
        countrylist: '33', //this is Canada
        audio: 'english',
        country_andorunique: 'unique',
        offset: '0',
        end_year: '2021'
    },
    headers: {
        'x-rapidapi-key': 'eb75c3159emshf3f383ca6d962f7p136cf2jsn8014370d2503',
        'x-rapidapi-host': 'unogsng.p.rapidapi.com'
    }
};


export async function getMovieList() {
    console.log("Call to getMovieList")
    const res = await axios.request(options)
    const data = res.data["results"]
    console.log(data)

    // firebase
    //     .database()
    //     .ref('MovieListSource')
    //     .set({
    //         movies: [...data],
    //     });
}
