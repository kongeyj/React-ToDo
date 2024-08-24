import React, { useState } from 'react'
import { db } from '../appwrite/databases'
function Addtasks(props) {
  const [name, setName] = useState('')
  async function addTask(event) {
    event.preventDefault()
    if (name) {
      await db.tasks.create({ name })
      const response = await db.tasks.list()
      props.setTasks(response.documents)
      setName('')
    } else {
      alert('不能为空')
    }
  }
  return (
    <div className=' text-center'>
      <p className=' text-3xl font-bold mb-6'>ToDo</p>
      <p className=' text-xl'>What needs to be done?</p>
      <form onSubmit={addTask} className='flex flex-col items-center'>
        <input
          onChange={(event) => setName(event.target.value)}
          type='text'
          value={name}
          placeholder='To Do'
          className='w-[85%] m-2 p-3 text-xl  text-gray-400 border-2 border-black  focus:outline-none focus:border-blue-500 focus:border-dashed focus:border-2'
        />
        <button className='m-2 text-xl w-[85%] p-3 bg-black text-white'>
          Add
        </button>
      </form>
    </div>
  )
}

export default Addtasks
