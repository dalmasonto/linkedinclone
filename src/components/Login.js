import React, { useState } from 'react'
import '../styles/Login.css'
import { auth } from '../FirebaseConfig/Firebase'
import { useDispatch } from 'react-redux';

import { login } from '../features/counter/UserSlice';
import Swal from 'sweetalert2';
// import { IonButton, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react';

// import IosAdd from 'react-ionicons/lib/IosAdd'
// import LogoNodejs from 'react-ionicons/lib/LogoNodejs'

function Login() {

  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
  });

  const errorSwal =(err, message) => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...!!',
      text: message,
      footer: `${err}`
    })
  }

  const mypic = "https://scontent.fnbo9-1.fna.fbcdn.net/v/t1.0-9/69439446_908577422809369_2695684696611749888_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeH7ieoUYfS8CaKKqqSEfZqSerODatelIt16s4Nq16Ui3e8vy4ePIo_urdO0LgpAXhfiF3AigjnNgz8vHIgwhJX4&_nc_ohc=x5gFQ-GQgOkAX9WMtX1&_nc_ht=scontent.fnbo9-1.fna&oh=1216ac719d03ac5b651e2c41402113ca&oe=60037A58";

  const register = () => {
    if(!name){
      return errorSwal('Something went wrong on registration', 'No valid fullname')
    }
    else if(!email){
      return errorSwal('Something went wrong on registration', 'Email field is required')
    }

    else if(!password){
      return errorSwal('Something went wrong on registration', 'Password missing')
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updateProfile(
        {
          displayName: name,
          photoURL: photo,
        }
      ).then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: photo
        }));
        Toast.fire({
          icon: 'success',
          title: 'Signup successful.'
        });
      })
    }).catch(err => 
      errorSwal(err, 'Something went wrong on registration')   
    )
    
  }

  const loginUser = (e) =>{
    e.preventDefault();
    console.log('sonf,ds')
    auth.signInWithEmailAndPassword(email, password).then(userAuth => {
      dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL
      }));
      Toast.fire({
          icon: 'success',
          title: 'Login successful.'
        });
    }).catch(err => 
      
      errorSwal(err, 'Something went wrong on login')  
    )
    console.log(email)
  }

  return (
    <div className="login"> 
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/LinkedIn_Logo_2013.svg/1024px-LinkedIn_Logo_2013.svg.png" alt="linkedinimage"/>

      {/* <IonRow>
        <IonGrid>
          <IonCol size="4" offset="4" offsetMd="4" sizeMd="4" lines="none">
            <form>
            <IonItem>
              <IonLabel position="floating">
                Fullname
              </IonLabel>
              <IonInput type="text" value={name} onIonChange={e => setName(e.target.value)}/>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">
                PhotoUrl
              </IonLabel>
              <IonInput type="text" value={photo} onIonChange={e => setPhoto(e.target.value)}/>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">
                Email
              </IonLabel>
              <IonInput type="email" value={email} onIonChange={e => setEmail(e.target.value)}/>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">
                Password
              </IonLabel>
              <IonInput type="password" value={password} onIonChange={e => setPassword(e.target.value)}/>
            </IonItem>

            <IonButton expand="block" className="ion-margin-top" onClick={loginUser}>
              Sign in
            </IonButton>
            </form>
          </IonCol>
        </IonGrid>
      </IonRow> */}

      <form>
        <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name(required if signing up)" />
        <input value={photo} onChange={e => setPhoto(e.target.value)} type="text" placeholder="Profile picture url (Optional)" />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
        <button onClick={loginUser}> Sign in </button>
      </form>

      <p> Not a member? <span className="login__register" onClick={register}> Register now! </span> </p>

    </div>
  )
}

export default Login
