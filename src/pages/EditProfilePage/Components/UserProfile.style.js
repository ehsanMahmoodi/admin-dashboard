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
        borderRadius: '0.37rem'
    }, userAvatarSection: {
        marginBottom: '1.18rem', display: 'flex', flexDirection: 'column'
    }, userAvatar: {
        display: 'flex', flexDirection: 'column', "& > span": {
            color: '#374151', fontSize: "0.87rem"
        }, "& > div": {
            margin: '0.62rem 0 1.12rem'
        }
    }, createNewAvatar: {
        display: 'flex', justifyContent: 'start', alignItems: 'center', "& input": {
            display: 'none !important'
        }, "& label , button": {
            lineHeight: '1.18rem',
            color: '#374151',
            outline: 'none',
            border: "0.06rem solid #94989f",
            padding: "0.31rem 0.43rem",
            background: "transparent",
            borderRadius: "0.37rem",
            fontSize: "0.87rem !important",
            textAlign: 'center',
            width: "100%",
            height: "100%",
            maxHeight: '1.75rem',
            "&:hover": {
                cursor: 'pointer'
            },
        }, "& button": {
            marginLeft: "1.87rem", maxWidth: "7.81rem",
        }, "& label": {
            maxWidth: "9.81rem",
        }, "@media (max-width:508px)": {
            flexDirection: 'column',
            alignItems: 'center',
            height: "4rem",
            justifyContent: "space-between",
            "& button": {
                marginLeft: "0 !important",
            },
            "& label,button": {
                maxWidth: 'none'
            }
        },
    }, userForm: {
        "& > button": {
            background: "#A855F7",
            maxWidth: "10rem",
            width: "100%",
            height: "2rem",
            border: "none",
            borderRadius: "0.37rem",
            color: "#fff",
            fontSize: "1rem",
            cursor: 'pointer'
        }
    }, formItem: {
        marginBottom: '1.18rem', display: 'flex', flexDirection: 'column', "& label": {
            color: '#374151', fontSize: '0.87rem'
        }, '& input': {
            border: '0.06rem solid #9CA3AF',
            outline: 'none',
            borderRadius: '0.37rem',
            maxWidth: '24rem',
            height: '2.5rem',
            padding: '0.5rem 1rem'
        },
    }
})