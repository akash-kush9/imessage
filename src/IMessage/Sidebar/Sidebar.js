import React from 'react'
import './Sidebar.css'
import {Avatar, IconButton} from '@material-ui/core'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SearchIcon from '@material-ui/icons/Search';
import SidbarChat from './SidebarChat/SidebarChat'
import {selectUser} from './../../features/userSlice'
import {setChannel,selectChannel} from './../../features/channelSlice'

import db from './../../firebase';
import firebase from 'firebase';
const Sidebar = () => {
    const user = useSelector(selectUser)
    const channel = useSelector(selectChannel)
   
    /*   
     const user = {
        displayName : 'Akash ',
        photoURL : 'https://i.pinimg.com/736x/f3/43/d6/f343d6bc14838938d75c0d970f872247.jpg' 
    } 
 
                    result.id ,
                    channelName : channelInput,
                }))
            ).catch(error => console.log(error))
        }
    }
    */
   const handleClick = (id,channelName) =>{
    dispatch(setChannel({
        channelId : id ,
        channelName : channelName, 
    }))
   }
    const createChat = () => {
        const input = alert('Please enter a chat room name')
        db.collection('channels').add({
            channelName:input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            lastMessage:''
        }).then(result => {
            dispatch(setChannel({
                channelId : result.id ,
                channelName : input,
            }))
        }).catch(error => console.log(error))
    }
    useEffect(() => {
        // Set all chat records for sidebar 
        db.collection('channels').onSnapshot(snapshot=>
            setChannels( snapshot.docs.map(doc =>( {
                id : doc.id,
                ...doc.data()
            })))       
            )
    }, [user, dispatch])
    useEffect(()=>{
        // Set a default chat window for displaying chats
        if(!channel?.channelId && channels?.length>0){
            dispatch(setChannel({
                channelId : channels[0].id ,
                channelName : channels[0].channelName, 
            }))
        }
    },[channels])
        return (
            <div className='sidebar'>
                <div className='sidebar__header'>
                    <Avatar onClick={()=>auth.signOut()} src={user?.photoURL} className='sidebar__avatar'>
                        {user?.displayName[0]}
                    </Avatar>
                    <div className='sidebar__inputContainer'>
                        <IconButton >
                            <SearchIcon/>
                        </IconButton>
                        <input placeholder = 'Search'/>
                    </div>
                    <IconButton onClick={createChat}>
                        <QuestionAnswerIcon />
                    </IconButton>
                </div>
                <div className='sidebar__body'>
                    {
                        channels.map(({channelName,timestamp,id,lastMessage } )=> (
                            <SidbarChat
                            channelName = {channelName}
                            timestamp={timestamp}
                            id={id}
                            lastMessage={lastMessage}
                            handleClick={handleClick}
                        />
                        ))
                    }
                    
                </div>
            </div>
        )
}

export default Sidebar
