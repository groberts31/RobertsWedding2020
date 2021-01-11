// import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Name from "./components/Name";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Name />
        <Navbar />
        <Wrapper></Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

{
  /* <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
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
  </a>
</header> */
}
