import {Box, Typography} from "@mui/material";
import {useStyle} from "./Footer.style";

const Footer = () => {
    const classes = useStyle()
    return (<Box className={classes.footerWrapper}>
        <Typography>&copy; 2022,All rights reserved</Typography>
        <Typography>Made with Ehsan Mahmoodi</Typography>
    </Box>)
}
export default Footer