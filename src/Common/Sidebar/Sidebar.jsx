import {useContext, useEffect, useState} from "react";
import {Avatar, Box, Typography} from "@mui/material";
import siteLogo from '../../assets/img/sitelogo.png'
import {
    BarChartOutlined,
    CalendarTodayOutlined,
    ChatBubbleOutlineOutlined,
    Group,
    HomeOutlined,
    PieChartOutlineOutlined,
    SettingsOutlined,
    WorkOutlineOutlined
} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {PublicContext} from "../../context/context";
import {useStyle} from "./Sidebar.style";

const Sidebar = () => {
    // handel open / close sidebarMenu
    useEffect(() => {
        setInterval(() => {
            if (window.innerWidth <= 850) {
                setSideBarMenu(false)
            }
        }, 1000)
    }, [])
    // get css style
    const classes = useStyle()
    // get context state
    const {openSideBarMenu, setSideBarMenu, activeTab, setActiveTab} = useContext(PublicContext)
    // save active class in sidbar tabs
    let getSidebarIndex = JSON.parse(localStorage.getItem("sidebarIndex"))
    // const [activeTab, setActiveTab] = useState(getSidebarIndex ? getSidebarIndex : 1)
    console.log(activeTab);
    const toggleTab = (index) => {
        setActiveTab(index)
        localStorage.setItem('sidebarIndex', JSON.stringify(index))
    }
    return (<Box className={classes.sideBarWrapper}>
        <Box className={classes.siteLogo}>
            <Avatar src={siteLogo}/>
        </Box>
        <Box className={classes.sideBarItemWrapper}>
            <Link to={'/'}><Box onClick={() => toggleTab(1)}
                                className={(activeTab === 1) ? classes.sideBarItems + ' active' : classes.sideBarItems}
                                value={1} sx={{
                width: (!openSideBarMenu) ? "2.6rem" : "auto",
            }}>
                <HomeOutlined/>
                {(!openSideBarMenu) ? "" :
                    <Typography variant={'span'} className={classes.sideBarItemsText}>Home</Typography>}
            </Box></Link>
            <Link to={'/users'}><Box onClick={() => toggleTab(2)}
                                     className={(activeTab === 2) ? classes.sideBarItems + ' active' : classes.sideBarItems}
                                     sx={{
                                         width: (!openSideBarMenu) ? "2.6rem" : "auto",
                                     }}>
                <Group/>
                {(!openSideBarMenu) ? "" :
                    <Typography variant={'span'} className={classes.sideBarItemsText}>Users</Typography>}
            </Box></Link>
            <Link to={'/calendar'}><Box onClick={() => toggleTab(3)}
                                        className={(activeTab === 3) ? classes.sideBarItems + ' active' : classes.sideBarItems}
                                        sx={{
                                            width: (!openSideBarMenu) ? "2.6rem" : "auto",
                                        }}>
                <CalendarTodayOutlined/>
                {(!openSideBarMenu) ? "" :
                    <Typography variant={'span'} className={classes.sideBarItemsText}>Calendar</Typography>}
            </Box></Link>
            <Link to={'/messages'}><Box onClick={() => toggleTab(4)}
                                        className={(activeTab === 4) ? classes.sideBarItems + ' active' : classes.sideBarItems}
                                        sx={{
                                            width: (!openSideBarMenu) ? "2.6rem" : "auto",
                                        }}>
                <ChatBubbleOutlineOutlined/>
                {(!openSideBarMenu) ? "" :
                    <Typography variant={'span'} className={classes.sideBarItemsText}>Messages</Typography>}
            </Box></Link>
            <Link to={'/projects'}><Box onClick={() => toggleTab(5)}
                                        className={(activeTab === 5) ? classes.sideBarItems + ' active' : classes.sideBarItems}
                                        sx={{
                                            width: (!openSideBarMenu) ? "2.6rem" : "auto",
                                        }}>
                <WorkOutlineOutlined/>
                {(!openSideBarMenu) ? "" :
                    <Typography variant={'span'} className={classes.sideBarItemsText}>Projects</Typography>}
            </Box></Link>
            <Link to={'/progress'}><Box onClick={() => toggleTab(6)}
                                        className={(activeTab === 6) ? classes.sideBarItems + ' active' : classes.sideBarItems}
                                        sx={{
                                            width: (!openSideBarMenu) ? "2.6rem" : "auto",
                                        }}>
                <BarChartOutlined/>
                {(!openSideBarMenu) ? "" :
                    <Typography variant={'span'} className={classes.sideBarItemsText}>Progress</Typography>}
            </Box></Link>
            <Link to={'/goals'}><Box onClick={() => toggleTab(7)}
                                     className={(activeTab === 7) ? classes.sideBarItems + ' active' : classes.sideBarItems}
                                     sx={{
                                         width: (!openSideBarMenu) ? "2.6rem" : "auto",
                                     }}>
                <PieChartOutlineOutlined/>
                {(!openSideBarMenu) ? "" :
                    <Typography variant={'span'} className={classes.sideBarItemsText}>Goals</Typography>}
            </Box></Link>
            <Link to={'/settings'}><Box onClick={() => toggleTab(8)}
                                        className={(activeTab === 8) ? classes.sideBarItems + ' active' : classes.sideBarItems}
                                        sx={{
                                            width: (!openSideBarMenu) ? "2.6rem" : "auto",
                                        }}>
                <SettingsOutlined/>
                {(!openSideBarMenu) ? "" :
                    <Typography variant={'span'} className={classes.sideBarItemsText}>Settings</Typography>}
            </Box></Link>
        </Box>
    </Box>)
}
export default Sidebar