import React from "react";

const Solicitudes = () => {
    return(
        <div>
            <div className="row text-center"
                style={{backgroundColor: '#1698cc',
                        opacity:'0.6',}}>         
                
                <div className="col -sm-12 col-md-12 col-lg-12 text-center">
                    <h4>Crear Solicitud</h4>
                </div>
            </div>
                <div className="col -sm-4 col-md-4 col-lg-4 justify-content-center align-items-center">
                    <label for="date" className="form-label">Fecha inicio</label>
                    <input type="text" className="form-control" id="date" type="text" placeholder="DD/MM/AA"/>
                </div>

                <div className="col -sm-4 col-md-4 col-lg-4 justify-content-center align-items-center">
                    <label for="date" className="form-label">Fecha final</label>
                    <input type="text" className="form-control" id="date" type="text" placeholder="DD/MM/AA"/>
                </div>
                <div className="row g-3">
                    <div className="col -sm-4 col-md-4 col-lg-4 justify-content-center align-items-center">
                        <label for="filt" className="form-label">Tipo Solicitud</label>
                        <select className="form-select" id ="filt" aria-label="example">
                            <option selected>Seleccione</option>
                            <option value="1">Permisos</option>
                            <option value="2">Vacaciones</option>
                        </select>
                    </div>
                </div>
                <hr />
            <div className="modal-footer">
                <button type="button" className="btn btn-light btn btn-outline-danger">Cancelar</button>
                <button type="button" className="btn btn-light btn btn-outline-success">Solicitar</button>
            </div>
        </div>
        
    )
}

export default Solicitudes;