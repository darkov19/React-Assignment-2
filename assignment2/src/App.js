import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";

class App extends Component {
    state = {
        string: "",
    };

    stringValidator = event => {
        this.setState({
            string: event.target.value,
        });
    };

    characterCounter = () => {};
    render() {
        let validationComponent = null;
        if (this.state.string.length < 5) {
            validationComponent = (
                <ValidationComponent string="Text too short" />
            );
        } else {
            validationComponent = (
                <ValidationComponent string="Text Long Enough" />
            );
        }
        return (
            <div className="App">
                <input onChange={this.stringValidator} />
                {validationComponent}
            </div>
        );
    }
}

export default App;
