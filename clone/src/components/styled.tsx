import { createGlobalStyle, styled } from 'styled-components';
import reset from 'styled-reset';
import { ButtonType, Font } from '../type_def';

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

// S : common
export const Wrapper = styled.div<{ overflow?: boolean; bg_color?: string }>`
  width: 100vw;
  height: 100vh;
  overflow: ${(props) => (props.overflow ? 'hidden' : 'visible')};
  background: ${(props) => props.bg_color || '#fff'};
`;

export const FormElem = styled.form<{ width?: string }>`
  width: ${(props) => props.width};
`;

export const InputWrap = styled.div<Font>`
  display: flex;
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.font_size || 'inherit'};
  font-weight: ${(props) => props.font_weight || 'inherit'};
  line-height: ${(props) => props.line_height || 'inherit'};
`;

export const Input = styled.input<Font>`
  color: ${(props) => (props.color ? props.color : 'inherit')};
  font-size: ${(props) => props.font_size || 'inherit'};
  font-weight: ${(props) => props.font_weight || 'inherit'};
  line-height: ${(props) => props.line_height || 'inherit'};
`;

export const Label = styled.label<Font>`
  color: ${(props) => (props.color ? props.color : 'inherit')};
  font-size: ${(props) => props.font_size || 'inherit'};
  font-weight: ${(props) => props.font_weight || 'inherit'};
  line-height: ${(props) => props.line_height || 'inherit'};
`;

export const SubmitBtn = styled.button<ButtonType>`
  display: inline-block;
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  outline: none;
  border: none;
  border-radius: 4px;
  background: transparent;
  background-color: ${(props) => props.bg_color || 'transperent'};
  color: ${(props) => props.color || 'inherit'};
  font-size: ${(props) => props.font_size || 'inherit'};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;

export const MainTitle = styled.h1<Font>`
  margin: 2rem auto;
  text-align: center;
  color: ${(props) => (props.color ? props.color : 'inherit')};
  font-size: ${(props) => props.font_size || 'inherit'};
  font-weight: ${(props) => props.font_weight || 'inherit'};
  line-height: ${(props) => props.line_height || 'inherit'};
`;

export const HelpTxt = styled.span`
  display: block;
  word-break: keep-all;
  color: #ffa9a9;
  font-size: 12px;
  font-weight: 300;
  padding: 0.2rem;
`;
// E : common

// S : create_account
export const AccountWrap = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AccountForm = styled(FormElem)`
  width: 80vw;
  max-width: 750px;
  background-color: #fff;
  padding: 2rem;
  text-align: center;
  border-radius: 0.5em;
  box-shadow: 6px 6px 0px rgba(255, 169, 169, 0.6);

  & > button {
    width: 70%;
    border-radius: 5rem;
    padding: 0.8rem;
    margin: 0 auto 2rem;
  }
`;

export const AccountInput = styled(InputWrap)`
  width: 70%;
  margin: 1.4rem auto;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.1;
  & > input {
    width: 100%;
    padding: 0.8em 1em 0.8em 0.8em;
    border: 1px solid #ddd;
    border-radius: 5rem;
  }
  & > label {
    display: none;
  }
`;

// E : create_account
