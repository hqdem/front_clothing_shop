import './index.css'
import Main from "./layouts/Main/Main.jsx"
import Footer from "./layouts/Footer/Footer.jsx"
import Header from "./layouts/Header/Header.jsx"
import ItemList from "./components/ItemList/ItemList.jsx"
import {Route, Routes} from "react-router-dom"
import RetrieveItem from "./components/RetrieveItem/RetrieveItem.jsx"
import Cart from "./components/Cart/Cart.jsx"
import OrderConfirm from "./components/OrderConfirm/OrderConfirm.jsx"
import About from "./pages/About/About.jsx"
import Gallery from "./pages/Gallery/Gallery.jsx"
import Info from "./pages/Info/Info.jsx"

function App() {

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<ItemList/>}/>
                    <Route path="/items/:id" element={<RetrieveItem />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/confirm" element={<OrderConfirm />} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/gallery" element={<Gallery />}/>
                    <Route path="/info" element={<Info />}/>
                </Routes>
            </Main>
            <Footer/>
        </>
    )
}

export default App
