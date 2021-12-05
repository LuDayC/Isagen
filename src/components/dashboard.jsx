import React from "react";

const Dash = () => {
    return(
      <div class="container-fluid">
        <div className="row justify-content-center" 
            style={{backgroundColor: '#1698cc',
                    opacity:'0.7',}}>
                
            <div className="col -sm-12 col-md-2 col-lg-2">
              <img src="logoi.png" width="100" height="100" className="rounded mx-auto d-block"/>
            </div>

            <div className="col-sm-6 col-md-2 col-lg-2 d-flex align-items-center">
                <select className="form-select form-select-sm" id ="filt" aria-label=".form-select-sm example">
                  <option selected>Procesar</option>
                  <option value="1">Permisos</option>
                  <option value="2">Vacaciones</option>
                </select>
              </div>
  
            <div className="col-sm-3 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
                <button type="button" className="btn btn-light btn btn-outline-dark btn-sm">Usuarios</button>
            </div>
            
            <div className="col-sm-3 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
                <button type="button" className="btn btn-light btn btn-outline-dark btn-sm">Reportes</button>
            </div>

            <div className="col-sm-3 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
                <button type="button" className="btn btn-light btn btn-outline-dark btn-sm">Nómina</button>
            </div>
            
            <div className="col -sm-12 col-md-2 col-lg-2">
              <img src="csesion.png" width="100" height="100" className="rounded mx-auto d-block"/>
            </div>
 
        </div>
        </div>

    )
}

export default Dash;