import React from 'react'
import Chat from './Chat/Chat'
import './IMessage.css'
import Sidebar from './Sidebar/Sidebar'
const IMessage = () => {
    return (
        <div className='imessage'>
            <Sidebar/>
            <Chat/>
        </div>
    )
}

export default IMessage
