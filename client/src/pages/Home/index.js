import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";

function Home() {
  return (
    <div className=" jumbotron">
      <span className="homepage">
        <Container>
          <div id="header1">
            <h1>
              <strong>Meet The Family</strong>
            </h1>
          </div>
          <br />
          <Row>
            <Col>
              <div className="card cardInfo cardPic1">
                <div className="card-body">
                  <h4 className="card-title"><a href="../Greg">Gregory Roberts</a></h4>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card cardInfo cardPic2">
                <div className="card-body">
                  <h4 className="card-title"><a href="../Kirsten">Kirsten Roberts</a></h4>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div className="card cardInfo cardPic3">
                <div className="card-body">
                  <h4 className="card-title"><a href="../Elijah">Elijah Roberts</a></h4>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card cardInfo cardPic4">
                <div className="card-body">
                  <h4 className="card-title"><a href="../Elissa">Elissa Sinclair</a></h4>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div className="card cardInfo cardPic5">
                <div className="card-body">
                  <h4 className="card-title"><a href="../Aaron">Aaron Roberts</a></h4>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card cardInfo cardPic6">
                <div className="card-body">
                  <h4 className="card-title"><a href="../Chloe">Chloe Roberts</a></h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </span>
    </div>
  );
}

export default Home;
