import { IconButton } from '@material-ui/core'
import { Message, MicOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import './Chat.css'
const Chat = () => {
    const [message,setMessage] = useState('')
    const sendMessage = (e) => {
        e.preventDefault();

        console.log(message)
        setMessage('')
    }
    return (
        <div className='chat'>
            <div className='chat__header'>
                <h4>To: <span className='chat__name'> Channel Name </span></h4>
                <strong>Details</strong>
            </div>
            <div className='chat__body'>
                ChatBody
                ChatBody
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
    )
}

export default Chat
