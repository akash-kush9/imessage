import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
const SidebarChat = ({id,
    channelName,
    channelImage ,
    lastMessage,
    timestamp,handleClick
}) => {

    return (
        <div className='sidebarChat' onClick={()=>handleClick(id,channelName)} key={id}>
            <Avatar src={channelImage || null}>
                {channelName[0]}
            </Avatar>
            <div className='sidebarChat__info'>
            <div className='sidebarChat__infoHeader'>
                <h3>{channelName }</h3>
                <p><span className='sidebarChat__timestamp' >{`new Date(timestamp).toISOString()`}</span></p>
            </div>  
                <p>{lastMessage || '........'}</p>
            </div>  
        </div>
    )
}

export default SidebarChat
