import "./App.css";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Name from "./components/Name";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Pictures from "./pages/Pictures";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Name />
        <Navbar />
        <div className="clearfix"></div>
        <Wrapper>
        <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/pictures" component={Pictures} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/about" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

