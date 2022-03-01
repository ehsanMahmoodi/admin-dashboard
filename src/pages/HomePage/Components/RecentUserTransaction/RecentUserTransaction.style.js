import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    recentUserTransactionWrapper: {
        boxShadow: "0 0 6px #cbcbcb",
        marginTop: '1rem',
        borderRadius: '0.62rem',
        background: "#fff",
        padding: '1.25rem',
        textTransform: 'capitalize',
        "& > h6": {
            marginBottom: '1.37rem'
        }
    },
})