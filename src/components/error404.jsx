import React from "react";
import {useLocation, Link} from "react-router-dom";

const NoMatch = () => {
    return (
        <div className="img-fluid mask d-flex align-items-center" 
            style={{
                backgroundImage: 'url("fondoif.jpg")',
                height: "100vh",}}>
          
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-5 col-md-8 col-lg-10">
                <div className="bg-white rounded-5 shadow-5-strong p-5">
                    <NoMatch1 />
                    <div class="modal-footer">
                    <Link to="/" class="btn btn-light btn btn-outline-success">Volver al inicio</Link>  
                    </div>
                </div>
            </div>
          </div>
        </div>
        </div>
    );
}

export default NoMatch;


function NoMatch1() {
    let location = useLocation();
  
    return (
      <div>
        <h3>
          La página <code>{location.pathname}</code> no está disponible.
        </h3>
      </div>
    );
  }