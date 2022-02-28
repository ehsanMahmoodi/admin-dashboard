import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    userAnalyticsWrapper: {
        boxShadow: "0 0 6px #cbcbcb",
        background: "#fff",
        borderRadius: '0.62rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.25rem',
    }, userAnalyticsDetail: {
        display: 'flex', flexDirection: 'column', textTransform: 'capitalize', "& h6": {
            color: '#111827', fontSize: '1.5rem', marginBottom: '0.37rem',
        }, "& p:nth-child(2)": {
            color: '#6B7280', fontSize: '1.12rem', marginBottom: '0.37rem',
        }, "& p:nth-child(3)": {
            color: '#4ADE80', fontSize: '1rem', marginBottom: '0.37rem',
        }, "& p:nth-child(4)": {
            color: '#4B5563', fontSize: '1.87rem',
        }
    }, userAnalyticStatus: {
        display: 'flex',
        alignItems: 'center',
        height: "6.25rem",
        width: "6.25rem",
        borderRadius: "50%",
        border: "0.87rem solid #E5E7EB",
        borderLeftColor: "#A855F7",
        textAlign: "center",
        justifyContent: "center",
        transform: "rotateZ(45deg)",
        "& p": {
            transform: "rotate(315deg)"
        }
    }
})