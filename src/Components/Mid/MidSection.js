import React from 'react';
import { Jumbotron, Button, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import './mid.css'
const MidSection = (props) => {

  return (
    <div>
      <h3> <center>A community to spread positivity </center></h3>
      <div style={{ display: 'flex' }}>
        <div className="jumb" >


          <Jumbotron >
            <Row>
              <Col sm="6">
                <Card >
                  <CardTitle tag="h5">Current Feeling</CardTitle>
                  <CardText>So excited to finally get my hands on the latest PS5</CardText>
                  <CardTitle tag="h5"> @Josh</CardTitle>
                  <CardText>a few Seconds ago</CardText>
                </Card>
              </Col>
              <div className="car2">
                <Col sm="6">
                  <Card >
                    <CardTitle tag="h5">Current Feeling</CardTitle>
                    <CardText>So excited to finally get my hands on the latest PS5</CardText>
                    <CardTitle tag="h5"> @Josh</CardTitle>
                    <CardText>a few Seconds ago</CardText>
                  </Card>
                </Col>
              </div>
            </Row>
            <h4>Share whats on your mind with the<br /> <center>community </center></h4>
            <Button variant="contained" color="primary" disableElevation>
              Share Feelings
            </Button>


          </Jumbotron>
        </div>
        <div className="jumb2" >
          <Jumbotron >
            <Row>
              <Col sm="6">
                <Card >
                  <CardTitle tag="h5">Watching</CardTitle>
                  <CardText>The wolf of Wall Street . A must Watch</CardText>
                  <CardTitle tag="h5"> @Lily</CardTitle>
                  <CardText>a few Seconds ago</CardText>
                </Card>
              </Col>
              <div className="col2mid">
                <Col sm="6">
                  <Card >
                    <CardTitle tag="h5">Watching</CardTitle>
                    <CardText>The wolf of Wall Street . A must Watch</CardText>
                    <CardTitle tag="h5"> @Josh</CardTitle>
                    <CardText>a few Seconds ago</CardText>
                  </Card>
                </Col>
              </div>
            </Row>
            <h5>share whats you are doing with the <br /> <center>community </center></h5>
            <Button variant="contained" color="primary" disableElevation>
              Share Feelings
            </Button>
          </Jumbotron>
        </div>
      </div>
    </div >

  );
};

export default MidSection;