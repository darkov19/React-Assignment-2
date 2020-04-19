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
        console.log(charIndex);
        const stringArray = [...this.state.string];
        console.log(stringArray);
        stringArray.splice(charIndex, 1);
        console.log(stringArray);
        const string = stringArray.join("");
        console.log(string);
        this.setState({
            string: string,
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
                <input
                    onChange={this.stringValidator}
                    value={this.state.string}
                />
                {validationComponent}
                {[...this.state.string].map((ch, index) => {
                    return (
                        <CharComponent
                            click={() => this.charRemover(index)}
                            char={ch}
                            key={index}
                        />
                    );
                })}
            </div>
        );
    }
}

export default App;
