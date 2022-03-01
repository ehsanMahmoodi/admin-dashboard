import {Box, Typography} from "@mui/material";
import {AddCircleOutlineOutlined, CircleOutlined, RemoveCircleOutlineOutlined} from "@mui/icons-material";
import {useStyle} from "./RecentUserTransactionCard.style";

const RecentUserTransactionCard = ({userPic, userName, userDate, userBenefitVolume}) => {
    // get css style
    const classes = useStyle()
    return (<Box className={classes.recentContantsUserItems}>
        <Box className={classes.recentContantsUserDetail}>
            {(userBenefitVolume.charAt(0) === "+") ?
                <AddCircleOutlineOutlined sx={{color: 'green'}}/> : (userBenefitVolume.charAt(0) === "-") ?
                    <RemoveCircleOutlineOutlined sx={{color: 'red'}}/> : <CircleOutlined sx={{color: '#6B7280'}}/>}
            <Box className={classes.userAcountDetail}>
                <Typography>{userName}</Typography>
                <Typography>{userDate}</Typography>
            </Box>
        </Box>
        <Typography
            sx={{
                color: (userBenefitVolume.charAt(0) === "+") ? "green" : (userBenefitVolume.charAt(0) === "-") ? "red" : '#6B7280'
            }}
        >{userBenefitVolume}</Typography>
    </Box>)
}
export default RecentUserTransactionCard