import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const Year = ({yearNumber, artists}) => (

    <table>
        {artists.map(a =>
            <tr><Artist
                key={a.id}
                {...a}
            /> </tr>
        )}
    </table>
)


Year.propTypes = {
    artists: PropTypes.arrayOf(PropTypes.shape({
        artistYear: PropTypes.number.isRequired,
        artistName: PropTypes.string.isRequired,
        artistSongs: PropTypes.array,
        artistAlbums: PropTypes.array
    }))
}

export default Year