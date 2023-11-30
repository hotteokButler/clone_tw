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
export const Wrapper = styled.div<{ $overflow?: boolean; $bg_color?: string }>`
  width: 100vw;
  height: 100vh;
  overflow: ${(props) => (props.$overflow ? 'hidden' : 'visible')};
  background: ${(props) => props.$bg_color || '#fff'};
`;

export const FormElem = styled.form<{ $width?: string }>`
  width: ${(props) => props.$width};
`;

export const InputWrap = styled.div<Font>`
  display: flex;
  color: ${(props) => props.$color || 'inherit'};
  font-size: ${(props) => props.$font_size || 'inherit'};
  font-weight: ${(props) => props.$font_weight || 'inherit'};
  line-height: ${(props) => props.$line_height || 'inherit'};
`;

export const Input = styled.input<Font>`
  color: ${(props) => props.$color || 'inherit'};
  font-size: ${(props) => props.$font_size || 'inherit'};
  font-weight: ${(props) => props.$font_weight || 'inherit'};
  line-height: ${(props) => props.$line_height || 'inherit'};
`;

export const Label = styled.label<Font>`
  color: ${(props) => props.$color || 'inherit'};
  font-size: ${(props) => props.$font_size || 'inherit'};
  font-weight: ${(props) => props.$font_weight || 'inherit'};
  line-height: ${(props) => props.$line_height || 'inherit'};
`;

export const BasicBtn = styled.button<ButtonType>`
  display: inline-block;
  padding: ${(props) => props.$padding};
  margin: ${(props) => props.$margin};
  outline: none;
  border: none;
  border-radius: 4px;
  background: transparent;
  background-color: ${(props) => props.$bg_color || 'transperent'};
  color: ${(props) => props.$color || 'inherit'};
  font-size: ${(props) => props.$font_size || 'inherit'};
  font-weight: bold;
  line-height: ${(props) => props.$line_height || 'inherit'};
  cursor: pointer;
  &:hover {
    opacity: 0.4;
  }
`;
export const SubmitBtn = styled(BasicBtn)`
  font-weight: bold;
`;

export const SwitcherBtn = styled(BasicBtn)`
  border: 1px solid #ddd;
`;

export const Logo = styled.img<{ $width?: string }>`
  width: ${(props) => props.$width || 'auto'};
  height: auto;
  vertical-align: middle;
`;

export const MainTitle = styled.h1<Font>`
  margin: 2rem auto;
  text-align: center;
  color: ${(props) => props.$color || 'inherit'};
  font-size: ${(props) => props.$font_size || 'inherit'};
  font-weight: ${(props) => props.$font_weight || 'inherit'};
  line-height: ${(props) => props.$line_height || 'inherit'};
`;

export const HelpTxt = styled.span`
  display: block;
  word-break: keep-all;
  color: #fe7b7b;
  font-size: 12px;
  padding: 0.2rem;
`;

export const ErrorTxt = styled.p`
  width: 100%;
  margin: 1rem auto;
  text-align: center;
  color: #fe7b7b;
  font-size: 14px;
  font-weight: 700;
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

// S : Main Layout
export const MainWrapper = styled(Wrapper)`
  display: grid;
  gap: 16px;
  grid-template-columns: 2fr 4fr;
  max-width: 860px;
`;
export const Contents = styled.div`
  padding: 1rem;
`;
export const MenuWrapper = styled.nav`
  padding: 1rem;

  border-right: 1px solid #ddd;
`;
export const MenuUl = styled.ul``;
export const MenuLi = styled.li`
  display: flex;
  align-items: center;
  margin: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  transition: 0.4s;
  cursor: pointer;
  span {
    display: inline-block;
    margin: 0 7px;
  }
  &:hover {
    color: tomato;
  }
`;

export const TextArea = styled.textarea``;

export const AttachFileBtnWrap = styled.div``;

export const AttachFileBtn = styled(BasicBtn)`
`;

// E : Main Layout
