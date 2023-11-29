import { useNavigate } from 'react-router-dom';
import {
  AccountForm,
  AccountInput,
  Label,
  AccountWrap,
  Input,
  SubmitBtn,
  MainTitle,
  ErrorTxt,
  SwitcherBtn,
} from '../components/styled';
import React, { useState } from 'react';
import { auth } from '../app/firebase_init';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';

function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = event;
    switch (name) {
      case 'email':
        setUser((p) => ({ ...p, email: value }));
        break;
      case 'password':
        setUser((prev) => ({ ...prev, password: value }));
        break;
      default:
        alert('유효한 범위가 아닙니다.');
        break;
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    if (isLoading || user.email === '' || user.password === '') return;
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      navigate('/');
    } catch (err) {
      //set error
      if (err instanceof FirebaseError) {
        setError(err.message);
      }
      setUser(() => ({ email: '', password: '' }));
    } finally {
      setIsLoading(false);
    }
  };

  const handleLink = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    let id;
    if (event.target instanceof Element) {
      id = event.target.id;
    }
    if (id === 'sign_in') {
      navigate('/sign-in');
    } else {
      return;
    }
  };
  return (
    <AccountWrap bg_color="#2b2b2b">
      <AccountForm onSubmit={onSubmit}>
        <MainTitle font_weight={900} font_size="2rem">
          LOG IN
        </MainTitle>
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
        <SubmitBtn bg_color="#ff927e" padding="12px 20px" color="#fff" margin="0 auto 1rem">
          {isLoading ? '😎loading..' : '로그인'}
        </SubmitBtn>
        {error ? <ErrorTxt>❌{error}</ErrorTxt> : null}

        <SwitcherBtn margin="0 auto 1rem" id="sign_in" onClick={handleLink}>
          😮Don't have an account?
        </SwitcherBtn>
      </AccountForm>
    </AccountWrap>
  );
}

export default Login;
