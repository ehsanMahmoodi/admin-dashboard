import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    userAnalyticsDetail: {
        boxShadow: "0 0 6px #cbcbcb",
        textTransform: 'capitalize',
        marginBottom: '1rem',
        "&:nth-child(1)": {
            background: '#A855F7', flex: 0.5, marginRight: '2.12rem',
        },
        "&:nth-child(2)": {
            background: '#06B6D4', flex: 0.5
        },
        borderRadius: '0.62rem',
        padding: '0.93rem 0.31rem',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: '#fff',
        "& svg": {
            width: '1.87rem', height: '1.87rem',
        },
        "& p:nth-child(2)": {
            color: '#86EFAC', fontSize: '1rem'
        },
        "& p:nth-child(3)": {
            fontSize: '1.87rem'
        },
        "& p:nth-child(4)": {
            fontSize: '1.12rem'
        }
    }
})