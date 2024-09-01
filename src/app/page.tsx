'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './components/chat';
import React, { useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';

export default function Home() {

  return (
    <Container className='d-flex justify-content-center align-items-end'>
      <Row style={{height: '100vh'}}/>
      <Row className='w-100'>
        <Col>
          <Chat/>
        </Col>
      </Row>
    </Container>
  );
}
