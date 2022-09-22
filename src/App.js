import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Home from "./pages";
import LoginPage from "./pages/login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} exact/>
                <Route path='/offer' element={<Home/>} exact/>
                <Route path='/login' element={<LoginPage/>} exact/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
