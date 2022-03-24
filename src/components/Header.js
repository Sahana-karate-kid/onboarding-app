import Progress from './Progress';
import logo from '../assets/eden_logo.png';
import './Style.css';

function Header (){    

    return (
    <div>
        <div className='logo_container'>
        <img src={logo} alt='' className='logo'></img>
        </div>
        <Progress />
    </div>

    )
}

export default Header;
