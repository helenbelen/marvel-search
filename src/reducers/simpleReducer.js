const initialState = {
    characters: [],
    errorMessage: ""
};


const simpleReducer =  (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ERROR':
            return Object.assign({}, state, {
                errorMessage: action.message
            });
        case 'ADD_CHARACTER':
            return Object.assign({}, state, {
                characters: [...state.characters,
                    {
                        characterName: action.name,
                        characterDes: action.description,
                        characterComicNum: action.numberOfComics,
                        characterEventNum: action.numberOfEvents,
                        characterPic: action.picUrl
                    }
                ]
            });

        default:
            return state
    }
};


export default simpleReducer
