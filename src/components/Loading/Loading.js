import React from 'react';
import  {Spinner, Card} from 'react-bootstrap';

const spinnerStyle = {
    height:"6rem",
    width:"6rem",
}

const spinnerContainer = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}

const Loading = () => {
    return (
    <Card.Body style={spinnerContainer} title="LoadingTitle">
      <Spinner
        animation='border'
        role='status'
        style={spinnerStyle}
      >
      </Spinner>
    </Card.Body>
    )
}

export default Loading
