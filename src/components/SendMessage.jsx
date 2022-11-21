import React, { useContext, useState } from 'react'
import { AuthContext } from '../auth/AuthContex';
import { Chatcontext } from '../context/chat/ChatContext';
import { SocketContext } from '../context/SocketContext';


export const SendMessage = () => {
    const [mensaje, setMensaje] = useState("");
    const {socket} = useContext(SocketContext)
    const {auth} = useContext(AuthContext)
    const {chatState} = useContext(Chatcontext)


    const onChangeMensaje = ({target}) =>{
       setMensaje(target.value)
    }
    const onSubmitMensaje = (e) =>{
        e.preventDefault();

        if(mensaje.length ===0) {return;}
        console.log(mensaje);
        //Emitir el evento de sockets 

        socket.emit('m',{
            de: auth.uid,
            para: chatState.chatActivo,
            mensaje,
        })


        setMensaje("")


        //Hacer el dispach
    }
    return (
        <form onSubmit={onSubmitMensaje}>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input type="text" className="write_msg text-white" placeholder="Mensaje..." 
                    value={mensaje}
                    onChange= {onChangeMensaje}/>
                </div>
                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="submit">
                        enviar
                    </button>
                </div>
            </div>
        </form>
    )
}
