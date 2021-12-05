import React from "react";

const Vacations = () => {
    return(
        <div className="container-fluid">
        <div className="row text-center"
                style={{backgroundColor: '#7a7373',
                opacity:'0.2',}}>
            <div className="col -sm-12 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
                <h4>Vacaciones</h4>
            </div>

            <div className="col-sm-6 col-md-2 d-flex align-items-center justify-content-center">
              <select className="form-select form-select-sm" id ="filt" aria-label=".form-select-sm example">
                <option selected>Buscar por</option>
                <option value="1">Fecha</option>
                <option value="2">Solicitud</option>
                <option value="3">Estado</option>
              </select>
            </div> 

            <div className="col-sm-6 col-md-4 col-lg-4 d-flex align-items-center justify-content-center">
                <input className="form-control form-control-sm" id="bus" type="text" placeholder="Buscar..." aria-label=".form-control-sm example"/>    
            </div>
  
            <div className="col-sm-6 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
                <button type="button" className="btn btn-light btn-sm" >Buscar</button>
            </div>

            <div className="col-sm-6 col-md-2 col-lg-2 d-flex align-items-center">
                <button type="button" className="btn btn-light btn-sm" >Pendientes</button>
            </div>       
        </div>
        
        <div className="row mt-3 justify-content-center">
          <div className="col -sm-11 col-md-11 col-lg-11">
            <table className="table table-bordered border-dark table-info">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Tipo de Solicitud</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>01/12/2021</td>
                  <td>Salida</td>
                  <td>Pendiente</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>02/12/2021</td>
                  <td>Salida</td>
                  <td>Rechazada</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>03/12/2021</td>
                  <td>Salida</td>
                  <td>Aprobada</td>
                </tr>
              </tbody>
            </table> 
          </div>
        </div>
        </div>
    )
}

export default Vacations;