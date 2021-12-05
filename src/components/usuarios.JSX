import React from "react";

const Usuarios = () => {
    return(
        <div className="container-fluid">
            <div className="row" 
            style={{backgroundColor: '#7a7373',
                    opacity:'0.2',}}>
            <div className="col -sm-12 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
                <h4>Usuarios</h4>
            </div>

            <div className="col-sm-6 col-md-2 col-lg-3 d-flex align-items-center justify-content-center">
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
  
            <div className="col-sm-6 col-md-2 col-lg-1 d-flex align-items-center justify-content-center">
                <button type="button" className="btn btn-light btn-sm" >Buscar</button>
            </div>
            
            <div className="col-sm-6 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
                <button type="button" className="btn btn-light btn btn-outline-dark btn-sm" data-bs-toggle="modal" data-bs-target="#ucreate">Crear usuario</button>
            </div>
        </div>
        
        <div className="row mt-3">
          <div className="col -sm-11 col-md-12 col-lg-12">
            <table className="table table-bordered border-dark table-info">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre Completo</th>
                  <th scope="col">Tipo doc</th>
                  <th scope="col">Documento</th>
                  <th scope="col">Teléfono</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Fecha ingreso</th>
                  <th scope="col">Tipo usuario</th>
                  <th scope="col">Estado</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Pepito Pérez</td>
                  <td>C.C</td>
                  <td>1234567</td>
                  <td>31232123</td>
                  <td>pepitoperez123</td>
                  <td>01/11/2021</td>
                  <td>Empleado</td>
                  <td>Activo <button type="button" className="btn btn-light btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#udeactivate"><i class="fas fa-user-check"></i></button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Pepito Pérez</td>
                  <td>C.C</td>
                  <td>1234567</td>
                  <td>31232123</td>
                  <td>pepitoperez123</td>
                  <td>01/11/2021</td>
                  <td>Empleado</td>
                  <td>Activo <button type="button" className="btn btn-light btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#udeactivate"><i class="fas fa-user-check"></i></button></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Pepito Pérez</td>
                  <td>C.C</td>
                  <td>1234567</td>
                  <td>31232123</td>
                  <td>pepitoperez123</td>
                  <td>01/11/2021</td>
                  <td>Empleado</td>
                  
                  <td>Activo <button type="button" className="btn btn-light btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#udeactivate"><i class="fas fa-user-check"></i></button></td>
                </tr>
              </tbody>
            </table> 
          </div>
        </div>
        </div>
    )
}

export default Usuarios;