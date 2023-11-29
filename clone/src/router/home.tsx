import { useNavigate } from 'react-router-dom';
import { auth } from '../app/firebase_init';
import { BasicBtn } from '../components/styled';

function Home() {
  const navigate = useNavigate();

  const handleLogout =(e: React.MouseEvent<HTMLButtonElement>) => {
    auth.signOut();
    alert('로그아웃 되었습니다😊');
    navigate('/');
  };
  return (
    <>
      <h2>Home</h2>
      <BasicBtn $bg_color="#ff927e" $padding="12px 20px" $color="#fff" $margin="0 auto 1rem" onClick={handleLogout}>
        LOGOUT
      </BasicBtn>
    </>
  );
}

export default Home;
