import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/login.jsx'
import Permisos from './components/permisos'
import Reporte from './components/reporte';
import Usuarios from './components/usuarios';
import Vacations from './components/vacaciones';
import Solicitudes from './components/solicitudes'
import Certificados from './components/certificados'
import Nomina from './components/nomina'
import Editarp from './components/editarperfil'
import Ppendientes from './components/ppendientes'
import Vpendientes from './components/vpendientes'
import Ucrear from './components/ucrear'
import Gnomina from './components/gnomina'
import Uactivar from './components/uactivar';
import Udesactivar from './components/udesactivar';
import NoMatch from './components/error404';

export default function App() {
  return (
    <Router>
    <div>   
        <Routes>
          <Route exact path="/" element={<Login />}/>
          <Route exact path="/home" element={<Reporte />}/>
          <Route exact path="/home/solicitudes" element={<Solicitudes />}/>
          <Route exact path="/home/certificados" element={<Certificados />}/>
          <Route exact path="/home/nomina" element={<Nomina />}/>
          <Route exact path="/home/editarperfil" element={<Editarp />}/>
          <Route exact path="/permisos" element={<Permisos />}/>
          <Route exact path="/permisos/pendientes" element={<Ppendientes />}/>
          <Route exact path="/vacaciones" element={<Vacations />}/>
          <Route exact path="/vacaciones/pendientes" element={<Vpendientes />}/>
          <Route exact path="/usuarios" element={<Usuarios />}/>
          <Route exact path="/usuarios/crear" element={<Ucrear />}/>
          <Route exact path="/usuarios/activar" element={<Uactivar />}/>
          <Route exact path="/usuarios/desactivar" element={<Udesactivar />}/>
          <Route exact path="/nomina" element={<Gnomina />}/>
          <Route path="*" element={<NoMatch />}/>
        </Routes>
      </div>
    </Router>
  );
}

