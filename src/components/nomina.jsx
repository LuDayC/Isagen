import React from "react";
import Dash from "./dashboard";
import Footer from "./footer";
import Home from "./home";
import {Link} from "react-router-dom";

const Nomina = () => {
    return(
        <div class="container-fluid">
            <Dash />
            <Home />
            <div class="container-fluid">
            <div className="row text-center"
                style={{backgroundColor: '#1698cc',
                        opacity:'0.6',}}>         
                
                <div className="col -sm-12 col-md-12 col-lg-12 text-center">
                    <h4>Descargar Nómina</h4>
                </div>
            </div>
            </div>
            <div class="modal-body">
                <div class="row g-3">
                    <div class="col">
                        <label for="date" class="form-label">Fecha requerida</label>
                        <input type="text" class="form-control" id="date" type="text" placeholder="DD/MM/AA"/>
                    </div>
                </div>
            </div>
            <hr />
            <div class="modal-footer">
                <Link to="/home" class="btn btn-light btn btn-outline-danger">Cancelar</Link>
                <button type="button" class="btn btn-light btn btn-outline-success" data-bs-dismiss="modal">Descargar</button>
            </div>
            <Footer />
        </div>

    )
}

export default Nomina;