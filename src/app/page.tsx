'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './components/chat';
import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default function Home() {

  return (
    <Container className="fixed-bottom">
      <Row>
        <Col>
          <Chat/>
        </Col>
      </Row>
    </Container>
  );
}
