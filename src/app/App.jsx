import Header from "../Common/Header/Header";
import '../index.css'
import Sidebar from "../Common/Sidebar/Sidebar";
import {Routes,Route} from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout><HomePage/></Layout>}/>
        </Routes>
    )
}
export default App