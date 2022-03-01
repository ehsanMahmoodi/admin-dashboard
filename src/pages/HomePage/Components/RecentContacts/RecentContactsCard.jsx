import {Avatar, Box, Typography} from "@mui/material";
import {MoreVert} from "@mui/icons-material";
import {useStyle} from "./RecentContactsCard.style";

const RecentContactCard = ({contactPic, contactName, contactMail}) => {
    // get css style
    const classes = useStyle()
    return (<Box className={classes.recentContantsUserItem}>
        <Box className={classes.recentContantsUserDetail}>
            <Avatar variant="rounded" src={(contactPic ? contactPic : '/')}/>
            <Box className={classes.userAcountDetail}>
                <Typography>{contactName}</Typography>
                <Typography>{contactMail}</Typography>
            </Box>
        </Box>
        <MoreVert/>
    </Box>)
}
export default RecentContactCard