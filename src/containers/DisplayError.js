import { connect } from 'react-redux'
import ErrorMessage from "../components/ErrorMessage";

const mapStateToProps = state => ({
    errorMessage: state.errorMessage
});

export default connect(
    mapStateToProps,
)(ErrorMessage)
