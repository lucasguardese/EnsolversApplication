import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, IconButton, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function Task() {
    const [name, setName] = React.useState('')
    const [tasks, setTasks] = React.useState([])
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }

    
    const handleClick = (e) => {
        e.preventDefault()
        const task = { name }
        console.log(task)

        fetch("http://localhost:8080/task/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        }).then(() => {
            console.log("New task has been added.")
        })
        window.location.reload()
    }


    function handleEdit(e, taskid ) {
        e.preventDefault()
        var nameEdited = document.getElementById("edit-text").value
        const task = { taskid, nameEdited }
        console.log('task ID: ' + taskid)
        console.log('task name: ' + nameEdited)

        fetch("http://localhost:8080/task/edit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task)
        }).then(() => {
            console.log("The task has been edited.")
        })
        window.location.reload();
    }


    function handleDelete(e, taskid) {
        e.preventDefault();
        console.log('task ID: ' + taskid)
        fetch("http://localhost:8080/task/delete/" + taskid, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(taskid)
        }).then(() => {
            console.log("The task has been deleted.")
        })
        window.location.reload();
    }

    React.useEffect(() => {
        fetch("http://localhost:8080/task/getAll")
            .then(res => res.json())
            .then((result) => {
                setTasks(result)
            }
            )
    }, [])



    return (
        <Container>
            <Paper elevation={5} style={paperStyle} >
                <h1 style={{ color: "darkblue" }}>Add Task</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Task" variant="standard" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <Button color="success" onClick={handleClick} variant="contained" >Submit</Button>
                </Box>
            </Paper>

            <h1 style={{ color: "darkblue" }}>To-do list</h1>

            {tasks.map(task => (
                <Paper elevation={5} style={paperStyle} key={task.id}>

                    <AssignmentIcon /><br /><br />
                    <b>Task: </b>{task.name}<Checkbox /><br />
                    <IconButton size="large" aria-label="delete" id="delete" onClick={(e) => { handleDelete(e, task.id) }}>
                        <DeleteIcon />
                    </IconButton><br />
                    Edit task:
                    <TextField  id="edit-text" label="Task" variant="filled" fullWidth />
                    <Button variant="outlined" onClick={(e) => { handleEdit(e, task.id ) }}>Save</Button>

                </Paper>
            ))
            }

        </Container>
    )

}