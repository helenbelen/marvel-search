import axios from "axios";
import {config} from '../config';
let request = axios.create({
    baseURL: 'https://gateway.marvel.com:443',
    timeout: 1000
});

export const setError = (message) => ({
    type: 'ADD_ERROR',
    message
});
export const addCharacter = (name, description, numberOfComics, numberOfEvents, picUrl) => ({
    type: 'ADD_CHARACTER',
    name,
    description,
    numberOfComics,
    numberOfEvents,
    picUrl
})


export function queryMarvel(characterName) {
    return dispatch => {

        request.get(`/v1/public/characters?name=${characterName}&apikey=${config.key}`).then(resp => {
            console.log(resp);

            if (resp.data.data.results.length === 0) {
                dispatch(setError(`No Results Found For ${characterName}`))
                return;
            }
            let data = resp.data.data.results[0];
            dispatch(setError(''));
            let thumbnail = data.thumbnail.path + '.jpg';
            dispatch(addCharacter(
                characterName,
                data.description,
                data.comics.available,
                data.events.available,
                thumbnail))
        })
            .catch(err => {
                console.log(err);
            })


    }

}

