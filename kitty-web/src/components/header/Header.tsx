import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Kitties</h1>
            <nav>
            <ul>
                <li><Link to={`/`}>List</Link></li>
            </ul>
            </nav>
        </header>
    );
};

export default Header;