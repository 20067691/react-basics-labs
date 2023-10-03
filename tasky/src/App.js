import React, {useState} from 'react';
import './App.css';
import Task from './components/Task';

function App() {
  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", deadline: "Today" },
      { id: 4, title: "Lab Work", description: "Do my Web App lab work", deadline: "2 days"},
      { id: 5, title: "Gym", description: "WHO WILL CARRY THE BOATS", deadline: "Everday"}
    ]
  });
  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
    />
  ))}
    </div>
  );
}

export default App;
