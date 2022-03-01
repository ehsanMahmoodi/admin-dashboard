import {Box, Divider, Typography} from "@mui/material";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import {
    ExitToApp, GitHub, Google, LockOutlined, MailOutline, Twitter, VisibilityOff, VisibilityOutlined
} from "@mui/icons-material";
import {useContext, useRef} from "react";
import {PublicContext} from "../../../context/context";
import {useStyle} from "./LoginCard.style";

const LoginCard = () => {
    // get css style
    const classes = useStyle()
    // get state from context
    const {visiablePass, setVisiablePass} = useContext(PublicContext)
    // handel to form validation
    const {register, handleSubmit, watch, formState: {errors}} = useForm({
        defaultValues: {
            userEmail: '', userPassword: ''
        }
    });
    const navigate = useNavigate()
    const onSubmit = data => {
        navigate('/', {
            state: data
        })
    };
    // console.log(watch());
    // console.log(errors);
    // handel to see input password
    const inputPassRef = useRef(null)
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
            <label htmlFor="userMail">Email</label>
            <Box className={classes.inputForms}>
                <input {...register('userEmail', {required: 'This is required *', spellcheck: false})}
                       type={'email'} placeholder={"Enter your email"}/>
                <MailOutline/>
            </Box>
            <Typography className={classes.errorMsg}>{errors.userEmail?.message}</Typography>
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
            <Box className={classes.passwordIssues}>
                <Box className={classes.inputCheckbox}>
                    <input id={'rememberMe'} type="checkbox"/>
                    <label htmlFor="rememberMe">Remember me</label>
                </Box>
                <Link to={'/'}>Forgot Password?</Link>
            </Box>
        </Box>
        <Box className={classes.loginUserFormItem}>
            <button type={'submit'} className={classes.signinBtn}> Sign in
                <ExitToApp/>
            </button>
        </Box>
        <Box className={classes.loginUserFormItem}>
            <Box className={classes.loginIssues}>
                <Typography>Don't have an account?</Typography>
                <Link to={'/register-user'}>Sign up</Link>
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
export default LoginCard