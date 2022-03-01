import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    cardWrapper: {
        maxWidth: '53.75rem', maxHeight: '26.81rem', width: '100%', height: '100%',
    }, cardHeader: {
        "& p": {
            fontWeight: 600, textTransform: 'capitalize', color: '#1F2937', fontSize: '1.12rem', marginBottom: '0.75rem'
        }, "& span": {
            color: '#4B5563', fontSize: '1rem'
        }
    }, cardBody: {
        boxShadow: "0 0 6px #cbcbcb",
        marginTop: '1.5rem',
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '0.37rem',
        "& > p": {
            fontWeight: 500,
            fontSize: '1rem',
            color: '#4B5563',
            marginBottom: '0.43rem',
            width: "100%",
            maxWidth: "23.12rem",
        },
        "& button": {
            maxWidth: '10rem',
            width: '100%',
            height: "2rem",
            border: 'none',
            outline: 'none',
            borderRadius: '0.37rem',
            backgroundColor: '#EF4444',
            fontSize: '1rem',
            color: '#fff !important',
            cursor: 'pointer',
            marginTop: '1rem'
        }
    }
})