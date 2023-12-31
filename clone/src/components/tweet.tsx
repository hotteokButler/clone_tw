import { deleteDoc, doc } from 'firebase/firestore';
import { auth, db, storage } from '../app/firebase_init';
import { ITweet } from '../type_def';
import { DeleteBtn, Payload, TweetCloumn, TweetPhoto, TweetWrap, UserName } from './styled';
import { TiDelete } from 'react-icons/ti';
import { deleteObject, ref } from 'firebase/storage';

function Tweet({ user_name, photo, tweet, user_id, id }: ITweet) {
  const user = auth.currentUser;
  const onDelete = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (user?.uid !== user_id) return;
    try {
      await deleteDoc(doc(db, 'tweet', id));
      if (photo) {
        const photoRef = ref(storage, `tweets/${user.uid}/${id}`);
        await deleteObject(photoRef);
      }
      alert('삭제 완료되었습니다');
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  return (
    <TweetWrap>
      {user?.uid === user_id ? (
        <DeleteBtn type="button" onClick={onDelete}>
          <TiDelete />
        </DeleteBtn>
      ) : null}
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
