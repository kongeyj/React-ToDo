import Addtasks from './components/Addtasks'
import Button from './components/Button'
import Task from './components/Task'
import { db } from './appwrite/databases'
import { Query } from 'appwrite'
import { useEffect, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setfilter] = useState('All')
  const filterNames = ['All', 'Action', 'Completed']
  useEffect(() => {
    init()
  }, [filter])
  const fil = {
    All: [],
    Action: [Query.equal('completed', true)],
    Completed: [Query.equal('completed', false)],
  }
  const init = async () => {
    const response = await db.tasks.list(fil[filter])
    setTasks(response.documents)
  }
  const tasksTemp = tasks.map((task) => (
    <Task
      key={task.$id}
      name={task.name}
      completed={task.completed}
      id={task.$id}
      setTasks={setTasks}
    ></Task>
  ))
  const buttons = filterNames.map((name) => (
    <Button
      key={name}
      name={name}
      setfilter={setfilter}
      filter={filter}
    ></Button>
  ))
  return (
    <div className=' rounded-md shadow-lg shadow-slate-600 bg-white w-1/3 min-w-96 mx-auto mt-4 p-8'>
      <Addtasks addTask={db.tasks.create} setTasks={setTasks}></Addtasks>
      <div className='w-[85%] my-2 mx-auto flex justify-between gap-2'>
        {buttons}
      </div>
      {tasksTemp}
    </div>
  )
}

export default App
