import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    sideBarWrapper: {
        boxShadow: "0 0 6px #cbcbcb", background: '#fff', zIndex: 2, minHeight: '100vh'
    }, siteLogo: {
        top: 0,
        margin: "0 0 1.25rem",
        display: "flex",
        zIndex: 5,
        position: "sticky",
        background: "white",
        alignItems: "center",
        justifyContent: "center",
        height: "4.5rem",
        "& svg": {
            cursor: 'pointer'
        },
    }, sideBarItemWrapper: {
        position: 'sticky', top: "5rem", "& .active": {
            background: "#A855F7 !important", color: "#fff"
        },
    }, sideBarItems: {
        cursor: 'pointer',
        color: "#b4b4b4",
        display: "flex",
        fontSize: "1.12rem",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        margin: "0.62rem 0.87rem",
        padding: "0.43rem",
        borderRadius: "0.62rem",
        "& svg": {
            margin: '0 0.75rem 0 0.12rem'
        },
        "&:hover": {
            background: "#A855F7 !important", color: "#fff"
        }
    }
})