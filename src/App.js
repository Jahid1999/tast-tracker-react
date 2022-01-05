import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from "react";

function App() {
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
  return (
    <div className="container">
      <Header />
      <Tasks  tasks={tasks} />
    </div>
  );
}

export default App;
