import React from 'react'
import {connect} from 'react-redux'
import {queryBillboard} from '../actions/simpleAction'

const SearchArtist = ({dispatch}) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }

                dispatch(queryBillboard(input.value, 2018))

                input.value = ' '
            }
            }>
                <input ref={node => input = node} />
                <button type="submit">
                    Search
                </button>
            </form>
        </div>

)
}

export default connect()(SearchArtist)