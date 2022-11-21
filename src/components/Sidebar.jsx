import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContex'
import { Chatcontext } from '../context/chat/ChatContext'
import { SidebarChatItem } from './SidebarChatItem'

export const Sidebar = () => {

   const {chatState} = useContext(Chatcontext)
   const {auth}  = useContext(AuthContext)
    
    const {uid} = auth

    return (
        <div className="inbox_chat">

            {
                chatState.usuarios.filter(user => user.uid !== uid).map( (usuario) => (
                    <SidebarChatItem usuario={usuario} key={ usuario.uid } />
                ))
            }


            {/* <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>


        </div>

    )
}
