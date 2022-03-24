import './Style.css';
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Progress() {
    const [inIndex, setInIndex] = useState('');
    let location = useLocation();

    useEffect(() => {
        //Checks if location.pathname is not "/".
        if (location.pathname) 
            setInIndex(location.pathname);
      }, [location]); // <-- add location to dependency array
    
      console.log(inIndex); 
    return (
        <React.Fragment>            
            <div className='progressbar'>
                <div className='progress-step'>
                    <div className='progress'>1</div>                    
                </div>
                <div className='progress-step'>
                    <div className='progress'>2</div>                    
                </div>
                <div className='progress-step'>
                    <div className='progress'>3</div>                    
                </div>
                <div className='progress-step'>
                    <div className='progress'>4</div>                    
                </div>
            </div>
        </React.Fragment>
    )
};

export default Progress;