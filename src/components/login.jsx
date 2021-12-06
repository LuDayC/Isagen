import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <div className="img-fluid mask d-flex align-items-center" 
            style={{
                backgroundImage: 'url("fondoif.jpg")',
                height: "100vh",}}>
          
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-md-8 col-lg-10">
                <form className="bg-white  rounded-5 shadow-5-strong p-5">
                      <div className="row mt-3">
                        <div className="col -sm-12 col-md-12 col-lg-12">
                          <img src="logoi.png" alt="Isagen S.A" width="150" height="150" className="rounded mx-auto d-block"/>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col -sm-12 col-md-12 col-lg-12 text-center">
                          <h4>Login</h4>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          <label for="user" className="form-label">Usuario</label>
                          <input type="text" className="form-control" id="user" type="text" placeholder="Ingrese su usuario" aria-label="Last name"/>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                          <label for="password" className="form-label">Contraseña</label>
                          <input type="password" className="form-control" id="password" placeholder="Ingrese su contraseña"/>
                        </div>
                      </div>

                      <div className="row mt-3">
                        <div className="col-sm-12 col-md-12 col-lg-12 d-flex align-items-center justify-content-center">
                          <Link to="/home" className="btn btn-info">Ingresar</Link>
                        </div>
                      </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Login;