import { styled } from 'styled-components';

const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <h1>Header</h1>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header``;

export const StyledContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;
