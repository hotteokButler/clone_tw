import { createGlobalStyle, styled } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
${reset};
*{
  box-sizing: border-box;
}
body {
  background-color: #fff;
  color: #232323;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.4;
};
`;

// S: Loading
export const LoadingWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
// E: Loading
