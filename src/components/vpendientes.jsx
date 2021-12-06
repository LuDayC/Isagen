import React from "react";
import Dash from "./dashboard";
import Footer from "./footer";

const Vpendientes = () => {
    return(
        <div>
            <Dash />
            <div class="container-fluid">
            <div className="row text-center"
                style={{backgroundColor: '#1698cc',
                        opacity:'0.6',}}> 

                <div className="col -sm-12 col-md-2 col-lg-1">
                    <h4>Vacaciones pendientes</h4>
                </div>

                <div className="col-sm-6 col-md-2 d-flex align-items-center">
                <select className="form-select form-select-sm" id ="filt" aria-label=".form-select-sm example">
                    <option selected>Buscar por</option>
                    <option value="1">Fecha</option>
                    <option value="2">Solicitud</option>
                </select>
                </div> 

                <div className="col-sm-6 col-md-4 col-lg-4 d-flex align-items-center">
                    <input className="form-control form-control-sm" id="bus" type="text" placeholder="Buscar..." aria-label=".form-control-sm example"/>    
                </div>
    
                <div className="col-sm-6 col-md-2 col-lg-2 d-flex align-items-center">
                    <button type="button" className="btn btn-light btn-sm" >Buscar</button>
                </div>     
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
                        <th scope="col">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">1</th>
                        <td>01/12/2021</td>
                        <td>Salida</td>
                        <td>
                            <button type="button" className="btn btn-light btn btn-outline-danger"><i class="fas fa-times-circle"></i> </button>
                            <button type="button" className="btn btn-light btn btn-outline-success"><i class="fas fa-check-circle"></i></button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">2</th>
                        <td>02/12/2021</td>
                        <td>Salida</td>
                        <td>
                            <button type="button" className="btn btn-light btn btn-outline-danger"><i class="fas fa-times-circle"></i> </button>
                            <button type="button" className="btn btn-light btn btn-outline-success"><i class="fas fa-check-circle"></i></button>
                        </td>
                        </tr>
                        <tr>
                        <th scope="row">3</th>
                        <td>03/12/2021</td>
                        <td>Salida</td>
                        <td>
                            <button type="button" className="btn btn-light btn btn-outline-danger"><i class="fas fa-times-circle"></i> </button>
                            <button type="button" className="btn btn-light btn btn-outline-success"><i class="fas fa-check-circle"></i></button>
                        </td>
                        </tr>
                    </tbody>
                    </table> 
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Vpendientes;