import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    footerWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        color: '#6B7280',
        fontSize: '1rem',
        padding: '1.5rem',
        alignItems: 'center',
        "@media(max-width:540px)": {
            flexDirection: 'column',
        }
    }
})