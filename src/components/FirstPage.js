import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import './Style.css';

function FirstPage () {  
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm({ shouldUnregister: true});
  
  const onSubmit = async data => { 
    console.log(data);
    localStorage.setItem("DISPLAY", data.display_name)
    navigate('/SecondPage');   


  };

  return (
    <div className='main__div'>
    <div>
    <h1>Welcome! First things first...</h1>
    <p className='tag__line'>You can always change them later</p>
    </div>
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="first_name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter your full name"
            autoComplete="off" 
            {...register("first_name", {
              required: 'First name is required.'})}/>          
        </Form.Group>

        <Form.Group controlId="display_name">
          <Form.Label>Display Name</Form.Label>
          <Form.Control
            type="text"
            name="display_name"
            placeholder="Enter your Display name"
            autoComplete="off"
            {...register("display_name", {
              required: 'Display name is required.'})}/>
          </Form.Group> 
          <br />
        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
    </div>
  );
};

export default FirstPage;