import Header from "../Common/Header/Header";
import '../index.css'
import Sidebar from "../Common/Sidebar/Sidebar";
import {Routes, Route} from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import UserListPage from "../pages/UserListPage/UserListPage";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import Page404 from "../pages/Page404/Page404";

const App = () => {
    return (<Routes>
        <Route path={'/'} element={<Layout><HomePage/></Layout>}/>
        <Route path={'/users'} element={<Layout><UserListPage/></Layout>}/>
        <Route path={'/user/edit'} element={<Layout><EditProfilePage/></Layout>}/>
        <Route path={'*'} element={<Layout><Page404/></Layout>}/>
    </Routes>)
}
export default App