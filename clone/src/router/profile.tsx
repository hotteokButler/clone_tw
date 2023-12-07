import { useState } from 'react';
import { auth, storage } from '../app/firebase_init';
import { ProfileImg, ProfileInput, ProfileName, ProfileUpload, ProfileWrap } from '../components/styled';
import { PiUserCircleThin } from 'react-icons/pi';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';

function Profile() {
  const user = auth.currentUser;
  const [profile, setProfile] = useState(user?.photoURL);
  const onProfileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event?.target;
    if (!user) return;

    if (files && files.length === 1) {
      const file = files[0];
      const maxSize = 10 * 1024; //10KB 제한
      const fileSize = files[0].size;

      if (fileSize > maxSize) {
        alert('첨부파일 사이즈는 10KB 이내로 등록 가능합니다.');
        return false;
      } else {
        const locationRef = ref(storage, `profiles/${user?.uid}`);
        const result = await uploadBytes(locationRef, file);
        const profileUrl = await getDownloadURL(result.ref);
        setProfile(profileUrl);
        await updateProfile(user, {
          photoURL: profileUrl,
        });
      }
    }
  };

  return (
    <ProfileWrap>
      <ProfileUpload htmlFor="pf">
        {Boolean(profile) ? <ProfileImg src={profile} /> : <PiUserCircleThin />}
      </ProfileUpload>
      <ProfileInput id="pf" type="file" accept="image/*" onChange={onProfileChange} />
      <ProfileName>{user?.displayName ?? 'Anonymous'}</ProfileName>
    </ProfileWrap>
  );
}

export default Profile;
