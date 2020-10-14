import React,{useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './App.css';
import { selectUser,login,logout } from './features/userSlice';
import IMessage from './IMessage/IMessage';
import Login from './Login/Login';
import {auth} from './firebase';
import { selectChannel } from './features/channelSlice';
function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
     auth.onAuthStateChanged(authuser =>{
    authuser ?  dispatch(login({
          uid : authuser.uid,
          displayName : authuser.displayName,
          email : authuser.email,
          photoURL : authuser.photoURL
      })): dispatch(logout() )

    })
    return () => {
    }
  }, [dispatch])
  return (
    <div className='app'> {
    user ?( <IMessage/>) :( <Login />)
    
    }</div>
  );
}

export default App;
