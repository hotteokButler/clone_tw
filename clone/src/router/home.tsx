import { BasicBtn } from '../components/styled';

function Home() {
  const handleLogout = (e) => {};
  return (
    <>
      <h2>Home</h2>
      <BasicBtn bg_color="#ff927e" padding="12px 20px" color="#fff" margin="1rem" onClick={handleLogout}>
        LOGOUT
      </BasicBtn>
    </>
  );
}

export default Home;
