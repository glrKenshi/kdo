import { lazy, Suspense} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import ScrollToTop from './hooks/ScrollToTop'

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './styles/style.scss'    
import './components/header/header.scss'

const Main = lazy(() => import('./pages/main/Main'))
const Price = lazy(() => import('./pages/price/Price'))
const Doctors = lazy(() => import('./pages/docs/Docs'))
const Therapy = lazy(() => import('./pages/therapy/Therapy'))
const Ortho = lazy(() => import('./pages/ortho/Ortho'))
const Diagnostic = lazy(() => import('./pages/diagnostic/Diagnostic'))
const Apparat = lazy(() => import('./pages/apparat/Apparat'))
const Requisite = lazy(() => import('./pages/requisite/Requisite'))
const Supervisory = lazy(() => import('./pages/supervisory/Supervisory'))
const Сertificate = lazy(() => import('./pages/certificate/Сertificate'))

function App() {
    return (
        <Router>
            <div className='app'>
                <div className="container">
                    <Header />
                    <ScrollToTop />
                    <Suspense fallback={<div>Загрузка...</div>}>
                        <Routes>
                            <Route path="/" element={<Main/>}/>
                            <Route path="/apparat" element={<Apparat/>}/>
                            <Route path="/diagnostic" element={<Diagnostic/>}/>
                            <Route path="/ortho" element={<Ortho/>}/>
                            <Route path="/therapy" element={<Therapy/>}/>
                            <Route path="/doctors" element={<Doctors/>}/>
                            <Route path="/price" element={<Price/>}/>
                            <Route path="/requisite" element={<Requisite/>}/>
                            <Route path="/supervisory" element={<Supervisory/>}/>
                            <Route path="/certificate" element={<Сertificate/>}/>
                        </Routes>
                    </Suspense>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
