const initialState = {
    artists: []
}


const simpleReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_ARTIST':
            return Object.assign({}, state, {
                searchName: action.artistName,
            })
        case 'ADD_ARTIST':
            return Object.assign({}, state, {
                artists: [...state.artists,
                    {
                        artistYear: action.year,
                        artistName: action.name,
                        artistSongs: action.songs,
                        artistAlbums: action.albums
                    }
                ]
            })

        default:
            return state
    }
}


export default simpleReducer