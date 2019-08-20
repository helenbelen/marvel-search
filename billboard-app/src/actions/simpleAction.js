import {buildURL, getChart, processResponse} from "../billboard-top-100";
import axios from "axios";

export const searchArtist = artistName => ({

    type: 'SEARCH_ARTIST',
    artistName

})

export const addArtist = (name, songs, albums, year) => ({
    type: 'ADD_ARTIST',
    name,
    songs,
    albums,
    year
})


export function queryBillboard(artistName, year) {
    return dispatch => {
        let songs = new Map();
        let i;
        for (i = year; i > 2013; i--) {
            let url = buildURL('hot-100', i.toString() + '-08-27');
            axios.get(url).then(
                function success(response) {
                    console.log(response.data)
                    let chart = processResponse(response.data)
                    let year = parseInt(chart.week.split('-')[0]);
                    songs[year] = chart["songs"].filter(it => it.artist.toLowerCase() === artistName.toLowerCase() ||
                        it.artist.toLowerCase().search(artistName.toLowerCase()) >= 0).map(it => it.title)
                    dispatch(addArtist(artistName, songs[year], [], year))
                }
            )


        }

    }
}
