import {Box, Typography} from "@mui/material";
import recentUsers from '../../../../Data/recent-user.json'
import {useStyle} from "./RecentContacts.style";
import RecentContactsCard from "./RecentContactsCard";

const RecentContacts = ({sectionTitle}) => {
    // get css style
    const classes = useStyle()
    return (<Box className={classes.homeRecentContantsUser}>
        <Typography variant={'h6'}>{sectionTitle}</Typography>
        <Box>
            {recentUsers.map((user) => {
                return (<RecentContactsCard key={user.id} contactName={user.name} contactMail={user.email}/>)
            })}
        </Box>
    </Box>)
}
export default RecentContacts