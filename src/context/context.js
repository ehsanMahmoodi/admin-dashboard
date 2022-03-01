import {createContext, useState} from "react";
import userLists from '../Data/customers.json'

export const PublicContext = createContext({
    openSideBarMenu: true, setSideBarMenu: () => {
    }, userOptionMenu: false, setUserOptionMenu: () => {
    }, userList: [], setUserList: () => {
    }, visiablePass: false, setVisiablePass: () => {
    },
})
export const PublicCtx = ({children}) => {
    const [openSideBarMenu, setSideBarMenu] = useState(true)
    const [userOptionMenu, setUserOptionMenu] = useState(false)
    const [userList, setUserList] = useState(userLists)
    const [visiablePass, setVisiablePass] = useState(false)
    return (<PublicContext.Provider value={{
        openSideBarMenu,
        setSideBarMenu,
        userOptionMenu,
        setUserOptionMenu,
        userList,
        setUserList,
        visiablePass,
        setVisiablePass
    }}>
        {children}
    </PublicContext.Provider>)
}