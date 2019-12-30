import React from 'react'
import {connect} from 'react-redux'
import {queryMarvel} from '../actions/simpleAction'

const SearchCharacter = ({dispatch}) => {
    let input;

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }

                dispatch(queryMarvel(input.value.trim()));

                input.value = ' '
            }
            }>
                <input ref={node => input = node} />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>

)};

export default connect()(SearchCharacter)
