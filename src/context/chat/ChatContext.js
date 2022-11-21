import React, { createContext, useReducer } from "react";
import { chatRedux } from "./ChatRedux";

export const Chatcontext = createContext()

const inicialState = {
    uid: '',
    chatActivo : null, //uid del usuario que recivira el mensaje
    usuarios : [],  //Todos los usuarios de la db 
    mensajes: [] //Vienen del chat seleccionado
}


export const ChatProvide = ({children}) => {
  const  [chatState, dispatch] = useReducer(chatRedux, inicialState);
  
  return (
    <Chatcontext.Provider value={{chatState, dispatch}}>
        {children}
    </Chatcontext.Provider>
  )
}
