import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
const SidebarChat = ({
    channelName = 'Testing',
    channelImage = 'https://i.pinimg.com/736x/77/f1/1f/77f11fb82348190bc966661ad45c6763.jpg',
    message='Last seen Message',
    timestamp='TimeStamp Goes here'
}) => {
   
    return (
        <div className='sidebarChat'>
            <Avatar src={channelImage || null}>
{channelName[0]}
            </Avatar>
            <div className='sidebarChat__info'>
            <div className='sidebarChat__infoHeader'>
                <h3>{channelName }</h3>
                <p><span className='sidebarChat__timestamp' >{timestamp}</span></p>
            </div>  
                <p>{message || '........'}</p>
            </div>  
        </div>
    )
}

export default SidebarChat
