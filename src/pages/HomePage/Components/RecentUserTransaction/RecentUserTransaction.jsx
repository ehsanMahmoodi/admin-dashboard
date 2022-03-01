import {Box, Typography} from "@mui/material";
import RecentUserTransactionCard from "./RecentUserTransactionCard";
import {useStyle} from "./RecentUserTransaction.style";

const RecentUserTransaction = ({sectionTitle}) => {
    // get css style
    const classes = useStyle()
    return (<Box className={classes.recentUserTransactionWrapper}>
        <Typography variant={'h6'}>{sectionTitle}</Typography>
        <Box>
            <RecentUserTransactionCard userName={"gillette"} userBenefitVolume={"+$360.00"}
                                       userDate={"17 oct,2021"}/>
            <RecentUserTransactionCard userName={"ibm"} userBenefitVolume={"-$254.00"} userDate={"10 oct,2021"}/>
            <RecentUserTransactionCard userName={"louis vuitton"} userBenefitVolume={"Pending"}
                                       userDate={"08 oct,2021"}/>
            <RecentUserTransactionCard userName={"bank of america"} userBenefitVolume={"+$891.26"}
                                       userDate={"04 oct,2021"}/>
            <RecentUserTransactionCard userName={"mcDonald's"} userBenefitVolume={"+$723.51"}
                                       userDate={"01 oct,2021"}/>
        </Box>
    </Box>)
}
export default RecentUserTransaction