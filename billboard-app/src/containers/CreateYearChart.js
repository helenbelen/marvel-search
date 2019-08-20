import { connect } from 'react-redux'
import Year from "../components/Year";

const mapStateToProps = state => ({
    artists: state.artists
})

export default connect(
    mapStateToProps,
)(Year)