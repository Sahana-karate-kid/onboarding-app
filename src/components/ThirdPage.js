import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function ThirdPage (props){
  const {  handleSubmit } = useForm();
  let navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/FinalPage');
  };

  return (
    <div>
        <h1>How are you planning to use Eden</h1>
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>        
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="first_name">
          <Form.Label>Workspace Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter your Workspace name"
            autoComplete="off" />          
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>WorkSpace URL (optional)</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter your Workspace URLs if any"
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

export default ThirdPage;