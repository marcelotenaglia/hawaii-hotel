import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar"; 
import { Footer } from "./components/Footer/Footer";
import { HomePage } from "./components/Home/Home";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <HomePage />
            <Routes>
                <Route />
            </Routes>
            <hr
                style={{ border: "none", borderTop: "1px solid #e0e0e0", margin: "0" }}
            />
            <Footer />
        </BrowserRouter>
    )
}