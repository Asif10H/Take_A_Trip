
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-lg text-light bg-dark">
                <div class="container-fluid">
                    <Link className="navbar-brand" to="/">Take A Trip</Link>
                    <button class="navbar-toggler bg-secondary " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse " id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/">Travel Destination</Link>
                            </li>
                            <li class="nav-item">
                                <Link className="nav-link" to="/">Photo Gallery</Link>
                            </li>
                            <li class="nav-item">
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
                </div>
            </nav>
        </div>
    );
};

export default Header;