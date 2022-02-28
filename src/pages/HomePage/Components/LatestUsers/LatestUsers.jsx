import {Fragment} from "react";
import {Avatar, Box, Typography} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {MoreVert} from "@mui/icons-material";
import latestUsers from '../../../../Data/latest-users.json'
import {useStyle} from "./LatestUsers.style";

const LatestUsers = ({sectionTitle}) => {
    // get css style
    const classes = useStyle()
    // columns of chart
    const columns = [
        {
            field: "name", headerName: 'Name', width: 220, renderCell: (params) => {
                return (
                    <Box className={classes.userName}>
                        <Avatar variant={"rounded"} className={'userListImg'} src={params.row.avatar}/>
                        <Typography> {params.row.name}</Typography>
                    </Box>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 220,
            renderCell: (params) => {
                return (
                    <Typography>{params.row.email}</Typography>
                )
            }
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 160,
            renderCell: (params) => {
                return (
                    <Box className={classes.userStatus} sx={{
                        background: (params.row.status === 'verified') ? "#e4ecf7" : "#fbdddd"
                    }}>
                        <Typography variant={'span'} sx={{
                            background: (params.row.status === 'verified') ? "#3B82F6" : "#EF4444"
                        }}></Typography>
                        <Typography>{params.row.status}</Typography>
                    </Box>
                )
            }
        },
        {
            field: 'actions',
            type: 'actions',
            width: 60,
            sortable: false,
            renderCell: (params) => {
                return (
                    <Box className={classes.userAction}>
                        <MoreVert/>
                    </Box>
                )
            }
        },
    ];
    // rows of chart
    const rows = latestUsers
    return (
        <>
            <Typography variant={'h6'} className={classes.sectitonTitle}>{sectionTitle}</Typography>
            <Box height={670}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </Box>
        </>
    )
}
export default LatestUsers