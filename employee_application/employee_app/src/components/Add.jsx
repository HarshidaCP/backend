import React from 'react'
import { TextField, Button } from '@mui/material'

const Add = () => {
  return (
      <div>
          <TextField label=" Name" variant="outlined" /><br /><br />
          <TextField label="Age" variant="outlined" /> <br /><br />
          <TextField label="Department" variant="outlined" /> <br /><br />
          <TextField label="Salary" variant="outlined" /> <br /><br />
          <Button variant="contained">Add</Button>
    </div>
  )
}

export default Add