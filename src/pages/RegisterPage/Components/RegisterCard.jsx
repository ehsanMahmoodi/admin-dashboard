import {Box, Divider, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {
    GitHub,
    Google,
    LockOutlined,
    MailOutline,
    PersonAddAltOutlined,
    PersonOutlined,
    Twitter,
    VisibilityOff,
    VisibilityOutlined
} from "@mui/icons-material";
import {Link} from "react-router-dom";
import {useContext, useRef} from "react";
import {PublicContext} from "../../../context/context";
import {useStyle} from "./RegisterCard.style";

const RegisterCard = () => {
    // get css style
    const classes = useStyle()
    // get state from context
    const {visiablePass, setVisiablePass} = useContext(PublicContext)
    // handel to form validation
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        defaultValues: {
            userName: "", userMail: '', userPassword: ''
        }
    });
    const onSubmit = data => console.log(data);
    // console.log(watch());
    // console.log(errors);
    // handel to see input password
    const inputPassRef = useRef()
    const {ref, ...rest} = register('userPassword');
    const showPass = () => {
        setVisiablePass(!visiablePass)
        if (visiablePass) {
            inputPassRef.current.type = 'password'
        } else {
            inputPassRef.current.type = 'text'
        }
    }
    return (<Box component={'form'} className={classes.loginUserForm} onSubmit={handleSubmit(onSubmit)}>
        <Box className={classes.loginUserFormItem}>
            <label htmlFor="userName">Name</label>
            <Box className={classes.inputForms}>
                <input {...register("userName", {required: "This is required *"})} type="text"
                       placeholder={"Enter your name"}/>
                <PersonOutlined/>
            </Box>
            <Typography className={classes.errorMsg}>{errors.userName?.message}</Typography>
        </Box>
        <Box className={classes.loginUserFormItem}>
            <label htmlFor="userMail">Email</label>
            <Box className={classes.inputForms}>
                <input {...register("userMail", {required: "This is required *"})} type="email"
                       placeholder={"Enter your email"}/>
                <MailOutline/>
            </Box>
            <Typography className={classes.errorMsg}>{errors.userMail?.message}</Typography>
        </Box>
        <Box className={classes.loginUserFormItem}>
            <label htmlFor="userMail">Password</label>
            <Box className={classes.inputForms}>
                {(visiablePass) ? <VisibilityOff onClick={showPass}/> : <VisibilityOutlined onClick={showPass}/>}
                <input {...register('userPassword', {
                    required: 'This is required *', minLength: {value: 8, message: "Min length is 8"}
                })} ref={(e) => {
                    ref(e)
                    inputPassRef.current = e
                }} type="password" placeholder={"Enter your password"}/>
                <LockOutlined/>
            </Box>
            <Typography className={classes.errorMsg}>{errors.userPassword?.message}</Typography>
        </Box>
        <Box className={classes.loginUserFormItem}>
            <Box className={classes.siteRulls}>
                <Box className={classes.inputCheckbox}>
                    <input id={'rememberMe'} type="checkbox"/>
                    <label htmlFor="rememberMe">I accept the</label>
                </Box>
                <Link to={'/terms-privacy'}>Terms & Privacy</Link>
            </Box>
        </Box>
        <Box className={classes.loginUserFormItem}>
            <Box className={classes.submitSignup}>
                <button className={classes.signinBtn}> Sign in
                    <PersonAddAltOutlined/>
                </button>
            </Box>
        </Box>
        <Box className={classes.loginUserFormItem}>
            <Box className={classes.loginIssues}>
                <Typography>Already have an account?</Typography>
                <Link to={'/login-user'}>Log in</Link>
            </Box>
        </Box>
        <Divider className={classes.divider}>or continue with</Divider>
        <Box className={classes.quickLogin}>
            <GitHub/>
            <Twitter/>
            <Google/>
        </Box>
    </Box>)
}
export default RegisterCard