import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchCharacter from './containers/SearchCharacter';
import DisplayCharacterData from './containers/DisplayCharacterData';
import DisplayError from "./containers/DisplayError";
class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <DisplayCharacterData/>
                    <DisplayError/>
                    <SearchCharacter/>


                </header>
            </div>
        );
    }
}


export default App;
