import {Box, Typography} from "@mui/material";
import {DesktopWindows} from "@mui/icons-material";
import {useStyle} from "./BrowserSession.style";

const BrowserSession = () => {
    // get css style
    const classes = useStyle()
    return (<Box className={classes.cardWrapper}>
        <Box className={classes.cardHeader}>
            <Typography>Browser Sessions</Typography>
            <Typography variant={'span'}>Manage and log out your active sessions on other browsers and
                devices.</Typography>
        </Box>
        <Box className={classes.cardBody}>
            <Typography>If necessary, you may log out of all of your other browser sessions across all of your
                devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If
                you feel your account has been compromised, you should also update your password.</Typography>
            <Box className={classes.activeDevice}>
                <Box className={classes.activeDeviceItem}>
                    <DesktopWindows/>
                    <Box className={classes.activeDeviceDetail}>
                        <Typography className={classes.deviceName}>windows-edge</Typography>
                        <Box className={classes.deviceIpAddressWrapper}>
                            <Typography variant={'span'}>127.0.0.1</Typography>
                            <Typography variant={'span'}>This device</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <button>Log out other browser sessions</button>
        </Box>
    </Box>)
}
export default BrowserSession