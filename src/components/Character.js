import React from 'react';
import PropTypes from 'prop-types';

const Character = ({characterName, characterDes, characterComicNum, characterEventNum, characterPic}) => (

    <div className="gallery">
        <a target="_blank" rel="noopener noreferrer" href={characterPic}>
            <img src={characterPic} alt={characterName} width="200" height="200"/>
        </a>
        <div className="desc">Number of Comics: {characterComicNum}</div>
        <div className="desc">Number of Events: {characterEventNum}</div>
        <div className="desc">Description: {characterDes}</div>

    </div>

);

Character.propTypes = {
    characterName: PropTypes.string.isRequired,
    characterDes: PropTypes.string.isRequired,
    characterComicNum: PropTypes.number.isRequired,
    characterEventNum: PropTypes.number.isRequired,
    characterPic: PropTypes.string.isRequired
};

export default Character
