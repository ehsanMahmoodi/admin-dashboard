import {makeStyles} from "@mui/styles";

export const useStyle = makeStyles({
    sectionTitle: {
        margin: '2rem 0 !important'
    }, activitiSection: {
        marginBottom: '1rem',
    }, activitisItem: {
        boxShadow: "0 0 6px #cbcbcb",
        borderRadius: '0.62rem',
        background: '#fff',
        margin: '0 !important',
        padding: '0.81rem'
    }, analyticSection: {
        marginBottom: '1rem'
    }, userSectionItem: {
        boxShadow: "0 0 6px #cbcbcb", borderRadius: '0.62rem', background: "#fff", padding: '1.25rem', "& > div": {
            marginTop: '1rem'
        }
    }
})
