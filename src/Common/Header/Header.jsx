import {useContext} from "react";
import {Avatar, Box, Typography} from "@mui/material";
import {MenuOpenOutlined, SearchOutlined} from "@mui/icons-material";
import {Link, useNavigate} from "react-router-dom";
import {useStyle} from "./Header.style";
import {PublicContext} from "../../context/context";

const Header = () => {
    // get css style
    const classes = useStyle()
    // get state from context
    const {
        openSideBarMenu, setSideBarMenu, userOptionMenu, setUserOptionMenu
    } = useContext(PublicContext)
    //handel To Navigate User Profile
    const navigate = useNavigate()
    const handelToNavigateProfile = () => {
        navigate('/user/edit/', {
            state: {
                id: 0,
                name: 'Ehsan Mahmoodi',
                email: 'm@gmail.com',
                status: 'verified',
                avatar: "https://img.search.brave.com/eW9X9Cy2AUtVEXQFL5TO0-8ALsuyjhOe8INfrbPQiBw/rs:fit:768:1081:1/g:ce/aHR0cHM6Ly9zdGFu/bGV5LW1vZGVscy5j/by51ay93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8xMC9TdGV2/ZS1DYW1iZWxsLVN0/YW5sZXlzLU1vZGVs/LUFnZW5jeS1NYWxl/LUZhc2hpb24tTW9k/ZWwtSHVsbC1VSy1N/b2RlbHMuanBn"
            }
        })
    }
    return (<Box className={classes.headerWrapper}>
        <MenuOpenOutlined onClick={() => setSideBarMenu(!openSideBarMenu)}/>
        <Box className={classes.headerSearchFrom} component={'form'}>
            <Box className={classes.headerSearchFormItem}>
                <input type="search" placeholder={'search...'}/>
                <SearchOutlined/>
            </Box>
        </Box>
        <Box className={classes.headerLinks}>
            <Box className={classes.headerInnerLinks}
                 onClick={() => setUserOptionMenu(!userOptionMenu)}> <Avatar
                variant={"rounded"} src={'/'}
                className={classes.userAvatar}/>
                <Box className={classes.accountOptions} sx={{
                    display: (!userOptionMenu) ? "none !important" : 'flex',
                }}>
                    <Box className={classes.personAccountDetail}>
                        <Typography>Ehsan Mahmoodi</Typography>
                        <Typography>m@gmail.com</Typography>
                    </Box>
                    <button onClick={handelToNavigateProfile}>Profile</button>
                    <Link to={'/register-user'}>Log out</Link>
                </Box>
            </Box>
        </Box>
    </Box>)
}
export default Header