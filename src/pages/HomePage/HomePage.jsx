import {Container, Grid, Typography} from "@mui/material";
import {
    PeopleAltOutlined, PieChartOutlined,
    ShoppingCartOutlined,
    VisibilityOutlined
} from "@mui/icons-material";
import {useStyle} from "./HomePage.style";
import UserActivitisStatusCard from "./Components/UserActivitisStatusCard/UserActivitisStatusCard";
import UserAnalyticLg from "./Components/UserAnalyticLg/UserAnalyticLg";
import UserAnalyticSm from "./Components/UserAnalyticSm/UserAnalyticSm";
import UserAnalyticsChart from "./Components/UserAnalyticsChart/UserAnalyticsChart";

const HomePage = () => {
    // get css style
    const classes = useStyle()
    return (
        <Container maxWidth={'false'}>
            <Typography variant={'h3'} className={classes.sectionTitle}>Dashboard</Typography>
            {/*start activitis*/}
            <Grid container gap={1} className={classes.activitiSection} justifyContent={'space-between'}>
                <Grid item xs={12} sm={5.7} md={2.8} className={classes.activitisItem}>
                    <UserActivitisStatusCard cardIcon={<PeopleAltOutlined/>} benefitCost={'32.40%'}
                                             benefitVolume={"12.4k"} benefitType={'customers'}/>
                </Grid>
                <Grid item xs={12} sm={5.7} md={2.8} className={classes.activitisItem}>
                    <UserActivitisStatusCard cardIcon={<VisibilityOutlined/>} benefitCost={'32.40%'}
                                             benefitVolume={"21.6k"} benefitType={'visits'}/>
                </Grid>
                <Grid item xs={12} sm={5.7} md={2.8} className={classes.activitisItem}>
                    <UserActivitisStatusCard cardIcon={<ShoppingCartOutlined/>} benefitCost={'32.40%'}
                                             benefitVolume={"34.4k"} benefitType={'orders'}/>
                </Grid>
                <Grid item xs={12} sm={5.7} md={2.8} className={classes.activitisItem}>
                    <UserActivitisStatusCard cardIcon={<PieChartOutlined/>} benefitCost={'32.40%'}
                                             benefitVolume={"15.6%"} benefitType={'growth'}/>
                </Grid>
            </Grid>
            {/*end activitis*/}
            {/*start userAnalytics*/}
            <Grid container gap={1} className={classes.analyticSection} justifyContent={'space-between'}>
                <Grid item xs={12} md={5} lg={5.1}>
                    <UserAnalyticSm/>
                    <UserAnalyticLg cardTitle={"earning"} time={"this month"}
                                    benefitPercent={"+20.5%"}
                                    benefitVolume={"$5070.80"}
                                    innerChartText={"30% sales"}/>
                </Grid>
                <Grid item xs={12} md={6.7}>
                    <UserAnalyticsChart sectionTitle={"sales analytics"}/>
                </Grid>
            </Grid>
            {/*end userAnalytics*/}
        </Container>
    )
}
export default HomePage