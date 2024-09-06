import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody,Button } from '@mui/material';
import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';

const View = () => {
    var [user, setUser] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3004/view")
            .then((response) => {
                console.log(response.data)
                setUser(response.data)
            })
    })
const delValue = (id) => {
    
        axios.delete("http://localhost:3004/remove/"+id)
            .then((response) => {

                console.log(response.data.message)
                
    })
    
        }
        
  return (
      <div>
          <h2>VIEW</h2>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                          <TableCell>Department</TableCell>
                          <TableCell>Salary</TableCell>
                          <TableCell></TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {user.map((val) => {
                          return (
                              <TableRow>
                                  <TableCell>{val.Name}</TableCell>
                                  <TableCell>{val.Age}</TableCell>
                                  <TableCell>{val.Department}</TableCell>
                                  <TableCell>{val.Salary}</TableCell>
                                  <TableCell>
                                      <Button size="small" variant="contained" onClick={()=>{upValue(val)}}>update</Button>&nbsp;
                                      <Button size="small" variant="contained" onClick={()=>{delValue(val._id)}}>delete</Button>
                                  </TableCell>
                              </TableRow>
                          )
                      })}
                       </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default View
