import React,{useState,
    useEffect ,} from 'react'
import './Sidebar.css'
import {Avatar, IconButton} from '@material-ui/core'
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SearchIcon from '@material-ui/icons/Search';
import SidbarChat from './SidebarChat/SidebarChat'
import {selectUser} from './../../features/userSlice'
import {setChannel,selectChannel} from './../../features/channelSlice'
import {useSelector,useDispatch} from 'react-redux'
import db,{auth} from './../../firebase';
import firebase from 'firebase';
const defaultImage = 'https://i.ytimg.com/vi/QB_-ZhQA8mY/maxresdefault.jpg'
const Sidebar = () => {
    const user = useSelector(selectUser)
    const channel = useSelector(selectChannel)
    const [channels,setChannels] = useState([])
   const dispatch = useDispatch()
   const handleClick = (id,channelName) =>{
    dispatch(setChannel({
        channelId : id ,
        channelName : channelName, 
    }))
   }
    const createChat = () => {
        const input = prompt('Please enter a chat room name')
        const imageURL = prompt('Enter a image url (Optional)')  || defaultImage
        db.collection('channels').add({
            channelName:input,
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
            imageURL : imageURL
        }).then(result => {
            dispatch(setChannel({
                channelId : result.id ,
                channelName : input,
            }))
        }).catch(error => console.log(error))
    }
    useEffect(() => {
        // Set all chat records for sidebar .orderBy('lastMessagetimestamp','desc')
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
                        {
                    channels?.length > 0 ? 
                    <>
                        <div className='sidebar__body'>
                            {
                                channels.map(({channelName,id,imageURL,timestamp } )=> (
                                    <SidbarChat
                                    channelName = {channelName}
                                    id={id}
                                    imageURL={imageURL}
                                    timestamp={timestamp}
                                    handleClick={handleClick}
                                />
                                ))
                            }
                            
                        </div>
                    </>
                     : null 
                }
                
            </div>
        )
}

export default Sidebar
