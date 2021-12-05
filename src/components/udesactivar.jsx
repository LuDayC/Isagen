import React from "react";

const Udesactivar = () => {
    return(
        <div>
            <div className="row text-center"
                style={{backgroundColor: '#1698cc',
                        opacity:'0.6',}}>         
                
                <div className="col -sm-12 col-md-12 col-lg-12 text-center">
                    <h4>¿Está segur@?</h4>
                </div>
            </div>
            <div class="modal-body">
            ¿Desea Desactivar este usuario?
            </div>
            <hr/>
            <div class="modal-footer">
            <button type="button" class="btn btn-light btn btn-outline-success" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-light btn btn-outline-danger" data-bs-dismiss="modal">Aceptar</button>
            </div>
        </div>

    )
}

export default Udesactivar;