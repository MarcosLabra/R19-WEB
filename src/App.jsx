import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from './UI/Cover';
import Dte from './UI/Dte';
import DteActividades from './UI/DteActividades';
import EnTerritorio from './UI/EnTerritorio';
import Equipo from './UI/Equipo';
import Footer from './UI/Footer';
import Instagram from './UI/Instagram';
import Testimonios from './UI/Testimonios';
import AccionDetalle from './UI/AccionDetalle';

function App() {
  return (
    <Router basename="/R19-WEB">
      <Routes>
        <Route path="/" element={
          <>
            <Cover />
            <EnTerritorio />
            <Dte />
            <Equipo />
            <Instagram />
            <Testimonios />
            <DteActividades />
            <Footer />
          </>
        } />
        <Route path="/acciones/:accionId" element={<AccionDetalle />} />
        <Route path="*" element={<div style={{ padding: '2rem' }}>Página no encontrada</div>} />
      </Routes>
    </Router>
  );
}

export default App;
