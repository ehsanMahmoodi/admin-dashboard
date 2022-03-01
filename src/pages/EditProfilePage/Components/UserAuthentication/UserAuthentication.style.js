import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    cardWrapper: {
        maxWidth: '53.75rem',
        maxHeight: '26.81rem',
        width: '100%',
        height: '100%',
    },
    cardHeader: {
        "& p": {
            fontWeight: 600,
            textTransform: 'capitalize',
            color: '#1F2937',
            fontSize: '1.12rem',
            marginBottom: '0.75rem'
        },
        "& span": {
            color: '#4B5563',
            fontSize: '1rem'
        }
    },
    cardBody: {
        boxShadow: "0 0 6px #cbcbcb",
        marginTop: '1.5rem',
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '0.37rem',
        "& p:nth-child(1)": {
            fontWeight: 500,
            fontSize: '1.12rem',
            color: '#1F2937',
            marginBottom: '0.43rem'
        },
        "& p:nth-child(2)": {
            width: "100%",
            maxWidth: "20rem",
            color: "#4B5563"
        },
        "& button": {
            lineHeight: '2.25rem',
            maxWidth: '10rem',
            width: '100%',
            height: "2rem",
            border: 'none',
            outline: 'none',
            borderRadius: '0.37rem',
            backgroundColor: '#A855F7',
            fontSize: '1rem',
            color: '#fff',
            cursor: 'pointer',
            marginTop: '1rem'
        }
    }
})