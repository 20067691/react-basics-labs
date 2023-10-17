import React, {useState} from 'react';
import './App.css';
import Task from './components/Task';
import AddTaskForm from './components/Form';
import { v4 as uuidv4 } from 'uuid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", done: false },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", done: false },
      { id: 3, title: "Tidy up", deadline: "Today", done: false },
      { id: 4, title: "Lab Work", description: "Do my Web App lab work", deadline: "2 days", done: false},
      { id: 5, title: "Gym", description: "WHO WILL CARRY THE BOATS", deadline: "Everday", done: false}
    ]
  })

  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: ""
  });

  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }

  const deleteHandler = (taskIndex) => {
    const tasks =[...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  }

  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
        form.title = event.target.value;
        break;
      case "description":
        form.description = event.target.value;
        break;
      case "deadline":
        form.deadline = event.target.value;
        break;
      default:
        form = formState;
    }
    setFormState(form);
  }
  console.log(formState);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const tasks = [...taskState.tasks];
    const form = {...formState};

    form.id = uuidv4();

    tasks.push(form);
    setTaskState({tasks});
  }
;
  return (
    <div className="container">
            {/* App Header */}
            <Container component="main">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          gutterBottom
          sx = {{
            backgroundColor: 'gray',
            textAlign: 'center',
            color: 'white',
            padding: '20px',
            margin: '20px 0 40px 0',
            borderRadius: '4px'
          }}
        >
          Tasky
        </Typography>
      </Container>
      {/* End App Header */}
      {taskState.tasks.map((task, index) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
      done={task.done}
      markDone={() => doneHandler(index)}
      deleteTask = {() => deleteHandler(index)}
    />
  ))}
  <AddTaskForm submit={formSubmitHandler} change={formChangeHandler} />

    </div>
  );
}

export default App;
