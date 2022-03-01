import {Avatar, Container, Grid} from "@mui/material";
import {useStyle} from "./LoginPage.style";
import siteLogo from '../../assets/img/sitelogo.png'
import LoginCard from "./Components/LoginCard";
import Footer from "../../Common/Footer/Footer";

const LoginPage = () => {
    // get css style
    const classes = useStyle()
    return (<>
        <Container maxWidth={'false'} className={classes.loginSection}>
            <Grid container>
                <Grid item xs={12} sx={{paddingTop: '3.12rem'}}>
                    <Avatar src={siteLogo} className={classes.siteLogo}/>
                    <LoginCard/>
                </Grid>
            </Grid>
        </Container>
        <Footer/>
    </>)
}
export default LoginPage