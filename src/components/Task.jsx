import React, { useState } from 'react'
import { db } from '../appwrite/databases'
function Task(props) {
  const [isEditing, setIsEditing] = useState(false)
  const [newName, setNewName] = useState('')
  async function saveTask(event) {
    event.preventDefault()
    if (newName) {
      updateTask(props.completed, newName)
      setIsEditing(false)
    } else {
      alert('不能为空')
    }
  }
  async function updateTask(completed, name = props.name) {
    await db.tasks.update(props.id, { name: name, completed: completed })
    const response = await db.tasks.list()
    props.setTasks(response.documents)
  }
  async function deleteTask() {
    await db.tasks.delete(props.id)
    const response = await db.tasks.list()
    props.setTasks(response.documents)
  }
  let one
  let two
  if (isEditing) {
    one = (
      <div className=' space-x-8'>
        <input
          onChange={(event) => setNewName(event.target.value)}
          type='text'
          placeholder={props.name}
          className='h-8 w-full px-2 border-2 border-black focus:outline-none focus:border-black focus:border-dashed focus:border-2'
        />
      </div>
    )
    two = (
      <div className='grid grid-cols-2 gap-6'>
        <input
          onClick={() => setIsEditing(false)}
          type='button'
          value='Cancel'
          className=' border-2 border-black text-xl p-2 rounded-md'
        />
        <input
          type='submit'
          value='Save'
          className='border-2 text-white bg-black text-xl p-2 rounded-md'
        />
      </div>
    )
  } else {
    one = (
      <div className='flex space-x-8'>
        <input
          defaultChecked={props.completed}
          onChange={(event) => {
            updateTask(event.target.checked)
          }}
          type='checkbox'
          className='w-8 h-8'
        />
        <p className=' text-2xl'>{props.name}</p>
      </div>
    )
    two = (
      <div className='grid grid-cols-2 gap-6'>
        <input
          onClick={() => setIsEditing(true)}
          type='button'
          value='Edit'
          className=' border-2 border-black text-xl p-2 rounded-md'
        />
        <input
          type='button'
          onClick={() => deleteTask()}
          value='Delete'
          className='border-2 text-white bg-red-500 text-xl p-2 rounded-md'
        />
      </div>
    )
  }
  return (
    <div className='w-[85%] mx-auto my-2'>
      <form onSubmit={saveTask} className='space-y-2'>
        {one}
        {two}
      </form>
    </div>
  )
}

export default Task
