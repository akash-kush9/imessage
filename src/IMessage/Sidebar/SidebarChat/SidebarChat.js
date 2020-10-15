import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './SidebarChat.css';
import * as timeago from 'timeago.js'
import db from './../../../firebase'
const SidebarChat = ({id,
    channelName,
    imageURL,
    handleClick,timestamp
}) => {
    const [chatInfo,setChatInfo] = useState([]);
    useEffect(() => {
        db.collection('channels').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot=>{
            setChatInfo(snapshot.docs.map(doc=>({
                id:doc.id,
                ...doc.data()
            })))
        })
        return () => {}
    }, [id])
    return (
        <div className='sidebarChat' onClick={()=>handleClick(id,channelName)} key={id}>
            <Avatar src={imageURL || null}>
                {channelName[0]}
            </Avatar>
            <div className='sidebarChat__info'>
            <div className='sidebarChat__infoHeader'>
                <h4>{channelName }</h4>
                <p><span className='sidebarChat__timestamp' >{ 
               chatInfo[0]?.timestamp ? timeago.format(new Date(chatInfo[0]?.timestamp?.toDate()).toLocaleString())   :  
               timeago.format(new Date(timestamp?.toDate()).toLocaleString()) 
            }</span></p>
            </div>  
                <p>{
                    chatInfo[0]?.message ?     chatInfo[0]?.message.length < 23 ? chatInfo[0]?.message : `${chatInfo[0]?.message.substr(0,20)}...`  : '........'
                
                }</p>
            </div>  
        </div>
    )
}

export default SidebarChat
