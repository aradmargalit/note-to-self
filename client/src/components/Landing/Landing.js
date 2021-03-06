import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LazyHero from 'react-lazy-hero';
import { Row, Col, Card } from 'react-bootstrap';
import { GoChevronDown, GoLock } from 'react-icons/go';
import card_content from './cards.json';

class Landing extends Component {
  renderCards() {
    return card_content.map(({ header, title, text, theme, id }) => {
      return (
        <Col xs={12} lg={6} key={id}>
          <Card
            border={theme}
            style={{
              padding: '10px',
              display: 'table',
              margin: 'auto',
              marginTop: '10px',
            }}
          >
            <Card.Header>{header}</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{text}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }

  scrollToBottom = () => {
    this.pageBottom.scrollIntoView({ behavior: 'smooth' });
  };

  render() {
    return this.props.auth ? (
      <Redirect
        to={{
          pathname: '/dashboard',
          state: { from: this.props.location },
        }}
      />
    ) : (
      <div>
        <LazyHero
          minHeight="80vh"
          opacity={0.7}
          parallaxOffset={100}
          color="gray"
          imageSrc="https://images.unsplash.com/photo-1547968196-230ad3b7cbf7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80"
          style={{ overflow: 'hidden', color: 'white' }}
        >
          <h1>Note to Self</h1>
          <h5 style={{ textAlign: 'center' }}>
            A tiny app to help you remember lessons you might have remembered,
            once.
          </h5>
          <button
            onClick={this.scrollToBottom}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'white',
            }}
          >
            <GoChevronDown style={{ marginTop: '10px', cursor: 'pointer' }} />
          </button>
        </LazyHero>
        <Row style={{ padding: '30px' }}>
          <Col xs={12}>
            <h2
              style={{
                display: 'table',
                margin: 'auto',
              }}
            >
              A Simple Idea with Dead Simple Functionality
            </h2>
          </Col>
        </Row>
        <Row style={{ padding: '30px' }}>{this.renderCards()}</Row>
        <Row style={{ textAlign: 'center' }}>
          <Col xs={{ span: 6, offset: 3 }}>
            <h3>
              <GoLock /> {'  Secure. Always.'}
            </h3>
            <p>
              Note to Self™ uses military-grade encryption to make secure your
              most personal memories. Nobody can see your memories except you.
              Ever. Just kidding about the military grade stuff, but it is
              encrypted at rest. I promise.
            </p>
          </Col>
        </Row>
        <div
          style={{ float: 'left', clear: 'both' }}
          ref={el => {
            this.pageBottom = el;
          }}
        />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
