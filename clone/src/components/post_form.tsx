import { useRef, useState } from 'react';
import { FormElem, TextArea, AttachFileBtnWrap, AttachFileBtn, Input, PostBtn } from './styled';
import { HiFolderPlus } from 'react-icons/hi2';
import { TbSquareRoundedPlusFilled } from 'react-icons/tb';

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
      setFile(files[0]);
      setFileName(files[0].name);
    }
  };
  return (
    <>
      <FormElem>
        <Input id="file" type="file" accept="image/*" hidden ref={inputRef} onChange={onFileChange} />
        <TextArea value={tweet} rows={5} maxLength={200} placeholder="What is happening?!" onChange={onChange} />

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
