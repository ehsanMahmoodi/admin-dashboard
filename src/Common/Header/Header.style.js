import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    headerWrapper: {
        zIndex: 200,
        position: 'sticky',
        top: 0,
        width: '100% !important',
        height: "4.5rem",
        background: '#fff',
        display: 'flex',
        justifyContent: "space-around",
        alignItems: "center",
        '& > svg': {
            margin: "0 1.5rem 0",
            fontSize: "1.68rem",
            color: "#5c5c5c",
            "&:hover": {
                cursor: 'pointer'
            }
        }
    },
    headerSearchFrom: {
        overflow: 'hidden',
        width: '100%',
        height: '3rem',
    },
    headerSearchFormItem: {
        height: '100%',
        display: "flex",
        flexDirection: "row-reverse",
        alignItems: "center",
        justifyContent: "flex-end",
        "& input": {
            transition: 'transform 1s 0s linear',
            fontSize: '1.06rem',
            background: 'none',
            padding: '0 0.93rem',
            height: '100%',
            border: 'none',
            outline: 'none',
            width: '100%',
        },
        "& svg": {
            cursor: 'pointer',
            color: '#747474',
            margin: '0 0.62rem'
        }
    },
    headerLinks: {
        height: '3rem',
        display: 'flex',
        width: "50%",
        justifyContent: "flex-end",
        alignItems: 'center',
    },
    headerInnerLinks: {
        position: 'relative',
        cursor: 'pointer',
        height: '2.75rem',
        width: '2.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 0.68rem'
    },
    linkIcons: {
        height: '1.5rem !important',
        width: '1.5rem !important',
        color: '#747474',
    },
    accountOptions: {
        width: '9.31rem !important',
        boxShadow: "0 0 0.18rem #b9b9b9",
        borderRadius: "0.37rem !important",
        position: 'absolute',
        top: '3.18rem',
        right: "0px",
        flexDirection: 'column',
        background: "#fff",
        "& button": {
            margin: '0.31rem 0',
            background: "#fff",
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
            color: '#4B5563',
            padding: '0.62rem',
            "&:hover": {
                background: '#efefef'
            },
            "&:nth-child(1)": {
                borderBottomRightRadius: '0.37rem'
            }
        },
        "& a": {
            textAlign: "center",
            color: "#4B5563",
            border: "none",
            cursor: "pointer",
            margin: "0.31rem 0",
            outline: "none",
            padding: "0.62rem",
            background: "#fff",
            fontSize: "14px",
            "&:hover": {
                background: '#efefef'
            },
        }
    },
    personAccountDetail: {
        height: '100%',
        padding: '0.62rem',
        background: '#F3F4F6',
        "& p:nth-child(1)": {
            marginBottom: '0.31rem',
            color: "#4B5563",
            textTransform: 'capitalize',
            fontSize: '0.75rem'
        },
        "& p:nth-child(2)": {
            wordBreak: 'break-word',
            letterSpacing: '0.031rem',
            height: '100%',
            color: '#9CA3AF',
            fontSize: '0.75rem'
        },

    }
})