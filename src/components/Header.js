import Progress from './Progress';
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header (){    

    return (
    <div>
        <h1>Onbaording Forms</h1>
        <Progress />
    </div>

    )
}

export default Header;
