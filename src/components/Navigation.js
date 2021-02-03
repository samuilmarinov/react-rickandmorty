import React from 'react';
import { NavLink } from 'react-router-dom';
import { MDBIcon, MDBNavbar } from "mdbreact";
import { Link } from 'react-router-dom';



const Navigation = () => {   

    function logout(e) {
        localStorage.removeItem('token');
        window.location.reload(false);
    }
   
    return (
     
        <MDBNavbar color="indigo" dark expand="md">
          <NavLink className="navigationLink home" to="/">Home</NavLink>
          <NavLink className="navigationLink" to="/episodes/1">Episodes</NavLink>
          <NavLink className="navigationLink" to="/characters/1">Characters</NavLink>
          <NavLink className="navigationLink" to="/locations/1">Locations</NavLink>
          <NavLink className="navigationLink" to="/search/"> Search Characters <MDBIcon icon="search" /></NavLink>
          <Link className="navigationLink logout" to="/" onClick={logout}><MDBIcon icon="sign-out-alt" /> Logout</Link>
        </MDBNavbar>
    );
}
 
export default Navigation;