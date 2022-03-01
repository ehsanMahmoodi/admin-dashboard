import {Container, Grid, Typography} from "@mui/material";
import UserListChart from "./Components/UserListChart";
import {useStyle} from "./UserListPage.style";

const UserListPage = () => {
    // get css style
    const classes = useStyle()
    return (<Container maxWidth={'false'}>
        <Typography variant={'h3'} className={classes.sectionTitle}>user list</Typography>
        <Grid container>
            <Grid item xs={12} className={classes.userSection}>
                <UserListChart/>
            </Grid>
        </Grid>
    </Container>)
}
export default UserListPage