import React from "react";
import { connect } from "react-redux";
import { NavLink, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(NavLink)`
  border: 1px solid #7ca887;
  border: none;
  background: none;
  margin: 0 1.35rem;
  padding-bottom: 0.05rem;
  outline: none;
  text-decoration: none;

  font-size: 1rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  color: rgb(135, 135, 135);

  :hover {
    cursor: pointer;
  }
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  position: absolute;

  z-index: 999;
  bottom: 0;
  left: 0;
  padding: 0.5rem 0;

  width: 100%;

  background: rgba(0, 0, 0, 0.65);
`;

const activeStyle = {
  boxShadow: "0em 0.2em teal",
  color: "white",
};

const Navbar = ({ backdrops, videos }) => {
  let { url } = useRouteMatch();

  return (
    <StyledNavbar>
      <StyledLink exact to={`${url}/details`} activeStyle={activeStyle}>
        Details
      </StyledLink>
    </StyledNavbar>
  );
};

const mapStateToProps = ({ movie }) => ({
  backdrops: movie.images,
});

export default connect(mapStateToProps)(Navbar);
