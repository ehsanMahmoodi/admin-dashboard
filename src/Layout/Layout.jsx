import {Box} from "@mui/material";
import {useStyle} from "./Layout.style";
import Header from "../Common/Header/Header";
import Sidebar from "../Common/Sidebar/Sidebar";

const Layout = ({children}) => {
    // get css style
    const classes = useStyle()
    return (
        <Box sx={{display: 'flex !important', width: "100% !important"}}>
            <Sidebar/>
            <Box className={classes.layoutWrapper}>
                <Header/>
                {children}
            </Box>
        </Box>

    )
}
export default Layout