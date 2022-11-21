import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../auth/AuthContex";
import Sw from 'sweetalert2'

export const LoginPage = () => {

  const {login} = useContext(AuthContext)

  const [form, setForm] = useState({
    email:"",
    passwd: "",
    rememberme: false
  })

  const onChangeValue = ({target}) =>{
    const {name, value} = target
    setForm({
      ...form,
      [name] : value
    })
  }

  const onSubmit = async (e) =>{
    e.preventDefault()
    console.log(form);

    const {email, passwd } = form
    //llamar al back
    const ok = await login(email,passwd)
    if(!ok){
      Sw.fire("Error", "Verifique el usuario y contraseña", "error");
    }

  }

  const bloquearBoton = () =>{
    return (form.email.length > 0 && form.passwd.length > 0) ? true : false;
  }

  return (
    <>
      <div className="container mt-5 text-white">
        <div className="row justify-content-center ">
          <div className="col-md-6">
            <div className="card bg-dark mt-5">
              <div className="card-header text-center">
                 
                <span className="display-5 m-5 ">Login</span>
              </div>
              <div className="col-md-12 c p-5 ">
                <form className="" onSubmit={onSubmit}>
                  <div className="mb-3">
                    <input
                      className="form-control w-100"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={onChangeValue}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                      className="form-control w-100"
                      type="password"
                      name="passwd"
                      placeholder="Password"
                      value={form.passwd}
                      onChange={onChangeValue}
                    />
                    <span className="focus-input100"></span>
                  </div>

                  <div className="row mb-3">
                    <div className="col">
                      <input
                        className="input-checkbox100"
                        id="ckb1"
                        type="checkbox"
                        name="rememberme"
                      />
                      <label className="label-checkbox100">Recordarme</label>
                    </div>

                    <div className="col text-right">
                      <Link to="/auth/register" className="txt1">
                        Nueva cuenta?
                      </Link>
                    </div>
                  </div>

                  <div className="container-login100-form-btn m-t-17">
                    <button disabled = {!bloquearBoton()} className="btn btn-outline-primary w-100">
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
