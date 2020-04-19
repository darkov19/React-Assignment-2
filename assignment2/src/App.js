import React, { Component } from "react";
import "./App.css";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

class App extends Component {
    state = {
        string: "",
    };

    stringValidator = event => {
        this.setState({
            string: event.target.value,
        });
    };

    charRemover = charIndex => {
        const stringArray = [...this.state.string];
        stringArray.splice(charIndex, 1);
        const string = stringArray.join("");
        this.setState({
            string: string,
        });
    };

    characterCounter = () => {};
    render() {
        const charComponents = [...this.state.string].map((ch, index) => {
            return (
                <CharComponent
                    click={() => this.charRemover(index)}
                    char={ch}
                    key={index}
                />
            );
        });
        return (
            <div className="App">
                <input
                    onChange={this.stringValidator}
                    value={this.state.string}
                />
                <ValidationComponent length={this.state.string.length} />
                {charComponents}
            </div>
        );
    }
}

export default App;
