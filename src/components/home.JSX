import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <div class="container-fluid">
        <div className="row text-center" 
            style={{backgroundColor: '#1698cc',
            opacity:'0.6',}}>
        
            <div class="col -sm-12 col-md-2 col-lg-2">
                <h4>Bienvenid@ Usuario</h4>
            </div>

            <div className="col-sm-3 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
                <Link to="/home/solicitudes" className="btn btn-light btn btn-outline-dark btn-sm">Solicitudes</Link>
            </div>
        
            <div className="col-sm-3 col-md-3 col-lg-3 d-flex align-items-center justify-content-center">
                <Link to="/home/certificados" className="btn btn-light btn btn-outline-dark btn-sm">Certificado Laboral</Link>
            </div>

            <div className="col-sm-3 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
                <Link to="/home/nomina" className="btn btn-light btn btn-outline-dark btn-sm">Nómina</Link>
            </div>

            <div className="col-sm- col-md-3 col-lg-3 d-flex align-items-center justify-content-center">
                <Link to="/home/editarperfil" className="btn btn-light btn btn-outline-dark btn-sm">Editar Perfil</Link>
            </div>
        </div>
        </div>
    )
}

export default Home;