import React from "react";
// import logo from "./logo.svg";
import tunisia1 from "./img/tunisia1.jpg";
// import tunisia2 from "./public/tunisia2.jpg";
import "./App.css";
import "./css/style.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

          {/* style="border:solid 1px black;max-width:100vw"   */}
          <div className="mainDiv">
          <h1 className="title red">Visite Tunisia</h1>

          {/* <br > */}
          <div className="imgDiv">
          <img src={tunisia1} className="firstImg" alt="firstImg" />

          {/* </br > */}

          <img src="/tunisia2.jpg" className="secondImg" alt="secondImg"/>
        </div>
        </div>

        {/* width="320" height="240" controls */}
        {/* <video  src={myVideo.mp4} type="video/mp4" /> */}

        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OtJVufo3IrA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="video"
          className="videoo"
        ></iframe>
      </header>
    </div>
  );
}

export default App;
