import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react";
import AddTask from './components/AddTask';

function App() {
  const [showAddButton, setShowAddButton] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id:1,
        text:'Task 1',
        date: '03-01-2022',
        reminder: true,
    },
    {
        id:2,
        text:'Task 2',
        date: '03-01-2022',
        reminder: true,
    },
    {
        id:3,
        text:'Task 3',
        date: '03-01-2022',
        reminder: false,
    },
])

//Delete Task
const deleteTask = (id) => {
//  console.log(id);
    setTasks(tasks.filter((task) => task.id !== id))
} 

//Toggle Reminder
const toggleReminder = (id) => {
  //  console.log(id);
  setTasks(tasks.map((task) => task.id ==id ? {...task, reminder: !task.reminder} : task))
  } 

// Add Task
const addTask = (task) => {
  console.log(task)
  const id = Math.ceil(Math.random() * 1000) + 1;

  const newTask = {id, ...task}
  setTasks([...tasks, newTask]);
}

  return (
    <div className="container">
      <Header onAddClick={() => setShowAddButton(!showAddButton)} showAdd = {showAddButton} />
      {
        showAddButton && <AddTask onAdd={addTask} />
      }
      
      {
        tasks.length > 0 ? <Tasks  tasks={tasks} onDelete = {deleteTask}  onToggle = {toggleReminder} /> :   
        'No Tasks Left'
      }
      
    </div>
  );
}

export default App;
