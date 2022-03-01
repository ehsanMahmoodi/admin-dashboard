import {Avatar, Container, Grid} from "@mui/material";
import siteLogo from "../../assets/img/sitelogo.png";
import {useStyle} from "./RegisterPage.style";
import RegisterCard from "./Components/RegisterCard";
import Footer from "../../Common/Footer/Footer";

const RegisterPage = () => {
    // get css style
    const classes = useStyle()
    return (<>
        <Container maxWidth={'false'} className={classes.registerSection}>
            <Grid container>
                <Grid item xs={12} sx={{paddingTop: '3.12rem'}}>
                    <Avatar src={siteLogo} className={classes.siteLogo}/>
                    <RegisterCard/>
                </Grid>
            </Grid>
        </Container>
        <Footer/>
    </>)
}
export default RegisterPage