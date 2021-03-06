import Header from "../Common/Header/Header";
import '../index.css'
import Sidebar from "../Common/Sidebar/Sidebar";
import {Routes, Route} from "react-router-dom";
import Layout from "../Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import UserListPage from "../pages/UserListPage/UserListPage";
import EditProfilePage from "../pages/EditProfilePage/EditProfilePage";
import Page404 from "../pages/Page404/Page404";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
const App = () => {
    return (<Routes>
        <Route path={'/'} element={<Layout><HomePage/></Layout>}/>
        <Route path={'/users'} element={<Layout><UserListPage/></Layout>}/>
        <Route path={'/user/edit'} element={<Layout><EditProfilePage/></Layout>}/>
        <Route path={'/register-user'} element={<RegisterPage/>}/>
        <Route path={'/login-user'} element={<LoginPage/>}/>
        <Route path={'*'} element={<Layout><Page404/></Layout>}/>
    </Routes>)
}
export default App