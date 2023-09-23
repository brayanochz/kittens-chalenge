import { Link } from "react-router-dom";
import './index.css'

const Header = () => {
    return (
        <header className="header">
            <h1>Kitties</h1>
            <nav>
                <ul>
                    <li><Link to={`/`}>Listado</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;