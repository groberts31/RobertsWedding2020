import React from "react";
import "./style.css";
import Container from "../../components/Container";

function Home() {
  return (
    <div className="jumbotron">
    <h1>Welcome to the Roberts Wedding Day Event</h1>
    <br/>
      <Container>
          <div className="image">
              <p>***Image here***</p>
          </div>
      </Container>
    </div>
  );
}

export default Home;

