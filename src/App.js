import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages";
import ContactPage from "./pages/contact";
import OfferDetailsPage from "./pages/offerDetails";
import AboutPage from "./pages/about";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/offer/:id' element={<OfferDetailsPage/>} exact/>
                <Route path='/about' element={<AboutPage/>} exact/>
                <Route path='/contact' element={<ContactPage/>} exact/>
                <Route path='*' element={<Home/>} exact/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
