import React, { createContext, useCallback, useContext, useState } from "react";
import { Chatcontext } from "../context/chat/ChatContext";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types";

export const AuthContext = createContext();

const inicialState = {
  uid: null,
  checkin: true,
  logged: false,
  name: null,
  email: null,
};

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(inicialState);
  const {dispatch} = useContext(Chatcontext);

  const login = async (email, passwd) => {
    console.log(email + " " + passwd);
    const resp = await fetchSinToken("login", { email, passwd }, "POST");
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const {usuario} = resp;
      setAuth({
        uid: usuario.uid,
        checkin: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email,
      });
      console.log("Autenticado")
    }
    return resp.ok
  };

  const registrar = async (nombre, email, passwd) => {
    console.log(email + " " + passwd);
    const resp = await fetchSinToken("login/new", { nombre ,email, passwd }, "POST");
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const {usuario} = resp;
      setAuth({
        uid: usuario.uid,
        checkin: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email,
      });
      console.log("Autenticado")
      return true
    }
    return resp.msg
  };

  const verificaToken = useCallback( async () => {
    const token = localStorage.getItem("token");
    if(!token) {
       setAuth({
        uid: null,
        checkin: false,
        logged: false,
        name: null,
        email: null,
      });
      return false
    }

    const resp = await fetchConToken('login/renew');
    if (resp.ok) {
      localStorage.setItem("token", resp.token);
      const {usuario} = resp;
      setAuth({
        uid: usuario.uid,
        checkin: false,
        logged: true,
        name: usuario.nombre,
        email: usuario.email,
      });
      console.log("Autenticado")
      return true
    }else{
      setAuth({
        uid: null,
        checkin: false,
        logged: false,
        name: null,
        email: null,
      });
      return false;
    }

  }, []);

  const logout = () => {
    localStorage.removeItem("token");

    dispatch({
      type: types.cerrarSession
    })

    setAuth({
      checkin: false,
      logged: false,
    });

  };

  return (
    <AuthContext.Provider
      value={{
        login,
        registrar,
        verificaToken,
        logout,
        auth
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
