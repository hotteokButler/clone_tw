import { ITweet } from '../type_def';
import { Payload, TweetCloumn, TweetPhoto, TweetWrap, UserName } from './styled';

function Tweet({ user_name, photo, tweet }: ITweet) {
  return (
    <TweetWrap>
      <TweetCloumn>
        <UserName>{user_name}</UserName>
        <Payload>{tweet}</Payload>
      </TweetCloumn>
      {photo && (
        <TweetCloumn>
          <TweetPhoto src={photo} />
        </TweetCloumn>
      )}
    </TweetWrap>
  );
}

export default Tweet;
