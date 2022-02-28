import {Box, Typography} from "@mui/material";
import {MoreHorizOutlined, TrendingUpOutlined} from "@mui/icons-material";
import {customerLineData} from "../../../../Data/mini-chart-data";
import {Fragment} from "react";
import {useStyle} from "./UserActivitisStatusCard.style";
import MiniChart from "../../../../Common/MiniChart/MiniChart";

const UserActivitisStatusCard = ({cardIcon, benefitCost, benefitVolume, benefitType}) => {
    // get css style
    const classes = useStyle()
    return (<>
        <Box className={classes.cardTitle}>
            {cardIcon}
            <Box>
                <Typography>{benefitCost}</Typography>
                <TrendingUpOutlined/>
            </Box>
            <MoreHorizOutlined/>
        </Box>
        <Box className={classes.cardBody}>
            <Box className={classes.innerCardDetails}>
                <Typography>{benefitVolume}</Typography>
                <Typography>{benefitType}</Typography>
            </Box>
            <Box className={classes.innerCardChart}>
                <MiniChart chartData={customerLineData}/>
            </Box>
        </Box>
    </>)
}
export default UserActivitisStatusCard