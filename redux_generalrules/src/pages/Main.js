import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
//import { typography } from '@mui/system';


import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserList } from '../redux/thunks/appThunks';
// import { getUserList } from '../App';

// const fakeUserList = [
//     { name: 'Ed', username: 'mred', email: 'mred@mail.com' },
//     { name: 'Felix', username: 'mrfelix', email: 'mrfelix@mail.com' },
//     { name: 'John', username: 'mrjohn', email: 'mrjohn@mail.com' },
//     { name: 'Tom', username: 'mrtom', email: 'mrtom@mail.com' },
//     { name: 'Jos', username: 'mrjos', email: 'mrjos@mail.com' },
// ]

const Main = () => {
    const dispatch = useDispatch();
    // const loading = useSelector(state => state.loading);
    // const userList = useSelector(state => state.userList);

    // const { loading, userList } = useSelector(state => state);

    const { loading } = useSelector(state => state.app)
    const { userList } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(getUserList());//artık thunk creator oldugundan getUserList() seklinde kullanılmalı
    }, []);



    return (
        <TableContainer component={Paper} >
            <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Username</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        loading ? "Loading":
                        userList.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.email}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Main
