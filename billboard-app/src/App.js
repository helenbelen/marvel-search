import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SearchArtist from './containers/SearchArtist';
import CreateYearChart from "./containers/CreateYearChart";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <pre> {JSON.stringify(this.props)} </pre>

                    <SearchArtist/>
                    <CreateYearChart/>


                </header>
            </div>
        );
    }
}


export default App;
