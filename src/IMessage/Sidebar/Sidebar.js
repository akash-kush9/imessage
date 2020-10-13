import React from 'react'
import './Sidebar.css'
import {Avatar, IconButton} from '@material-ui/core'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SearchIcon from '@material-ui/icons/Search';
import SidbarChat from './SidebarChat/SidebarChat'
const Sidebar = () => {
    const user = {
        displayName : 'Akash ',
        photoURL : 'https://i.pinimg.com/736x/f3/43/d6/f343d6bc14838938d75c0d970f872247.jpg' 
    }
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src={user.photoURL} className='sidebar__avatar'>
                    {user.displayName[0]}
                </Avatar>
                <div className='sidebar__inputContainer'>
                    <IconButton >
                        <SearchIcon/>
                    </IconButton>
                    <input placeholder = 'Search'/>
                </div>
                <IconButton >
                <QuestionAnswerIcon/>
                </IconButton>
            </div>
            <div className='sidebar__body'>
                
                <SidbarChat
                    channelName = 'deggre'
                    timestamp='11 22 222 55 '
                />
                <SidbarChat     
                    channelName = 'asdasdasdasdas'
                    timestamp='Yesterday' 
                />
                <SidbarChat/>
                <SidbarChat/>
                <SidbarChat/>
                <SidbarChat/>
                <SidbarChat/>
                <SidbarChat/>
                <SidbarChat/>
                <SidbarChat/>
                <SidbarChat/>
                <SidbarChat/>
                <SidbarChat/>
                <SidbarChat/>
                <SidbarChat/>
            </div>
        </div>
    )
}

export default Sidebar
