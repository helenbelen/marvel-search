import { connect } from 'react-redux'
import CharacterList from "../components/CharacterList";

const mapStateToProps = state => ({
    characters: state.characters
});

export default connect(
    mapStateToProps,
)(CharacterList)
