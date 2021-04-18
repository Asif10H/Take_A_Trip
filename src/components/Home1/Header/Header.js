
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav className="navbar navbar-expand-lg text-light bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Take A Trip</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="navbar-nav px-5 mx-5">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/orders">Travel Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/deals">Photo Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link">
                                {!loggedInUser ? "Login" : loggedInUser.name}
                            </Link>
                        </li>
                        <li className="nav-item">
                            {
                                !loggedInUser.emails ? <Link to='/login'><button className='btn btn-primary'>Login</button></Link> :
                                    <Link to="/" className="nav-link "><button className="btn btn-primary" onClick={() => setLoggedInUser({})}>Sign out</button></Link>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;