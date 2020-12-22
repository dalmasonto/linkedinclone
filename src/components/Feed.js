import { CalendarToday, Create, Event, Image, Subscriptions, SubscriptionsOutlined } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { db } from '../FirebaseConfig/Firebase'
import '../styles/Feed.css'
import InputOption from './InputOption'
import Post from './Post'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/counter/UserSlice'
import FlipMove from 'react-flip-move'

function Feed() {

  const user = useSelector(selectUser);

  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([]);

  useEffect(() => { 
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot =>   
      setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
          }))
      )  
     
    );
  }, [])
    
    

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add(
      {
        name: user?.displayName,
        description: user?.email,
        message: input,
        photoUrl: user?.photoUrl || '',
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      }
    )

    setInput('');

  }

  // console.log('objectp', posts)

  return (
    <div className="feed">

      {/* INPUT */}
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
            <button onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#7085F9" />
          <InputOption Icon={SubscriptionsOutlined} title="Video" color="#E7A33E" />
          <InputOption Icon={Event} title="Event" color="#COCBCD" />
          <InputOption Icon={CalendarToday} title="Write article" color="#7FC15E" />
        </div>
      </div>

      {/* POSTS */}
      <FlipMove>
      {
        // eslint-disable-next-line array-callback-return
        posts.map(({id, data: {name, description, message, photoUrl}}) => {
          return (
            <Post 
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
          )
        })
      }
      </FlipMove>

      {/* <Post name="Dalmas Ogembo" description="dalmasogembo@gmail.com" message="The message is here" photoUrl="" /> */}
    </div>
  )
}

export default Feed
