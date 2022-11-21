import React, { useContext } from 'react'
import { Chatcontext } from '../context/chat/ChatContext'
import { fetchConToken } from '../helpers/fetch'
import { scrollBotton, scrollBottonAnimated } from '../helpers/scroll'
import { types } from '../types/types'

export const SidebarChatItem = ({usuario}) => {

    const {email,nombre, online, passwd, uid} = usuario

    const { chatState ,dispatch} = useContext(Chatcontext)
    const {chatActivo} = chatState;
    const activarChat = async () =>{
        dispatch({
            type: types.activarChat,
            payload : uid
        })
        //Cargar los mensajes del chat
        const resp = await fetchConToken(`mensajes/${usuario.uid}`);
        dispatch({
            type : types.cargarMensajes,
            payload : resp.mensajes
        })

        //mover scroll
        scrollBotton("mensajes");
    }

    return (
        <div onClick={activarChat} className={`bg-dark' ${ (uid == chatActivo) ? "bg-primary" : "bg-dark" }`} >
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img"> 
                    <img src="http://images7.memedroid.com/images/UPLOADED644/5fad5baa4a2b2.jpeg" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5 className="text-white">{nombre}</h5>
                    {
                        (online) ? <span className="text-success">Online</span> : <span className="text-danger">Offline</span>
                    }
                    
                    
                </div>
            </div>
        </div>
    )
}
