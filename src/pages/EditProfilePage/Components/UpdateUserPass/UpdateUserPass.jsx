import {Box, Typography} from "@mui/material";
import {useStyle} from "./UpdateUserPass.style";

const UpdateUserPass = ({location}) => {
    // get css style
    const classes = useStyle()
    return (<Box className={classes.cardWrapper}>
        <Box className={classes.cardHeader}>
            <Typography>Update Password</Typography>
            <Typography variant={'span'}>Ensure your account is using a long, random password to stay
                secure.</Typography>
        </Box>
        <Box className={classes.cardBody}>
            <Box component={'form'} className={classes.userForm}>
                <Box className={classes.formItem}>
                    <label htmlFor="currentPass">current password</label>
                    <input type="password" id={'currentPass'} placeholder={'current password'}/>
                </Box>
                <Box className={classes.formItem}>
                    <label htmlFor="newPass">new password</label>
                    <input type="password" id={'newPass'} placeholder={'new password'}/>
                </Box>
                <Box className={classes.formItem}>
                    <label htmlFor="confirmPass">confirm password</label>
                    <input type="password" id={'confirmPass'} placeholder={'confirm password'}/>
                </Box>
                <button type={'submit'}>Save</button>
            </Box>
        </Box>
    </Box>)
}
export default UpdateUserPass