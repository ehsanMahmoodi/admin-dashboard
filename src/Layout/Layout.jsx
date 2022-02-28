import {Box} from "@mui/material";
import Header from "../common/Header/Header";
import SideBar from "../common/SideBar/SideBar";
import {useStyle} from "./Layout.style";

const Layout = ({children}) => {
    // get css style
    const classes = useStyle()
    return (
        <Box sx={{display: 'flex !important', width: "100% !important"}}>
            <SideBar/>
            <Box className={classes.layoutWrapper}>
                <Header/>
                {children}
            </Box>
        </Box>

    )
}
export default Layout