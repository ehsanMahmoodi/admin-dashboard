import {Avatar, Box, Typography} from "@mui/material";
import {useRef} from "react";
import {useStyle} from "./UserProfile.style";

const UserProfile = ({location}) => {
    // get css style
    const classes = useStyle()
    const userPicRef = useRef()
    // console.log(userPicRef.current.files[0].name);
    return (<Box className={classes.cardWrapper}>
        <Box className={classes.cardHeader}>
            <Typography>profile information</Typography>
            <Typography variant={'span'}>Update your account's profile information and email address.</Typography>
        </Box>
        <Box className={classes.cardBody}>
            <Box className={classes.userAvatarSection}>
                <Box className={classes.userAvatar}>
                    <Typography variant={'span'}>Photo</Typography>
                    <Avatar variant={'rounded'} src={(location.avatar) ? location.avatar : '/'}/>
                    {/*<Avatar variant={'rounded'} src={(userPicRef.current)?userPicRef.current.files[0].name :'/'}/>*/}
                </Box>
                <Box className={classes.createNewAvatar}>
                    <label htmlFor="uploadPic">Select a new photo</label>
                    <input ref={userPicRef} type="file" name="" id="uploadPic"/>
                    <button>Remove photo</button>
                </Box>
            </Box>
            <Box component={'form'} className={classes.userForm}>
                <Box className={classes.formItem}>
                    <label htmlFor="userName">Name</label>
                    <input type="text" id={'userName'} placeholder={(location.name) ? location.name : ''}/>
                </Box>
                <Box className={classes.formItem}>
                    <label htmlFor="userMail">Email</label>
                    <input type="email" id={'userMail'} placeholder={(location.email) ? location.email : ''}/>
                </Box>
                <button type={'submit'}>Save</button>
            </Box>
        </Box>
    </Box>)
}
export default UserProfile