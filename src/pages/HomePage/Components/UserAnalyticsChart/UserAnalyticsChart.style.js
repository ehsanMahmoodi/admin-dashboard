import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    analyticsChartItem: {
        boxShadow: "0 0 6px #cbcbcb",
        textTransform: 'capitalize',
        padding: '1.25rem',
        height: '100%',
        background: '#fff',
        borderRadius: '0.62rem',
        "& h6": {
            color: '#111827', fontSize: '1.5rem', textTransform: 'capitalize', marginBottom: '0.37rem'
        },
    },
})
