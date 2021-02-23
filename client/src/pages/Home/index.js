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
              <div className="card cardInfo">
                <img className="card-img-top" src="./images/chloe.png" alt="Fam1" />
                <div className="card-body">
                  <h4 className="card-title"><a href="">Gregory Roberts</a></h4>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card cardInfo">
                <img
                  className="card-img-top"
                  src="img_avatar1.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title"><a href="">Kirsten Roberts</a></h4>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div className="card cardInfo">
                <img
                  className="card-img-top"
                  src="img_avatar1.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title"><a href="">Elijah Roberts</a></h4>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card cardInfo">
                <img
                  className="card-img-top"
                  src="img_avatar1.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title"><a href="">Elissa Sinclair</a></h4>
                </div>
              </div>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <div className="card cardInfo">
                <img
                  className="card-img-top"
                  src="img_avatar1.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title"><a href="">Aaron Roberts</a></h4>
                </div>
              </div>
            </Col>
            <Col>
              <div className="card cardInfo">
                <img
                  className="card-img-top"
                  src="img_avatar1.png"
                  alt="Card"
                />
                <div className="card-body">
                  <h4 className="card-title"><a href="">Chloe Roberts</a></h4>
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
