import {useState} from "react";
import {Container, Grid, Typography} from "@mui/material";
import {useStyle} from "./EditProfilePage.style";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabPanel from '@mui/lab/TabPanel';
import {useLocation} from "react-router-dom";
import TabList from '@mui/lab/TabList';


const EditProfilePage = () => {
    // get css style
    const classes = useStyle()
    // get state from navigate
    const location = useLocation();
    console.log(location);
    // handel to change tabs
    const [value, setValue] = useState("1");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (<Container maxWidth={'false'} sx={{
        marginBottom: '9rem !important', minHeight: 'calc(100vh - 9rem)'
    }}>
        <Typography variant={'h3'} className={classes.sectionTitle}>Profile</Typography>
        <Grid container>
            <Grid item xs={12}>
                <Box sx={{width: '100%', typography: 'body1'}}>
                    <TabContext value={value}>
                        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                            <TabList className={classes.tabList} onChange={handleChange}
                                     aria-label="lab API tabs example" variant="scrollable" scrollButtons="auto"
                                     allowScrollButtonsMobile>
                                <Tab label="profile information" value="1"/>
                                <Tab label="update password" value="2"/>
                                <Tab label="two factor authentication" value="3"/>
                                <Tab label="browser sessions" value="4"/>
                                <Tab label="delete account" value="5"/>
                            </TabList>
                        </Box>
                        <TabPanel value="1"></TabPanel>
                        <TabPanel value="2"></TabPanel>
                        <TabPanel value="3"></TabPanel>
                        <TabPanel value="4"></TabPanel>
                        <TabPanel value="5"></TabPanel>
                    </TabContext>
                </Box>
            </Grid>
        </Grid>
    </Container>)
}
export default EditProfilePage