import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Sw from "sweetalert2";
import { AuthContext } from "../auth/AuthContex";

export const RegisterPage = () => {
  const { registrar } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    passwd: "",
    name: "",
  });

  const onChangeValue = ({ target }) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    const { name, email, passwd } = form;
    //llamar al back
    const msg = await registrar(name , email, passwd);
    if ( msg !== true) {
      Sw.fire("Error", msg, "error");
    }
  };
  const bloquearBoton = () => {
    return form.email.length > 0 &&
      form.passwd.length > 0 &&
      form.name.length > 0
      ? true
      : false;
  };
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center ">
          <div className="col-md-6 mt-5">
            <div className="card mt-5 bg-dark text-white">
              <div className="card-header text-center">
                <span className="display-5 m-5 ">Registrate</span>
              </div>
              <div className="card-body">
                <form className="" onSubmit={onSubmit}>
                  <div className="">
                    <input
                      className="form-control w-100 mb-3"
                      type="text"
                      name="name"
                      placeholder="Nombre"
                      value={form.name}
                      onChange={onChangeValue}
                    />
                    <span className="focus-input100"></span>
                  </div>

                  <div className="wrap-input100 validate-input mb-3">
                    <input
                      className="form-control w-100 mb-3"
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={onChangeValue}
                    />
                    <span className="focus-input100"></span>
                  </div>

                  <div className="wrap-input100 validate-input mb-3">
                    <input
                      className="form-control w-100 mb-3"
                      type="password"
                      name="passwd"
                      placeholder="Password"
                      value={form.passwd}
                      onChange={onChangeValue}
                    />
                    <span className="focus-input100"></span>
                  </div>

                  <div className="row mb-3">
                    <div className="col text-right">
                      <Link to="/auth/login" className="txt1">
                        Ya tienes cuenta?
                      </Link>
                    </div>
                  </div>

                  <div className="container-login100-form-btn m-t-17">
                    <button
                      disabled={!bloquearBoton()}
                      className="btn btn-outline-primary w-100"
                    >
                      Crear cuenta
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
