import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    sectionTitle: {
        margin: '2rem 0 !important',
    }, tabList: {
        "@media (max-width:900px)": {
            maxWidth: '76vw'
        }
    }
})