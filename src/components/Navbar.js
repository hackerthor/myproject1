import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = ({ setUser }) => {

  const navi = useNavigate();

  const hc = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/logout", { withCredentials: true });
    navi("/login");
    setUser(null);
  }

  return (
    <Nav>
      <NavLinks>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/add">Add People</NavLink>
        <NavLink to="/iap">Inactive People</NavLink>
        <NavLink to="/adminusrs">Admin users</NavLink>
        <NavLink className="float-end" onClick={hc}>Logout</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

// Styled Components
const Nav = styled.nav`
  background: linear-gradient(to right, #6a11cb, #2575fc);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;



const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: 0.3s ease;

  &:hover {
    color: #ffcc00;
    transform: scale(1.1);
  }
`;