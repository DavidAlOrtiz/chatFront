import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContex';
import { Chatcontext } from '../context/chat/ChatContext';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {

    const {chatState} = useContext(Chatcontext);
    const {auth} = useContext(AuthContext);
    console.log(chatState.mensajes.reverse().reverse());
    return (
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div className="msg_history" id="mensajes">

                {
                    chatState.mensajes.reverse().reverse().map( msg => (
                        ( msg.para === auth.uid  )
                            ? <IncomingMessage key={ msg._id } msg={msg}/>
                            : <OutgoingMessage key={ msg._id } msg={msg} />
                    ))
                }

                

            </div>
            {/* <!-- Historia Fin --> */}

           <SendMessage />

        </div>
    )
}
