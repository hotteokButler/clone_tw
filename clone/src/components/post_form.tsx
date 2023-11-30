import { useRef } from 'react';
import { FormElem, TextArea, AttachFileBtnWrap, AttachFileBtn, Input, PostBtn } from './styled';
import { HiFolderPlus } from 'react-icons/hi2';
import { TbSquareRoundedPlusFilled } from 'react-icons/tb';
function PostForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const fileUpLoad = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    inputRef.current && inputRef.current.click();
  };
  return (
    <>
      <FormElem>
        <Input id="file" type="file" accept="image/*" hidden ref={inputRef} />
        <TextArea placeholder="What is happening?!" />

        <AttachFileBtnWrap>
          <AttachFileBtn onClick={fileUpLoad}>
            <HiFolderPlus />
          </AttachFileBtn>

          <PostBtn>
            <TbSquareRoundedPlusFilled /><span>Post Now</span>
          </PostBtn>
        </AttachFileBtnWrap>
      </FormElem>
    </>
  );
}

export default PostForm;
