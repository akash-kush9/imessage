import { IconButton } from '@material-ui/core'
import {  MicOutlined } from '@material-ui/icons'
import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectChannel } from '../../features/channelSlice'
import { selectUser } from '../../features/userSlice'
import db from '../../firebase'
import firebase from 'firebase'
import Message from './Message/Message'
import './Chat.css'
import FlipMove from 'react-flip-move';
const Chat = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const channel = useSelector(selectChannel)
    const [message,setMessage] = useState('')
    const [messages,setMessages] = useState([])
    const sendMessage = (e) => {
        e.preventDefault();
        // lastMessage :
        db.collection('channels').doc(channel?.channelId).collection('messages').add({
             message : message,timestamp:firebase.firestore.FieldValue.serverTimestamp(),
             email : user.email , username:user.displayName, photoURL : user.photoURL
        })
        setMessage('')
    }
    useEffect(() => {
        if (channel.channelId){
            db.collection('channels').doc(channel?.channelId).collection('messages').orderBy('timestamp',"asc").onSnapshot(snapshot =>{
                setMessages(snapshot.docs.map(doc=>({
                    id:doc.id,
                    ...doc.data()
                })))
            })
        }
        return () => {
        }
    }, [channel,dispatch])
    return (

        <div className='chat' key={channel?.channelId}>
            <div className='chat__header'>
                <h4>To: <span className='chat__name'> {channel?.channelName}</span></h4>
                <strong>Details</strong>
            </div>
            <div className='chat__messages'>
                  <FlipMove>
                {
                    messages.map(messageDetails =>(
                    <Message messageDetails={messageDetails} id={messageDetails.id} /> ))
                }
                </FlipMove>
            </div>

                <div className='chat__input'>
                    <form >
                        <input placeholder='iMessage' onChange={(e)=>{setMessage(e.target.value)}}  value={message} type='text' />
                        <button onClick={sendMessage} >Send Message</button>
                    </form>
                    <IconButton>
                        <MicOutlined/>
                    </IconButton>
                </div>
        
        </div>
    )}
        
        export default Chat
        