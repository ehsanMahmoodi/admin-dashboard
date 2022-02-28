import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    cardTitle:{
        margin: '0 0 0.62rem',
        display: 'flex',
        justifyContent: 'space-between',
        "& svg:nth-child(1)": {
            color: '#A855F7',
            width: '2rem',
            height: '2rem'
        }, "& svg:nth-child(3)": {
            color: '#9CA3AF',
            cursor: 'pointer'
        },
        "& > div": {
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            color: "#22C55E",
            "& p": {
                fontSize: '0.87rem !important',
            },
            "& svg": {
                marginRight: '0.37rem',
                background: "#DCFCE7",
                borderRadius: "50%",
                width: "1.12rem",
                height: "1.12rem"
            }
        }
    },
    cardBody:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    innerCardDetails:{
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        '& p:nth-child(1)': {
            fontWeight: 600,
            fontSize: '1.87rem'
        },
        '& p:nth-child(2)': {
            color: "#6B7280",
            fontSize: '1rem',
            textTransform: "capitalize"
        }
    },
    innerCardChart:{
        width: '50% !important',
        height: '3.12rem !important',
    }
})