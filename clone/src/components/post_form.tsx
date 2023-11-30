import { useRef } from 'react';
import { FormElem, TextArea, AttachFileBtnWrap, AttachFileBtn, Input } from './styled';
import { HiFolderPlus } from 'react-icons/hi2';

function PostForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const fileUpLoad = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    inputRef.current && inputRef.current.click();
  };
  return (
    <>
      <FormElem>
        <TextArea />

        <AttachFileBtnWrap>
          <AttachFileBtn onClick={fileUpLoad}>
            <HiFolderPlus />
          </AttachFileBtn>
          <Input id="file" type="file" accept="image/*" hidden ref={inputRef} />
        </AttachFileBtnWrap>
      </FormElem>
    </>
  );
}

export default PostForm;
