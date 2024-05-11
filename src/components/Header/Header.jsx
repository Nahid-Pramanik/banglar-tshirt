import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <nav className="nav-container">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/order'>Order Review</Link>
            <Link to='/grandPa'>GrandPa</Link>
        </nav>
    );
};

export default Header;