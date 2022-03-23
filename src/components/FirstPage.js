import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function FirstPage (props) {
  const { user } = props;
  let navigate = useNavigate();
  const {  handleSubmit } = useForm();
  
  const onSubmit = (data) => {  
    console.log(data);
    navigate('/SecondPage');
    
  };

  return (
    <div>
    <h1>Let's set up a home for you to work </h1>
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="first_name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter your full name"
            autoComplete="off" />          
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter your Display name"
            autoComplete="off"/>
          </Form.Group>

        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
    </div>
  );
};

export default FirstPage;