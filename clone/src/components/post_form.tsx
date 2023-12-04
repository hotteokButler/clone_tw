import { useRef, useState } from 'react';
import { FormElem, TextArea, AttachFileBtnWrap, AttachFileBtn, Input, PostBtn } from './styled';
import { HiFolderPlus } from 'react-icons/hi2';
import { TbSquareRoundedPlusFilled } from 'react-icons/tb';
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { auth, db, storage } from '../app/firebase_init';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

function PostForm() {
  const [isLoading, setLoading] = useState(false);
  const [tweet, setTweet] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const fileUpLoad = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    inputRef.current && inputRef.current.click();
  };

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTweet(event.target.value);
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event?.target;
    if (files && files.length === 1) {
      const maxSize = 1 * 1024 * 1024; //1MB 제한
      const fileSize = files[0].size;
      if (fileSize > maxSize) {
        alert('첨부파일 사이즈는 1MB 이내로 등록 가능합니다.');
        setFile(null);
        return false;
      } else {
        setFile(files[0]);
        setFileName(files[0].name);
      }
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = auth.currentUser;
    if (isLoading || tweet === '' || tweet.length > 200 || !user) return;

    try {
      setLoading(true);
      const doc = await addDoc(collection(db, 'tweet'), {
        tweet,
        createdAt: Date.now(),
        user_name: user.displayName || 'Anonymous',
        user_id: user.uid,
      });

      if (file) {
        const locationRef = ref(storage, `tweets/${user.uid}-${user.displayName}/${doc.id}`);
        const result = await uploadBytes(locationRef, file);
        const url = await getDownloadURL(result.ref);
        await updateDoc(doc, {
          photo: url,
        });
      }
      setTweet('');
      setFile(null);
      setFileName('');
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <FormElem onSubmit={onSubmit}>
        <Input id="file" type="file" accept="image/*" hidden ref={inputRef} onChange={onFileChange} />
        <TextArea
          value={tweet}
          rows={5}
          maxLength={200}
          placeholder="What is happening?!"
          onChange={onChange}
          required
        />

        <AttachFileBtnWrap>
          <AttachFileBtn type="button" onClick={fileUpLoad}>
            <HiFolderPlus />
            {file ? <span>{fileName}</span> : null}
          </AttachFileBtn>

          <PostBtn type="submit">
            <TbSquareRoundedPlusFilled />
            <span>{isLoading ? 'Posting..' : 'Post Now'}</span>
          </PostBtn>
        </AttachFileBtnWrap>
      </FormElem>
    </>
  );
}

export default PostForm;
