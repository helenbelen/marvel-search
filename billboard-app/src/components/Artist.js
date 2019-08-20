import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({artistYear, artistName, artistSongs, artistAlbums}) => (

    <table>
        <td>{artistYear} </td>
        <td>{artistName} </td>
        <td>{artistSongs} </td>
        <td>{artistAlbums} </td>
    </table>
)

Artist.propTypes = {
    artistYear: PropTypes.number.isRequired,
    artistName: PropTypes.string.isRequired,
    artistSongs: PropTypes.array,
    artistAlbums: PropTypes.array
}

export default Artist