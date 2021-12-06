import React from "react";
import Dash from "./dashboard";
import Footer from "./footer";
import {Link} from "react-router-dom";

const Uactivar = () => {
    return(
        <div>
            <Dash />
            <div className="container-fluid">
            <div className="row text-center"
                style={{backgroundColor: '#1698cc',
                        opacity:'0.6',}}>         
                
                <div className="col -sm-12 col-md-12 col-lg-12 text-center">
                    <h4>¿Está segur@?</h4>
                </div>
            </div>
            </div>
            <div class="modal-body">
            <div className="row d-flex align-items-center justify-content-center">
            ¿Desea Activar este usuario?
            </div>
            </div>
            <div class="modal-footer">
            <Link to="/usuarios" class="btn btn-light btn btn-outline-danger">Cancelar</Link>
                <Link to="/usuarios" class="btn btn-light btn btn-outline-success">Aceptar</Link>
            </div>
            <Footer /> 
        </div>

    )
}

export default Uactivar;