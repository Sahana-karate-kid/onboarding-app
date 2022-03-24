import React from 'react';
import { Button } from 'react-bootstrap';
import './Style.css';


function FinalPage() {
  const displayName = sessionStorage.getItem('DISPLAY');

  return (
    <div className='main__div'>
      <h1>Congratulations, {displayName} </h1>
      <p className='tag__line'>You have successfully onbaorded Eden, you can start using it now</p>
      <Button variant="primary" type="submit" className='launch__button'>
        Launch Eden
      </Button>
    </div>
  );
};

export default FinalPage;
