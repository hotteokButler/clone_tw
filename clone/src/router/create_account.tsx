import { useNavigate } from 'react-router-dom';
import { checkEmail, checkPassword } from '../app/ck_validation';
import {
  AccountForm,
  AccountInput,
  Label,
  AccountWrap,
  Input,
  SubmitBtn,
  HelpTxt,
  MainTitle,
} from '../components/styled';
import { useState } from 'react';
import { firebaseApp } from '../app/firebase_init';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const auth = getAuth(firebaseApp);

function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const [help, setHelp] = useState('');
  const [error, setError] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case 'name':
        setUser((prev) => ({ ...prev, name: value }));
        break;
      case 'email':
        checkEmail(value) ? setHelp('') : setHelp('유효한 이메일 형식이 아닙니다.');
        setUser((p) => ({ ...p, email: value }));
        break;
      case 'password':
        checkPassword(value) ? setHelp('') : setHelp('최소 6자리이상 12자리 이하, 가능한 특수문자 !@#$%^*+=-');
        setUser((prev) => ({ ...prev, password: value }));
        break;
      default:
        alert('유효한 범위가 아닙니다.');
        break;
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading || user.name === '' || user.email === '' || user.password === '') return;

    try {
      const credential = await createUserWithEmailAndPassword(auth, user.email, user.password);

      await updateProfile(credential.user, { displayName: user.name });
      navigate('/');
    } catch (err) {
      //set error
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AccountWrap bg_color="#2b2b2b">
      <AccountForm onSubmit={onSubmit}>
        <MainTitle font_weight={900} font_size="2rem">
          🤗SIGN IN
        </MainTitle>
        {help.length > 1 && <HelpTxt>{help}</HelpTxt>}
        <AccountInput id="name">
          <Label htmlFor="name_input">이름(Name)</Label>
          <Input
            onChange={onChange}
            name="name"
            value={user.name}
            id="name_input"
            placeholder="이름(Name)"
            type="text"
            required
          />
        </AccountInput>
        <AccountInput id="email">
          <Label htmlFor="email_input">이메일(Email)</Label>
          <Input
            onChange={onChange}
            name="email"
            value={user.email}
            id="email_input"
            placeholder="이메일(Email)"
            type="text"
            required
          />
        </AccountInput>
        <AccountInput id="password">
          <Label htmlFor="password_input">비밀번호(password)</Label>
          <Input
            onChange={onChange}
            name="password"
            value={user.password}
            id="password_input"
            placeholder="비밀번호(Password)"
            type="password"
            required
          />
        </AccountInput>
        <SubmitBtn bg_color="#ff927e" padding="12px 20px" color="#fff" margin="1rem 0 0">
          {isLoading ? '😎loading..' : '회원가입'}
        </SubmitBtn>
      </AccountForm>
    </AccountWrap>
  );
}

export default CreateAccount;
