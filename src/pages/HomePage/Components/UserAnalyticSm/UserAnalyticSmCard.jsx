import {Box, Typography} from "@mui/material";
import {useStyle} from "./UserAnalyticSmCard.style";

const UserAnalyticSmCard = ({
                                userAnalyticsActivitiCardIcon,
                                userAnalyticsActivitiCardBenefitPercent,
                                userAnalyticsActivitiCardBenefitVolume,
                                userAnalyticsActivitiCardTxt
                            }) => {
    // get css style
    const classes = useStyle()
    return (<Box className={classes.userAnalyticsDetail}>
        {userAnalyticsActivitiCardIcon}
        <Typography>{userAnalyticsActivitiCardBenefitPercent}</Typography>
        <Typography>{userAnalyticsActivitiCardBenefitVolume}</Typography>
        <Typography>{userAnalyticsActivitiCardTxt}</Typography>
    </Box>)
}
export default UserAnalyticSmCard