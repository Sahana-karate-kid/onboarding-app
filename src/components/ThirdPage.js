import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import './Style.css';

function ThirdPage() {
  const { handleSubmit } = useForm();
  let navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    navigate('/FinalPage');
  };

  return (
    <div className='main__div'>
      <div>
        <h1>How are you planning to use Eden</h1>
        <p className='tag__line'>We will streamline your setup experience accordingly</p>
      </div>
      <Form className="input-form" onSubmit={handleSubmit(onSubmit)} >
      <div className="row" >
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">For myself</h5>
              <p className="card-text">Write better. Think more clearly. Stay organized.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">With my team</h5>
              <p className="card-text">Wikis, docs, tasks and projects, all in place one.</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Button variant="primary" type="submit" className='launch__button'>
          Next
        </Button>
      </Form>      
    </div>
  );
};

export default ThirdPage;