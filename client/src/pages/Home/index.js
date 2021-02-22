import React from "react";
import "./style.css";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import imageCompression from "browser-image-compression";

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
                <img className="card-img-top" src="./fam1.png" alt="Fam1" />
                <div className="card-body">
                  <h4 className="card-title">Gregory Roberts</h4>
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
                  <h4 className="card-title">Kirsten Roberts</h4>
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
                  <h4 className="card-title">Elijah Roberts</h4>
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
                  <h4 className="card-title">Elissa Sinclair</h4>
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
                  <h4 className="card-title">Aaron Roberts</h4>
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
                  <h4 className="card-title">Chloe Roberts</h4>
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
