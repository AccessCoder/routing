import React, {useState} from 'react';
import './App.css';

function App() {

    const [input, setInput] = useState("");
    const [input2, setInput2] = useState("");
    const [input3, setInput3] = useState("");

    let hasInput:boolean = input.length > 0;
    let hasInput2:boolean = input2.length > 0;
    let hasInput3:boolean = input3.length > 0;

    function condRendering(isVisible:boolean){
        if (isVisible){
            return <h1>We have an Input!</h1>
        }else {
            return <h1>Please insert something!</h1>
        }
    }

    return (
        <div className="App">
            <h1> Fancy ConditionalRendering Page </h1>
            <input onChange={(e) => setInput(e.target.value)}/>
            <div>
                {condRendering(hasInput)}
            </div>
            <input onChange={(e) => setInput2(e.target.value)}/>

            {
                hasInput2 ?
                    <h1>We have an Input!</h1>
                    :
                    <h1>Please insert something!</h1>
            }

            <input onChange={(e) => setInput3(e.target.value)}/>
            {
                hasInput3 &&
                <h1>We have an Input!</h1>
                ||
                <h1>Test</h1>
            }

        </div>
    );
}

export default App;