import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    userName: {
        width: '100%', height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', "& > p": {
            marginLeft: "0.62rem"
        }, "& img": {
            objectFit: 'cover'
        }
    }, userStatus: {
        borderRadius: '3.12rem',
        width: '100%',
        height: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& span': {
            dispaly: 'inline-block', width: "0.62rem", height: "0.62rem", borderRadius: "50%", marginRight: "0.31rem"
        },
        "& p": {
            textTransform: 'capitalize'
        },
    }, userAction: {
        textAlign: 'center', width: "100%", "& svg": {
            "&:hover": {
                cursor: 'pointer'
            }
        }
    },
})