import PostForm from "../components/post_form";
import { MainContent } from "../components/styled";
import Timeline from "./timeline";


function Home() {

  return (
    <MainContent>
      <PostForm/>
      <Timeline/>
    </MainContent>
  );
}

export default Home;
