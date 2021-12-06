import React from "react";
import Dash from "./dashboard";
import Footer from "./footer";
import Home from "./home";
import {Link} from "react-router-dom";

const Editarp = () => {
    return(
        <div class="container-fluid">
            <Dash />
            <Home />
            <div class="container-fluid">
            <div className="row text-center"
                style={{backgroundColor: '#1698cc',
                        opacity:'0.6',}}>         
                
                <div className="col -sm-12 col-md-12 col-lg-12 text-center">
                    <h4>Editar perfil</h4>
                </div>
            </div>
            </div>
            <div class="row g-3">
                    <div class="col">
                        <label for="name" class="form-label">Nombre Completo</label>
                        <input class="form-control" id="name" type="text" aria-label="example"/>    
                    </div>

                    <div class="row g-3">
                        <div class="col">
                            <div class="form-check">
                                <label for="flexRadioDefault1" class="form-label">Tipo Doc</label>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                    T.I
                                    </label>
                                </div>
    
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                    C.C
                                    </label>
                                </div>
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                                    <label class="form-check-label" for="flexRadioDefault1">
                                    C.E
                                    </label>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col">
                            <label for="dnumber" class="form-label">Documento</label>
                            <input type="text" class="form-control" id="dnumber" type="text"/>
                        </div>
                    </div>

                    <div class="row g-3">
                        <div class="col">
                            <label for="cnumber" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="cnumber" type="text"/>
                        </div>
                    </div>
                    
                    <div class="row g-3">
                        <div class="col">
                            <label for="user" class="form-label">Usuario</label>
                            <input type="text" class="form-control" id="user" type="text"/>
                        </div>

                        <div class="col">
                            <label for="password" class="form-label">Contraseña</label>
                            <input type="password" class="form-control" id="password"/>
                        </div>
                    </div>
                </div>
            <hr />
            <div class="modal-footer">
                <Link to="/home" class="btn btn-light btn btn-outline-danger">Cancelar</Link>
                <Link to="/home" class="btn btn-light btn btn-outline-success">Actualizar</Link>
            </div>
            <Footer />
        </div>

    )
}

export default Editarp;