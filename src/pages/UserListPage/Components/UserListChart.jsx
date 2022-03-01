import {Avatar, Box, Typography} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {Edit} from "@mui/icons-material";
import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import customers from '../../../Data/customers.json'
import {useStyle} from "./UserListChart.style";
import {PublicContext} from "../../../context/context";

const UserListChart = () => {
    const navigate = useNavigate();
    // get css style
    const classes = useStyle()
    // get state from context
    const {userList} = useContext(PublicContext)
    const handelOpenMenu = (userId) => {
        const filteredUsers = userList.filter((user) => {
            return user.id === userId
        })
        navigate('/user/edit/', {
            state: filteredUsers[0]
        })
    }
    const columns = [{
        field: "name", headerName: 'Name', width: 300, renderCell: (params) => {
            return (<Box className={classes.userName}>
                <Avatar variant={"rounded"} className={'userListImg'} src={params.row.avatar}/>
                <Typography> {params.row.name}</Typography>
            </Box>)
        }
    }, {
        field: 'email', headerName: "Email", width: 270, renderCell: (params) => {
            return (<Typography>{params.row.email}</Typography>)
        }
    }, {
        field: 'phone', headerName: 'Phone', width: 200, renderCell: (params) => {
            return (<Typography>{params.row.phone}</Typography>)
        }
    }, {
        field: 'total_spend', headerName: 'Total Spend', width: 130, renderCell: (params) => {
            return (<Typography>{params.row.total_spend}</Typography>)
        }
    }, {
        field: 'total_orders', headerName: 'Total Orders', width: 130, renderCell: (params) => {
            return (<Typography>{params.row.total_orders}</Typography>)
        }
    }, {
        field: 'actions', type: 'actions', width: 60, sortable: false, renderCell: (params) => {
            return (<Box className={classes.userAction}>
                <Edit onClick={() => handelOpenMenu(params.row.id)}/>
            </Box>)
        }
    },];
    return (<Box height={670}>
        <DataGrid
            rows={customers}
            columns={columns}
            disableSelectionOnClick
            pageSize={25}
        />
    </Box>)
}
export default UserListChart