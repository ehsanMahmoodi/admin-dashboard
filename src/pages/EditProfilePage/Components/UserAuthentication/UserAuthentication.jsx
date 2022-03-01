import {Box, Typography} from "@mui/material";
import {useStyle} from "./UserAuthentication.style";

const UserAuthentication = () => {
    // get css style
    const classes = useStyle()
    return (
        <Box className={classes.cardWrapper}>
            <Box className={classes.cardHeader}>
                <Typography>Two Factor Authentication</Typography>
                <Typography variant={'span'}>Add additional security to your account using two factor
                    authentication.</Typography>
            </Box>
            <Box className={classes.cardBody}>
                <Typography>You have not enabled two factor authentication.</Typography>
                <Typography>When two factor authentication is enabled, you will be prompted for a secure, random token
                    during authentication. You may retrieve this token from your phone's Google Authenticator
                    application.</Typography>
                <button>Enable</button>
            </Box>
        </Box>
    )
}
export default UserAuthentication