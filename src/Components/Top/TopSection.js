import React, { useState } from 'react';
import {
  Jumbotron, Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, InputGroup, InputGroupAddon, InputGroupText, Input
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import './top.css'
const TopSection = () => {
  return (
    <div>
      <Jumbotron className="top">
        <div>
          <Card className="card">

            <CardBody>
              <InputGroup>

                <InputGroupAddon addonType="prepend">

                  <InputGroupText>Share feelings</InputGroupText>
                </InputGroupAddon>
                <Input /><FontAwesomeIcon icon={faHeart} className="inputIcon" />
              </InputGroup>
              <Button variant="contained" color="primary" disableElevation>
                Share Feelings
              </Button>
            </CardBody>
          </Card>
        </div>
      </Jumbotron>
    </div>


  );
};

export default TopSection;