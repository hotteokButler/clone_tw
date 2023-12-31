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

export const FormElem = styled.form<{ $width?: string; $max_height?: string }>`
  width: ${(props) => props.$width};
  max-height: ${(props) => props.$max_height || 'auto'};
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
  grid-template-columns: 2fr 4fr;
  grid-template-rows: 100%;
  max-width: 860px;
`;
export const Contents = styled.div`
  padding: 1rem;
  border-right: 1px solid #ddd;
  border-left: 1px solid #ddd;
`;
export const MenuWrapper = styled.nav`
  padding: 1rem;
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

export const TextArea = styled.textarea`
  width: 100%;
  margin: 0 auto 0.3rem;
  border-radius: 5px;
  border: 2px solid #9494f1;
  padding: 1rem;
  resize: none;
  min-height: 100px;
  &::placeholder {
    font-size: 1rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
  &:focus {
    outline: none;
    border-color: #955fd7;
  }
`;

export const AttachFileBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
`;

export const AttachFileBtn = styled(BasicBtn)`
  font-size: 1.2rem;
  color: #9494f1;
  span {
    display: inline-block;
    font-size: 0.7rem;
    vertical-align: middle;
    margin-top: -5px;
    margin-left: 5px;
    width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }
`;
export const PostBtn = styled(BasicBtn)`
  font-size: 1.2rem;
  color: #9494f1;
  span {
    display: inline-block;
    margin: 0px 0px 0px 4px;
    font-size: 1rem;
    vertical-align: top;
  }
`;

export const MainContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 5fr;
  gap: 15px;
  height: 100%;
  overflow: hidden;
`;

// E : Main Layout

// S :Timeline

export const TimelineWrap = styled.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    transition: 0.4s;
    background: transparent; /* 스크롤바 색상 */
    border-radius: 5rem;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &:hover {
    &::-webkit-scrollbar-thumb {
      background: #9494f1; /* 스크롤바 색상 */
    }
  }
`;
// E :Timeline

// S:Tweet

export const TweetWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr 7fr;
  padding: 20px;
  background-color: transparent;
  &:not(:last-child) {
    border-bottom: 1px solid #ddd;
  }
`;

export const TweetCloumn = styled.div``;
export const UserName = styled.p``;
export const Payload = styled.p``;

export const TweetPhoto = styled.img`
  width: 100%;
`;

export const DeleteBtn = styled(BasicBtn)`
  position: absolute;
  right: 0;
  top: 1%;
  font-size: 2rem;
  color: #9494f1;
`;
// E:Tweet

// S: Profile
export const ProfileWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProfileUpload = styled(Label)`
  width: 70px;
  height: 70px;
  cursor: pointer;
  margin:  0 auto 0.5rem;
  border-radius: 50%;
  overflow: hidden;
  svg {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
  }
`;

export const ProfileImg = styled.img``;

export const ProfileInput = styled(Input)`
  display: none;
`;

export const ProfileName = styled.span`
`


// E: Profile
