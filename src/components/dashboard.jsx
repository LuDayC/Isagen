import React from "react";
import {Link} from "react-router-dom";

const Dash = () => {
    return(
      <div class="container-fluid">
        <div className="row justify-content-center" 
            style={{backgroundColor: '#1698cc',
                    opacity:'0.7',}}>
                
            <div className="col -sm-12 col-md-2 col-lg-2">
            <Link to="/home"><img src="logoi.png" width="100" height="100" className="rounded mx-auto d-block" alt="Isagen S.A."/></Link>
            </div>

            <div className="col-sm-6 col-md-2 col-lg-2 d-flex align-items-center">
                <select className="form-select form-select-sm" id ="filt" aria-label=".form-select-sm example">
                  <option selected>Procesar</option>
                  <option value="1">Permisos</option>
                  <option value="2">Vacaciones</option>
                </select>
                <Link to="/home" className="btn btn-light btn btn-outline-dark"><i class="fas fa-search"></i></Link>
              </div>
  
            <div className="col-sm-3 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
                <Link to="/usuarios" className="btn btn-light btn btn-outline-dark btn-sm">Usuarios</Link>
            </div>
            
            <div className="col-sm-3 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
            <Link to="/home" className="btn btn-light btn btn-outline-dark btn-sm">Reportes</Link>
            </div>

            <div className="col-sm-3 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
            <Link to="/nomina" className="btn btn-light btn btn-outline-dark btn-sm">Nómina</Link>
            </div>
            
            <div className="col -sm-12 col-md-2 col-lg-2">
              <Link to="/"><img src="csesion.png" width="100" height="100" className="rounded mx-auto d-block"  alt="Cerrar sesión"/></Link>
            </div>
 
        </div>
        </div>

    )
}

export default Dash;