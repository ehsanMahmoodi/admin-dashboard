import {Box, Typography} from "@mui/material";
import {useStyle} from "./UserAnalyticsChart.style";
import MediumLineChart from "../../../../Common/MediumLineChart/MediumLineChart";
import {growthingLineData2} from "../../../../Data/mini-chart-data";

const UserAnalyticsChart = ({sectionTitle}) => {
    // get css style
    const classes = useStyle()
    return (<Box className={classes.analyticsChartItem}>
        <Typography variant={'h6'}>{sectionTitle}</Typography>
        <MediumLineChart chartData={growthingLineData2}/>
    </Box>)
}
export default UserAnalyticsChart