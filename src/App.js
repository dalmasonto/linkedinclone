import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Feed from './components/Feed';
import Header from './components/Header';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Widgets from './components/Widgets';
import { login, logout, selectUser } from './features/counter/UserSlice';
import { auth } from './FirebaseConfig/Firebase';

// import '@ionic/react/css/core.css';
// import '@ionic/react/css/ionic.bundle.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // The user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      }else{
        // The user is logged out
        dispatch(logout());
      }
    })
  }, [])
  
  return (
    
    <div className="app">
      {/* Header */}
      <Header />

      {/* App body */}
        {/* Check if the user is logged in then render what is needed */}
        {!user ? <Login />: (
          <div className="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgets */}
            <Widgets />
            

        </div>
        ) }
    </div>
  );
}

export default App;
