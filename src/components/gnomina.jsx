import React from "react";
import Dash from "./dashboard";
import Footer from "./footer";
import {Link} from "react-router-dom";

const Gnomina = () => {
    return(
        <div class="container-fluid">
          <Dash />
            <div class="container-fluid">
            <div className="row text-center"
                style={{backgroundColor: '#1698cc',
                        opacity:'0.6',}}>
            <div className="col -sm-12 col-md-12 col-lg-12 text-center">
                    <h4>Generar nómina</h4>
                </div>
            <div className="row align-items-end">
                <div class="col -lg-6">
                    <input class="form-control" type="text" value="Nombre del usuario" aria-label="Disabled input example" disabled readonly/>
                </div>
                <div class="col -lg-6">
                    <label for="date" class="form-label">Fecha</label>
                    <input type="text" class="form-control" id="date" type="text" placeholder="DD/MM/AA"/>
                </div>
            </div>
            <div className="row">
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Contenido</label>
                    <textarea class="form-control" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae tristique est. Vestibulum tempus eleifend ante, vel porttitor sem dapibus in. Nam metus nisl, euismod condimentum felis ac,venenatis sodales est. Nullam orci erat, semper vel est at, feugiat consequat metus.In semper, elit sit amet scelerisque pharetra,eros orci lacinia enim, eget condimentum ligula orci id urna. Integer porttitor leo id faucibus efficitur. In ut ex id augue pellentesque ullamcorper nec ut neque. Aenean eget orci consequat, ornare augue at, iaculis neque. Quisque lacus purus, semper eu dignissim a, malesuada id ante." id="exampleFormControlTextarea1" rows="3" aria-label="Disabled input example" disabled readonly></textarea>
                </div>
            </div>
            <div class="col -sm-2 col-md-2 col-lg-4">
                <input class="form-control" type="text" value="Total cancelado" aria-label="Disabled input example" disabled readonly/>
            </div>
            <div className="row">
            <div className="modal-footer">
                <Link to="/home" class="btn btn-light btn btn-outline-danger">Cancelar</Link>
                <button type="button" className="btn btn-light btn btn-outline-success">Generar</button>
            </div> 
            </div>
            </div>
        </div>
        <Footer />
        </div>
            
    )
}

export default Gnomina;