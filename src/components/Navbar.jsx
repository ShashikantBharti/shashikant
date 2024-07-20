import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { StyledContainer } from './Header';

const Navbar = () => {
  return (
    <>
      <StyledNav>
        <StyledContainer>
          <StyledNavbar>
            <StyledLogo to='/'>Portfolio</StyledLogo>
            <StyledList>
              <li>
                <StyledNavLink
                  to='/'
                  className={(isActive) => (isActive ? 'active' : '')}
                >
                  Home
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  to='/about'
                  className={(isActive) => (isActive ? 'active' : '')}
                >
                  About
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  to='/skills'
                  className={(isActive) => (isActive ? 'active' : '')}
                >
                  Skills
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  to='/portfolio'
                  className={(isActive) => (isActive ? 'active' : '')}
                >
                  Portfolio
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  to='/experience'
                  className={(isActive) => (isActive ? 'active' : '')}
                >
                  Experience
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  to='/contact'
                  className={(isActive) => (isActive ? 'active' : '')}
                >
                  Contact
                </StyledNavLink>
              </li>
              <li>
                <StyledNavLink
                  to='/blogs'
                  className={(isActive) => (isActive ? 'active' : '')}
                >
                  Blogs
                </StyledNavLink>
              </li>
            </StyledList>
          </StyledNavbar>
        </StyledContainer>
      </StyledNav>
    </>
  );
};

export default Navbar;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  background: blue;
  height: 50px;
  line-height: 50px;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const StyledLogo = styled(NavLink)`
  text-decoration: none;
`;
