import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({characters}) => (

    <div className="clearfix">
        {characters.map(a =>
        <Character
            key={a.characterName}
            {...a}
        />
    )}
    </div>

);


CharacterList.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
        characterName: PropTypes.string.isRequired,
        characterDes: PropTypes.string.isRequired,
        characterComicNum: PropTypes.number.isRequired,
        characterEventNum: PropTypes.number.isRequired,
        characterPic: PropTypes.string.isRequired
    }))
};

export default CharacterList
