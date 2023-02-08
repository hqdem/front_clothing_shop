import './index.css'
import Main from "./layouts/Main/Main.jsx"
import Footer from "./layouts/Footer/Footer.jsx"
import Header from "./layouts/Header/Header.jsx"
import ItemList from "./components/ItemList/ItemList.jsx"
import {Route, Routes} from "react-router-dom"

function App() {

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<ItemList/>}/>
                    <Route path="/items/:id" element={<ItemList />} />
                </Routes>
            </Main>
            <Footer/>
        </>
    )
}

export default App
