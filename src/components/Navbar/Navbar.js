import { useContext } from "react";
import { UserContext } from "../context";
import { Link, useNavigate } from "react-router-dom";
function TopNavbar() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate()
  const logoutFunc = () => {
    setUser(null)
    localStorage.clear()
    navigate('/user/login')
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
        <div className="container-fluid ">
          <Link className="navbar-brand " to="/">Xavier</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/insert">{user && "Insert"}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">{user && "Cart"}</Link>
              </li>		
              {user ? <li className="nav-item">
                <div onClick={logoutFunc} style={{"cursor":"pointer"}} className="nav-link" aria-current="page">LogOut</div>
              </li> :  <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/user/login">Login</Link>
              </li>}	
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/user/signup">{!user && "SignUp"}</Link>
              </li>
            </ul>		  
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNavbar;
