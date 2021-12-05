import React from "react";

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
                <button type="button" className="btn btn-light btn btn-outline-dark btn-sm" data-bs-toggle="modal" data-bs-target="#solicitud">Solicitudes</button>
            </div>
        
            <div className="col-sm-3 col-md-3 col-lg-3 d-flex align-items-center justify-content-center">
                <button type="button" className="btn btn-light btn btn-outline-dark btn-sm" data-bs-toggle="modal" data-bs-target="#claboral">Certificado Laboral</button>
            </div>

            <div className="col-sm-3 col-md-2 col-lg-2 d-flex align-items-center justify-content-center">
                <button type="button" className="btn btn-light btn btn-outline-dark btn-sm" data-bs-toggle="modal" data-bs-target="#nomina">Nómina</button>
            </div>

            <div className="col-sm- col-md-3 col-lg-3 d-flex align-items-center justify-content-center">
                <button type="button" className="btn btn-light btn btn-outline-dark btn-sm" data-bs-toggle="modal" data-bs-target="#eperfil">Editar Perfil</button>
            </div>

            <div className="modal fade" id="solicitud" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Solicitudes</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div/>
                        <div className="modal-body">
                            <div className="row g-3">
                                <div className="col">
                                    <label for="date" className="form-label">Fecha inicio</label>
                                    <input type="text" className="form-control" id="date" type="text" placeholder="DD/MM/AA"/>
                                </div>

                                <div className="col">
                                    <label for="date" className="form-label">Fecha final</label>
                                    <input type="text" className="form-control" id="date" type="text" placeholder="DD/MM/AA"/>
                                </div>
                                <div className="row g-3">
                                    <div className="col">
                                        <label for="filt" className="form-label">Tipo Solicitud</label>
                                        <select className="form-select" id ="filt" aria-label="example">
                                            <option selected>Seleccione</option>
                                            <option value="1">Permisos</option>
                                            <option value="2">Vacaciones</option>
                                        </select>
                                    </div>
                                </div>    
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-light btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" className="btn btn-light btn btn-outline-success" data-bs-dismiss="modal">Solicitar</button>
                                </div>
                            </div>
                        </div>    
                    </div>   
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;