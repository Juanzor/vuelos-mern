import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Baja from './components/Baja';
import ModificarPage from './components/ModificarPage';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import AltaPage from './components/AltaPage';
import Navbar from './components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/alta' element={<AltaPage />}></Route>
                    <Route path='/baja' element={<Baja />}></Route>
                    <Route path='/modificar' element={<ModificarPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
