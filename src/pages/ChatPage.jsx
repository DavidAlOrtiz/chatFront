import React, { useContext } from 'react';
import { ChatSelect } from '../components/ChatSelect';
import { InboxPeople } from '../components/InboxPeople';
import { Messages } from '../components/Messages';
import { Chatcontext } from '../context/chat/ChatContext';


import '../css/chat.css';

export const ChatPage = () => {
    const {chatState} = useContext(Chatcontext)
    return (
        <div className="container-fluid bg-dark messaging">
            <div className="inbox_msg">

                <InboxPeople />

                {
                    (chatState.chatActivo)
                        ? <Messages />
                        : <ChatSelect />
                }
                

            </div>


        </div>
    )
}
