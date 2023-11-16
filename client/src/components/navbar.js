import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const [cookies, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate();

    const logout = () => {
        setCookies("access_token", "");
        window.localStorage.removeItem("userID");
        navigate("/auth")
    }

    return (
        <div className='navbar'>
            <Link to="/" className='navLink'>Home</Link>
            <Link to="/farm" className='navLink'>My Farm</Link>
            <Link to="/fields" className='navLink'>My Fields</Link>
            {!cookies.access_token ? (<Link to="/auth" className='navLink'>Login/Register</Link>) : (<button onClick={logout}>Logout</button>)}
            {/* <Link to="/auth" className='navLink'>Login/Register</Link> */}
        </div>
    );
};