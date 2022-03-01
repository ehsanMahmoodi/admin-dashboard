import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    recentContantsUserItem: {
        display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: '0.62rem', "& svg": {
            margin: '0 1.25rem', "&:hover": {
                cursor: 'pointer'
            }
        }
    }, recentContantsUserDetail: {
        display: "flex", width: '100%', alignItems: "center", "& p:nth-child(1)": {
            color: '#4B5563', textTransform: 'capitalize'
        }, "& p:nth-child(2)": {
            color: '#9CA3AF'
        }
    }, userAcountDetail: {
        marginLeft: '0.75rem'
    }
})