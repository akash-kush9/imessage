import { Avatar } from '@material-ui/core'
import React ,{forwardRef}from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice'
import * as timeago from 'timeago.js'
import './Message.css'
const Message = forwardRef( ({messageDetails,id} , ref) => {
    const user = useSelector(selectUser)
    return (
        <div ref={ref} className={`message ${user.email === messageDetails.email && 'message__sender'}  `} id={id} key={id}>
            <Avatar className='message__avatar' src={messageDetails?.photoURL}>
            </Avatar>
            <div className='messageInfo'>
                <p>
                    {messageDetails?.message} 
                </p>
                   <small className='message__timestamp'>
                       {
                            messageDetails.timestamp ? 
                            timeago.format(new Date(messageDetails.timestamp?.toDate()).toLocaleString()):  '' 
                       }
                      </small> 
            </div>
           
 
        </div>
    )
})

export default Message
