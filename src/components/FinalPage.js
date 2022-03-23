import React from 'react';
import {  Button } from 'react-bootstrap';


function FinalPage (props){  

  return (
    <div>
        <h1>Congratulations, Eren </h1>
        <p>You have successfully onbaorded Eden, you can start using it now</p>
        <Button variant="primary" type="submit">
         Launch Eden
        </Button>
      
    
    </div>
  );
};

export default FinalPage;