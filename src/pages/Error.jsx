import { styled } from 'styled-components';

const Error = () => {
  return (
    <StyledError>
      <h2>Oops!</h2>
      <h1>404</h1>
      <p>Page not found!</p>
    </StyledError>
  );
};

export default Error;

const StyledError = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
