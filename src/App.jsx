import './index.css'
import Main from "./layouts/Main/Main.jsx"
import Footer from "./layouts/Footer/Footer.jsx"
import Header from "./layouts/Header/Header.jsx"
import ItemList from "./components/ItemList/ItemList.jsx"
import {Route, Routes} from "react-router-dom"
import RetrieveItem from "./components/RetrieveItem/RetrieveItem.jsx"
import Cart from "./components/Cart/Cart.jsx"
import OrderConfirm from "./components/OrderConfirm/OrderConfirm.jsx"

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
                </Routes>
            </Main>
            <Footer/>
        </>
    )
}

export default App
