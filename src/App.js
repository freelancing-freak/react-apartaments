import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages";
import LoginPage from "./pages/login";
import ApartmentsPage from "./pages/admin/Apartments";
import SettingsPage from "./pages/admin/SettingsPage";
import AddApartmentPage from "./pages/admin/AddNewApartment";
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
                <Route path='/login' element={<LoginPage/>} exact/>
                <Route exact path="/admin/apartments" element={<ApartmentsPage/>}/>
                <Route exact path="/admin/apartments/add" element={<AddApartmentPage/>}/>
                <Route exact path="/admin/settings" element={<SettingsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
