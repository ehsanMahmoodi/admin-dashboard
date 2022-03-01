import {Box, Typography} from "@mui/material";
import {useStyle} from "./DeleteAccount.style";

const DeleteAccount = () => {
    // get css style
    const classes = useStyle()
    return (
        <Box className={classes.cardWrapper}>
            <Box className={classes.cardHeader}>
                <Typography>Delete Account</Typography>
                <Typography variant={'span'}>Permanently delete your account.
                </Typography>
            </Box>
            <Box className={classes.cardBody}>
                <Typography>Once your account is deleted, all of its resources and data will be permanently deleted.
                    Before deleting your account, please download any data or information that you wish to
                    retain.</Typography>
                <button>Delete account</button>
            </Box>
        </Box>
    )
}
export default DeleteAccount