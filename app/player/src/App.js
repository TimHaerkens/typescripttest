import "./App.css";

import NpoPlayer from "npoplayer/dist/player_test.esm.js";

function App() {
    const instance = new NpoPlayer("token");

    return (
        <div className="App">
            <h1>HELLOOW</h1>

            <h1>{instance.token}</h1>
        </div>
    );
}

export default App;
