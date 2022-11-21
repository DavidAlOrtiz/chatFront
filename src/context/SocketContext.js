import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthContext } from '../auth/AuthContex';
import { scrollBottonAnimated } from '../helpers/scroll';
import { useSocket } from '../hooks/useSockets'
import { types } from '../types/types';
import { Chatcontext } from './chat/ChatContext';

export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {
    // https://chat-pri.herokuapp.com/
    //http://localhost:3000
    const { socket, online, conectarSocket, desconectarSocket } = useSocket('https://chat-pri.herokuapp.com/');
    const {auth} = useContext(AuthContext)
    const {dispatch} = useContext(Chatcontext)

    useEffect(()=>{
        if(auth.logged){
            conectarSocket()
        }
    },[auth, conectarSocket ])

    useEffect(()=>{
        if( !auth.logged){
            desconectarSocket()
        }
    },[auth, desconectarSocket])
    
    //Escuchar los cambios de los usuarios conectados 
    useEffect(()=>{
        socket?.on("lista-usuarios", (usuarios) =>{
            console.log(usuarios)
            dispatch({
                type: types.usuariosCargados,
                payload: usuarios
            })
        })
    },[socket, dispatch])

    useEffect(()=>{
        socket?.on("m", (mensaje) =>{
            console.log(mensaje)
            //Dispach 
            dispatch({
                type: types.nuevoMensaje,
                payload: mensaje
            })

            //Mover scrol
            scrollBottonAnimated("mensajes");
        })
    },[socket, dispatch])


    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}