import './App.css';
import React from 'react';
import Login from './components/login.jsx'
import Dash from './components/dashboard'
import Footer from './components/footer'
import Home from './components/home'
import Permisos from './components/permisos'
import Reporte from './components/reporte';
import Usuarios from './components/usuarios';
import Vacations from './components/vacaciones';

export default function App() {
  return (
  <div>
    <Dash />
    <Home />
    <Vacations />
    <Footer />
  </div>
  );
}


