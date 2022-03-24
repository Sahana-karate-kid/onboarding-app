import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Style.css';

function SecondPage(props){
  const {  handleSubmit } = useForm();
  let navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/ThirdPage')
  };

  return (
    <div className='main__div'>
      <div>
      <h1>Let's set up a home for you to work</h1>
      <p className='tag__line'>You can always create another workspace later</p>
      </div>        
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="workspace_name">
          <Form.Label>Workspace Name</Form.Label>
          <Form.Control
            type="text"
            name="workspace_name"
            placeholder="Enter your Workspace name"
            autoComplete="off" />          
        </Form.Group>

        <Form.Group controlId="workspace_url">
          <Form.Label>WorkSpace URL (optional)</Form.Label>
          <div className="input-group">
	        <span className="input-group-text">https://</span>
          <Form.Control
            type="text"
            name="workspace_url"
            placeholder="Enter your Workspace URLs if any"
            autoComplete="off"/>
           </div>
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

export default SecondPage;