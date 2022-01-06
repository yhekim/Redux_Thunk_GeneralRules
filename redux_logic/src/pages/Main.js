import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
//import { typography } from '@mui/system';
import axios from 'axios';

import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';

// const fakeUserList = [
//     { name: 'Ed', username: 'mred', email: 'mred@mail.com' },
//     { name: 'Felix', username: 'mrfelix', email: 'mrfelix@mail.com' },
//     { name: 'John', username: 'mrjohn', email: 'mrjohn@mail.com' },
//     { name: 'Tom', username: 'mrtom', email: 'mrtom@mail.com' },
//     { name: 'Jos', username: 'mrjos', email: 'mrjos@mail.com' },
// ]

const Main = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const getUserList=async ()=>{
            try {
                dispatch({type:"SET_LOADING_TRUE"});
                const response=await axios.get("https://jsonplaceholder.typicode.com/users")
                console.log(response)
                dispatch({type:"SET_USER_LIST",payload:response.data})
                
            } catch (error) {
                console.log(error)
                
            }finally{
                dispatch({type:"SET_LOADING_FALSE"})
            }
        }
        getUserList()
    },[])
 

    // const loading = useSelector(state => state.loading)
    //const userList=useSelector(state => state.userList)

    //or

    const {loading,userList}=useSelector(state => state) //destructing

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
