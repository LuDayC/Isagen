import React from "react";

const Nomina = () => {
    return(
        <div>
            <div className="row text-center"
                style={{backgroundColor: '#1698cc',
                        opacity:'0.6',}}>         
                
                <div className="col -sm-12 col-md-12 col-lg-12 text-center">
                    <h4>Descargar Nómina</h4>
                </div>
            </div>
            <div class="modal-body">
                <div class="row g-3">
                    <div class="col">
                        <label for="date" class="form-label">Fecha requerida</label>
                        <input type="text" class="form-control" id="date" type="text" placeholder="DD/MM/AA"/>
                    </div>
                </div>
            </div>
            <hr />
            <div class="modal-footer">
                <button type="button" class="btn btn-light btn btn-outline-danger" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" class="btn btn-light btn btn-outline-success" data-bs-dismiss="modal">Descargar</button>
            </div>
        </div>

    )
}

export default Nomina;