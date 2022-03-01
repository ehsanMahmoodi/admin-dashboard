import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    loginUserForm: {
        maxWidth: '23rem',
        maxHeight: '29.75rem',
        width: '100%',
        height: 'auto',
        background: '#fff',
        padding: '1.5rem',
        margin: "0 auto",
        boxShadow: "0 0 6px #cbcbcb",
        borderRadius: '0.37rem'
    }, loginUserFormItem: {
        display: 'flex', flexDirection: 'column', marginBottom: '1.5rem', "& label": {
            color: '#374151', fontSize: '0.87rem'
        }
    }, inputForms: {
        borderRadius: '0.37rem',
        border: '1px solid #9CA3AF',
        display: 'flex',
        flexDirection: 'row-reverse',
        padding: '0.37rem',
        "& input": {
            border: 'none', outline: 'none', width: '100%'
        },
        "& svg": {
            margin: '0 0.62rem 0 0.31rem', width: '1.25rem', height: '1.25rem', color: '#6B7280'
        }
    }, passwordIssues: {
        display: 'flex', justifyContent: 'space-between', "& > a": {
            fontSize: "0.87rem", color: "#3B82F6", fontWeight: "100 !important"
        }
    }, inputCheckbox: {
        display: 'flex', alignItems: 'center', '& label': {
            marginLeft: '0.62rem', fontSize: '0.87rem', color: "#4B5563"
        }, '& input': {
            accentColor: "#A855F7", width: '1rem', height: '1rem', marginTop: '-0.12rem'
        }
    }, signinBtn: {
        backgroundColor: '#A855F7',
        maxWidth: '20rem',
        width: '100%',
        height: '2.25rem',
        borderRadius: '0.37rem',
        cursor: 'pointer',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row-reverse",
        fontSize: '1rem',
        color: '#fff',
        border: 'none',
        outline: 'none',
        "& svg": {
            color: '#fff',
            marginRight: "0.43rem",
            transform: "rotateZ(180deg)",
            width: '1.25rem',
            height: '1.25rem',
            marginTop: '-0.18rem'
        }
    }, loginIssues: {
        display: 'flex', '& p': {
            marginRight: "0.43rem", color: '#4B5563', fontSize: "0.87rem"
        }, "& a": {
            color: '#3B82F6', fontSize: "0.87rem",
        }
    }, divider: {
        margin: '0 auto 0 !important', maxWidth: "17.18rem", width: '100%', color: '#9CA3AF', fontSize: '1rem',
    }, quickLogin: {
        display: "flex", justifyContent: "space-evenly", alignItems: "center", marginTop: "0.62rem", '& svg': {
            color: "#4B5563", cursor: 'pointer'
        }
    }, errorMsg: {
        color: 'red', fontSize: '14px !important'
    }
})