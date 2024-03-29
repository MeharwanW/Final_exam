import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Route, Routes} from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Products from './components/Products';
import DeleteProduct from './components/DeleteProduct';
import { Services } from './components/Services';

export default function App() {
    return (
        <div>
            <Header/>
                <Routes>
                    <Route path={"/"} element={<HeroSection />}></Route>
                </Routes>
                <div className='container'>
                <Products />
                <Services />
                </div>
                
            <Footer/>
        </div>
    );
}
