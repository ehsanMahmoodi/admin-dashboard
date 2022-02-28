import {Box} from "@mui/material";
import {PersonAddAltOutlined, SignalCellularAlt} from "@mui/icons-material";
import UserAnalyticSmCard from "./UserAnalyticSmCard";
import {useStyle} from "./UserAnalyticSm.style";

const UserAnalyticSm = () => {
    // get css style
    const classes = useStyle()
    return (<Box className={classes.userAnalyticSmWrapper}>
        <UserAnalyticSmCard userAnalyticsActivitiCardIcon={<PersonAddAltOutlined/>}
                            userAnalyticsActivitiCardBenefitPercent={'+1%'}
                            userAnalyticsActivitiCardBenefitVolume={"1,210"}
                            userAnalyticsActivitiCardTxt={"today's users"}/>
        <UserAnalyticSmCard userAnalyticsActivitiCardIcon={<SignalCellularAlt/>}
                            userAnalyticsActivitiCardBenefitPercent={'+4%'}
                            userAnalyticsActivitiCardBenefitVolume={"20,350"}
                            userAnalyticsActivitiCardTxt={"today's sales"}/>
    </Box>)
}
export default UserAnalyticSm