import {createContext, useState} from "react";
import userLists from '../Data/customers.json'

export const PublicContext = createContext({
    openSideBarMenu: true, setSideBarMenu: () => {
    }, userOptionMenu: false, setUserOptionMenu: () => {
    }, userList: [], setUserList: () => {
    },
})
export const PublicCtx = ({children}) => {
    const [openSideBarMenu, setSideBarMenu] = useState(true)
    const [userOptionMenu, setUserOptionMenu] = useState(false)
    const [userList, setUserList] = useState(userLists)
    return (<PublicContext.Provider value={{
        openSideBarMenu, setSideBarMenu, userOptionMenu, setUserOptionMenu, userList, setUserList
    }}>
        {children}
    </PublicContext.Provider>)
}