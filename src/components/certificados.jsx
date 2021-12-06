import React from "react";
import Dash from "./dashboard";
import Footer from "./footer";
import Home from "./home";
import {Link} from "react-router-dom";

const Certificados = () => {
    return(
        <div>
            <Dash />
            <Home />
            <div className="row text-center"
                style={{backgroundColor: '#1698cc',
                        opacity:'0.6',}}>         
                
                <div className="col -sm-12 col-md-12 col-lg-12 text-center">
                    <h4>Descargar Certificado</h4>
                </div>
            </div>
            <div className="row g-3">
                    <div className="col">
                        <label for="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" type="text" placeholder="Ingrese su nombre"/>
                    </div>

                    <div className="col">
                        <label for="date" className="form-label">Fecha</label>
                        <input type="text" className="form-control" id="date" type="text" placeholder="DD/MM/AA"/>
                    </div>
                </div>
            <hr />
            <div className="modal-footer">
                <Link to="/home" class="btn btn-light btn btn-outline-danger">Cancelar</Link>
                <button type="button" className="btn btn-light btn btn-outline-success" data-bs-dismiss="modal">Descargar</button>
            </div>
            <Footer />
        </div>
    )
}

export default Certificados;