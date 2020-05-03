import React from 'react';
import Tabs from './components/Tabs';
import Content from './components/Content';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalRef : null, 

            projects : [
                { name : "Clocker", image : "clocker.png", webm : "clocker.webm", repo : "cs-clocker", url : "pyral.io/stuff/projects/clocker/index.html" },
                { name : "Cygwin + Eclipse Installer", image : "project2.png", webm : "project2.webm", repo : "cygwin-plus-eclipse-installer" },
                { name : "NeoPlayer", image : "project3.png", webm : "project3.webm", repo : "neoplayer2" },
                { name : "ICU+", image : "project4.png", webm : "project4.webm", repo : "icu" },
                { name : "OpenOSRS Plugins", image : "project5.png", webm : "project5.webm", repo : "openosrs-plugins" },
            ],
        };
    }

    handleModal(node) {
        this.setState({ modalRef : node });
    }

    render() {
        return (
            <div id="div-root">
                <div id="div-left">
                    <Tabs/>
                </div>
                <div id="div-right">
                    <Content content="" tiles={this.state.projects} onTileClick={(node) => this.handleModal(node)}/>
                </div>
            </div>
        );
    }
}

export default App;
