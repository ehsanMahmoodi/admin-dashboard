import {createContext, useState} from "react";

export const PublicContext = createContext({
    openSideBarMenu: true, setSideBarMenu: () => {
    },
    userOptionMenu: false, setUserOptionMenu: () => {
    },
})
export const PublicCtx = ({children}) => {
    const [openSideBarMenu, setSideBarMenu] = useState(true)
    const [userOptionMenu, setUserOptionMenu] = useState(false)
    return (
        <PublicContext.Provider value={{
            openSideBarMenu, setSideBarMenu,
            userOptionMenu, setUserOptionMenu
        }}>
            {children}
        </PublicContext.Provider>
    )
}