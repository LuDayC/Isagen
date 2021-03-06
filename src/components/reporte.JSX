import React from "react";
import Dash from "./dashboard";
import Footer from "./footer";
import Home from "./home";
import {Link} from "react-router-dom";

const Reporte = () => {
    return(
      <div class="container-fluid">
          <Dash />
          <Home />
          <div class="container-fluid">  
            <div className="row" 
            style={{backgroundColor: '#1698cc',
            opacity:'0.6',}}>
            <div className="col -sm-6 col-md-6 col-lg-6 text-center">
                <h4>Reportes por salario</h4>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3 d-flex justify-content-md-end">
                <button type="button" className="btn btn-light border-dark btn-sm" >Descargar reporte</button>
            </div>
            </div>     
        </div>
        
        <div className="row mt-3 d-flex text-center justify-content-center align-items-center">
          <div className="col -sm-11 col-md-11 col-lg-11">
            <table className="table table-bordered border-dark table-info">
              <thead>
                <tr>
                    <th colspan="4">Empleados con más de un salario mínimo</th>
                </tr>

                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Tipo de Usuario</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Luisito Mendoza</td>
                  <td>Empleado</td>
                  <td>3 palos</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Luisito Mendoza</td>
                  <td>Empleado</td>
                  <td>3 palos</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Luisito Mendoza</td>
                  <td>Empleado</td>
                  <td>3 palos</td>
                </tr>
              </tbody>
            </table> 
          </div>
        </div>

        <div className="row mt-3 d-flex text-center justify-content-center align-items-center">
          <div className="col -sm-11 col-md-11 col-lg-11">
            <table className="table table-bordered border-dark table-info">
              <thead>
                <tr>
                    <th colspan="4">Empleados con menos de un salario mínimo</th>
                </tr>
                
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Tipo de Usuario</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Raimundo puertas</td>
                  <td>Empleado</td>
                  <td>0.5 palos</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Raimundo puertas</td>
                  <td>Empleado</td>
                  <td>0.5 palos</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Raimundo puertas</td>
                  <td>Empleado</td>
                  <td>0.5 palos</td>
                </tr>
              </tbody>
            </table> 
          </div>
        </div>
        <Footer />
        </div>
        
    )
}

export default Reporte;