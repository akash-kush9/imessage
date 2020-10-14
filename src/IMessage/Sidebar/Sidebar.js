 result.id ,
                    channelName : channelInput,
                }))
            ).catch(error => console.log(error))
        }
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
