import { collection, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import { TimelineWrap } from '../components/styled';
import { useState, useEffect } from 'react';
import { db } from '../app/firebase_init';
import { ITweet } from '../type_def';
import Tweet from '../components/tweet';

function Timeline() {
  const [tweets, setTweet] = useState<ITweet[] | undefined>([]);

  const tweetQuery = query(collection(db, 'tweet'), orderBy('createdAt'));
  // const fetchTweets = async () => {
  //   const snapshot = await getDocs(tweetQuery);
  //   const tweets = snapshot.docs.map((doc) => {
  //     const { createdAt, photo, tweet, user_id, user_name } = doc.data();
  //     return {
  //       createdAt,
  //       photo,
  //       tweet,
  //       user_id,
  //       user_name,
  //       id: doc.id,
  //     };
  //   });
  // };

  useEffect(() => {
    const unsubscribe = onSnapshot(tweetQuery, (snapshot) => {
      const tweets = snapshot.docs.map((doc) => {
        const { createdAt, photo, tweet, user_id, user_name } = doc.data();
        return {
          createdAt,
          photo,
          tweet,
          user_id,
          user_name,
          id: doc.id,
        };
      });
      setTweet(tweets);
    });

    return () => unsubscribe();
  }, []);

  return (
    <TimelineWrap>
      {tweets?.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </TimelineWrap>
  );
}

export default Timeline;
