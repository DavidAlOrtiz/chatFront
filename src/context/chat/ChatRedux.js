import { types } from "../../types/types"

export const chatRedux = (state, action) => {
    console.log( action)
    switch (action.type) {
        case types.cerrarSession:
            return {
                uid:"",
                chatActivo : "",
                usuarios:[],
                mensajes:[]
            }
        case types.usuariosCargados:
            return {
                ...state,
                usuarios: [...action.payload]
            }
        case types.activarChat:
            if(state.chatActivo === action.payload)  return state;
            return {
                ...state,
                chatActivo : action.payload,
                mensajes: []
            }
        case types.nuevoMensaje:
            if(state.chatActivo === action.payload.de || state.chatActivo === action.payload.para){
                return{
                    ...state,
                    mensajes: [...state.mensajes, action.payload]
                }
            }else{
                return state;
            }
        case  types.cargarMensajes:
            return {
                ...state,
                mensajes: [...action.payload]
            }
             

        default:
            return state
    }
}