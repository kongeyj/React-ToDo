import { useState, useEffect } from 'react'
import { db } from '../appwrite/databases'
function Tasksfilter() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('All')
  const s = ['All', 'Action', 'Completed']
  useEffect(() => {
    init()
  })
  useEffect(() => {
    tasksFilter()
  }, [filter])
  const init = async () => {
    const response = await db.tasks.list()
    setTasks(response.documents)
  }
  const tasksFilter = async () => {
    const response = await db.tasks.list()
    setTasks(response.documents)
  }
  const createTask = async (name) => {
    await db.tasks.create({ name })
    init()
  }
  const updateTask = async (id, name) => {
    await db.tasks.update(id, { name })
    init()
  }
  const deleteTask = async (id) => {
    await db.tasks.delete(id)
    init()
  }
  return
}
