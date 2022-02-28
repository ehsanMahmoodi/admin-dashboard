import {Box, Typography} from "@mui/material";
import {useStyle} from "./UserAnalyticLg.style";

const UserAnalyticLg = ({
                            cardTitle, time, benefitPercent, benefitVolume, innerChartText
                        }) => {
    // get css style
    const classes = useStyle()
    return (<Box className={classes.userAnalyticsWrapper}>
        <Box className={classes.userAnalyticsDetail}>
            <Typography variant={'h6'}>{cardTitle}</Typography>
            <Typography className="title">{time}</Typography>
            <Typography className="title">{benefitPercent}</Typography>
            <Typography className="title">{benefitVolume}</Typography>
        </Box>
        <Box className={classes.userAnalyticStatus}>
            <Typography>{innerChartText}</Typography>
        </Box>
    </Box>)
}
export default UserAnalyticLg