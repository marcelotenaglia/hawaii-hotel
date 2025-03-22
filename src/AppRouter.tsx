import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar"; 
import { Footer } from "./components/Footer/Footer";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
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